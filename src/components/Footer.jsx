import BrandLogo from "./BrandLogo";

function PhoneIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MessageCircleIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22z" />
    </svg>
  );
}

function MailIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function MapPinIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-paper/10 bg-carbon text-paper">
      <div className="page-container py-12">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <BrandLogo size="md" />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-paper/66">
              Luxury interior and architectural construction crafted with precision, performance, and long-term value.
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-paper/66">
              GSTIN: 33EDWPM9146N1Z1
            </p>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <p className="mb-5 text-xs uppercase tracking-[0.22em] text-paper/45">Contact</p>
            <div className="grid gap-4">
              <a
                href="tel:+919445330479"
                className="group inline-flex items-center gap-3 text-sm leading-relaxed text-paper/72 transition-all duration-300 hover:translate-x-1 hover:text-paper"
              >
                <PhoneIcon className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-px" />
                +91 94453 30479
              </a>
              <a
                href="https://wa.me/919445330479"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 text-sm leading-relaxed text-paper/72 transition-all duration-300 hover:translate-x-1 hover:text-paper"
              >
                <MessageCircleIcon className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-px" />
                WhatsApp Us
              </a>
              <a
                href="mailto:yameenmohammed537@gmail.com?subject=Project%20Enquiry"
                className="group inline-flex items-center gap-3 text-sm leading-relaxed text-paper/72 transition-all duration-300 hover:translate-x-1 hover:text-paper"
              >
                <MailIcon className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-px" />
                yameenmohammed537@gmail.com
              </a>
            </div>
          </div>

          {/* Location & Meta */}
          <div className="md:col-span-4">
            <p className="mb-5 text-xs uppercase tracking-[0.22em] text-paper/45">Studio</p>
            <div className="grid gap-4 text-sm leading-relaxed text-paper/55">
              <span className="inline-flex items-center gap-3">
                <MapPinIcon className="h-4 w-4 shrink-0" />
                Chennai &middot; Bangalore
              </span>
              <span className="pl-7">Tamil Nadu &amp; Karnataka</span>
              <span className="pl-7">Residential / Commercial</span>
              <span className="pl-7">Since 2018</span>
            </div>
          </div>
        </div>

        <p className="mt-12 border-t border-paper/10 pt-5 text-xs uppercase tracking-[0.18em] text-paper/45">
          Copyright {new Date().getFullYear()} ArshGroup
        </p>
      </div>
    </footer>
  );
}
