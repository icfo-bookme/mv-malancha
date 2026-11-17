import { createElement } from "react";
import Link from "next/link";
import { parseDocument } from "htmlparser2";
import sanitizeHtml from "sanitize-html";

// Render sanitized article markup as React elements so internal links use Next.js navigation.
export default function BlogContent({ html, className }) {
  const clean = sanitizeHtml(html, {
    allowedTags: ["p", "strong", "em", "a", "h2", "h3", "ul", "ol", "li", "br"],
    allowedAttributes: { a: ["href", "title"] },
  });

  function render(nodes) {
    return nodes.map((node, key) => {
      if (node.type === "text") return node.data;
      if (node.type !== "tag") return null;

      const children = render(node.children || []);
      if (node.name === "a") {
        const { href, title } = node.attribs;
        if (!href) return createElement("span", { key }, children);
        if (href.startsWith("/") && !href.startsWith("//")) {
          return <Link key={key} href={href} title={title}>{children}</Link>;
        }
        return <a key={key} href={href} title={title}>{children}</a>;
      }

      return createElement(node.name, { key }, node.name === "br" ? undefined : children);
    });
  }

  return <div className={className}>{render(parseDocument(clean).children)}</div>;
}
