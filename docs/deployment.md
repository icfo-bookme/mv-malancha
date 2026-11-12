# Hostinger VPS auto deployment

This uses the same SSH deployment pattern as the AL Waqiah project:

`push to main → git fetch/reset → npm install → npm run build → pm2 restart mvmalancha`

No lint or tests run. The final HTTP request prints app availability, as in the reference workflow; it is informational and does not fail deployment.

## GitHub Secrets

Provide only these three repository Actions secrets:

- `VPS_HOST`: server IP
- `VPS_USER`: SSH username
- `VPS_PASSWORD`: SSH password

## Server

- Git checkout: `/var/www/mv-malancha`, with `origin` configured and access to fetch this repository. Private repositories need working server-side GitHub authentication, as in the other project.
- Environment file: `/var/www/mv-malancha/.env.production`. It is ignored by Git and preserved during sync. Rename/remove `.env.local` and `.env.production.local` on the VPS to avoid overriding it.
- PM2 process: `mvmalancha`, owned by the SSH deployment user.
- App port: `3003`, listening on `127.0.0.1`. Point the mvmalancha.com reverse proxy at http://127.0.0.1:3003.
- Node.js/npm and PM2 must already be installed. The script uses `.runtime` Node 22 if present, or installs it there if necessary, leaving global Node and other applications unchanged.

`ecosystem.config.cjs` sets the working directory to this repository and applies the compatible Node runtime. This also moves any existing PM2 process off the old `releases/` deployment path. The workflow then explicitly runs `pm2 restart mvmalancha --update-env` and saves the process list.

The server checkout is force-synced with `origin/main`, matching the reference workflow. Tracked local server edits will be overwritten; edit the app locally and push changes. Build failures stop before PM2 restart, though an in-place build may affect the running app's build files. This workflow does not provide atomic releases or automatic rollback.

Enable PM2 startup once on the VPS with `pm2 startup` and follow its printed instructions. Configure DNS, Nginx and HTTPS for mvmalancha.com; Nginx must proxy to http://127.0.0.1:3003. Server port 22 is used for SSH.
