export default function FooterContact() {
  return (
    <div>
      <h4 className="text-foreground font-bold mb-4 tracking-wide">
        Contact Us
      </h4>
      <ul className="space-y-2.5">
        <li>
          <a
            href="tel:+2348152245314"
            className="hover:text-primary transition-colors inline-flex items-center gap-1.5"
          >
            <span>📞</span> +234 815 224 5314
          </a>
        </li>
        <li className="break-all">
          <a
            href="mailto:info@rockandsafety.com"
            className="hover:text-primary transition-colors inline-flex items-center gap-1.5"
          >
            <span>✉️</span> info@rockandsafety.com
          </a>
        </li>
        <li>📍 Nigeria</li>
        <li>🕒 Mon - Fri: 8:00 AM - 6:00 PM</li>
      </ul>
    </div>
  )
}
