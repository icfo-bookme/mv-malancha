// Keep search and social previews aligned for each public landing page.
export function createPageMetadata({ title, description, path, keywords }) {
  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: "MV Malancha",
      locale: "en_US",
      type: "website",
      images: [{ url: "/SHIP/SHIP6.png", alt: "MV Malancha cruise ship" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/SHIP/SHIP6.png"],
    },
  };
}

export const homeMetadata = createPageMetadata({
  path: "/",
  title: "MV Malancha Ship Ticket Booking | Online Ticket",
  description: "Book MV Malancha ship tickets online for Cox'sbazar to Saint Martin. Explore seats, cabins and booking options. এমভি মালঞ্চ শিপ টিকিট বুকিং।",
  keywords: [
    "MV Malancha Ship Ticket Booking", "MV Malancha Online Ticket", "এমভি মালঞ্চ শিপ টিকিট বুকিং",
    "MV Malancha Cox'sbazar to Saint Martin", "Buy MV Malancha Ticket Online", "Saint Martin Cruise Ship Ticket",
    "MV Malancha Official Website", "এমভি মালঞ্চ টিকিট অনলাইন",
    "Official website to book MV Malancha ship ticket online",
    "Book MV Malancha cruise ticket from Cox'sbazar BIWTA jetty",
    "MV Malancha ship online seat reservation Bangladesh", "Best price MV Malancha ticket booking Cox'sbazar",
    "অনলাইন থেকে এমভি মালঞ্চ জাহাজের টিকিট কাটার নিয়ম",
  ],
});

export const ticketMetadata = createPageMetadata({
  path: "/ticket",
  title: "MV Malancha Ticket Price & Cabin Booking | Online Tickets",
  description: "Explore MV Malancha ticket prices, seat fares and cabin booking options for Cox'sbazar to Saint Martin. এমভি মালঞ্চ টিকিট ভাড়া ও বুকিং।",
  keywords: [
    "MV Malancha Ticket Price", "MV Malancha Cabin Booking", "এমভি মালঞ্চ টিকিট ভাড়া ও বুকিং",
    "MV Malancha Seat Price", "MV Malancha Deluxe Cabin Booking", "MV Malancha VIP Cabin Price",
    "MV Malancha Royal Cabin Fare", "Saint Martin Ship Ticket Price 2026-2027", "এমভি মালঞ্চ জাহাজের কেবিন ভাড়া",
    "MV Malancha round trip ticket price Cox'sbazar to Saint Martin",
    "MV Malancha main deck seat ticket booking online", "MV Malancha VIP cabin fare and online availability status",
    "Cheap Saint Martin ship ticket booking MV Malancha", "MV Malancha one way ticket fare Cox'sbazar",
    "কক্সবাজার টু সেন্টমার্টিন এমভি মালঞ্চ শিপ টিকিট অনলাইন বুকিং",
  ],
});

export const scheduleMetadata = createPageMetadata({
  path: "/schedule",
  title: "MV Malancha Ship Schedule & Departure Time | Saint Martin",
  description: "Check MV Malancha ship schedules and departure times for Cox'sbazar to Saint Martin, including return trips. এমভি মালঞ্চ সময়সূচী দেখুন।",
  keywords: [
    "MV Malancha Ship Schedule", "MV Malancha Departure Time", "এমভি মালঞ্চ সময়সূচী",
    "Cox'sbazar to Saint Martin Ship Timing", "MV Malancha Nuniarchhara BIWTA Jetty Schedule",
    "Saint Martin Return Ship Schedule MV Malancha", "MV Malancha Daily Travel Timetable", "সেন্টমার্টিন জাহাজের ছাড়ার সময়",
    "MV Malancha ship departure time from Cox'sbazar BIWTA jetty",
    "MV Malancha return schedule from Saint Martin island", "MV Malancha daily travel timetable and booking status",
    "Updated Saint Martin ship schedule 2026-2027", "কক্সবাজার থেকে এমভি মালঞ্চ ছাড়ার সময় ও সিডিউল",
  ],
});

export const paymentMetadata = createPageMetadata({
  path: "/payment",
  title: "MV Malancha Payment Methods | Pay Ship Ticket Online",
  description: "Explore MV Malancha ticket payment methods and bKash payment information. Contact booking support for payment help. এমভি মালঞ্চ পেমেন্ট বিকাশ।",
  keywords: [
    "MV Malancha Payment Methods", "Pay MV Malancha Ticket Online", "MV Malancha bKash Payment",
    "MV Malancha Card Payment Online", "MV Malancha Ticket Refund Policy", "Secure Ticket Booking MV Malancha",
    "এমভি মালঞ্চ পেমেন্ট বিকাশ", "How to pay for MV Malancha ship ticket online",
    "MV Malancha bKash Merchant payment process", "MV Malancha ticket cancellation and refund terms",
    "Instant online ticket booking confirmation MV Malancha", "অনলাইনে সেন্টমার্টিন শিপের টিকিট পেমেন্ট করার উপায়",
  ],
});

export const contactMetadata = createPageMetadata({
  path: "/contact",
  title: "MV Malancha Contact Number | Booking Hotline & WhatsApp",
  description: "Find the MV Malancha contact number, booking hotline, WhatsApp and Chattogram office address for ticket support. এমভি মালঞ্চ বুকিং ফোন নাম্বার।",
  keywords: [
    "MV Malancha Contact Number", "MV Malancha Booking Hotline", "MV Malancha Counter Number Cox'sbazar",
    "MV Malancha Counter Number Chittagong", "MV Malancha Booking Office Dhaka", "MV Malancha WhatsApp Booking",
    "MV Malancha Support Center", "এমভি মালঞ্চ বুকিং ফোন নাম্বার",
    "MV Malancha official contact hotline for ticket booking", "MV Malancha Dhaka ticket booking office address",
    "MV Malancha Cox'sbazar Nuniarchhara jetty booking counter", "Book MV Malancha ship ticket via WhatsApp",
    "এমভি মালঞ্চ টিকিট কাউন্টার",
  ],
});
