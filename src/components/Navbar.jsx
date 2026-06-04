import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { navLinks } from "../data/siteData";
import BrandLogo from "./BrandLogo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSolid, setIsSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsSolid(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        isSolid ? "border-b border-carbon/10 bg-paper/92 text-carbon backdrop-blur-xl" : "text-paper"
      }`}
    >
      <div className="page-container">
        <div className="flex h-20 items-center justify-between">
          <NavLink to="/" className="flex items-center gap-3">
            <BrandLogo size="md" />
            <span className="font-display text-xl leading-none tracking-[0.02em] md:text-2xl">
              <span className={isSolid ? "text-carbon" : "text-white"}>Arsh</span>
              <span className="text-[#b8976a]">Group</span>
            </span>
          </NavLink>

          <button
            className={`inline-flex h-10 w-14 items-center justify-center border text-xs uppercase tracking-[0.16em] md:hidden ${
              isSolid ? "border-carbon/20" : "border-paper/35"
            }`}
            onClick={() => setIsOpen((v) => !v)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            {isOpen ? "X" : "II"}
          </button>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `nav-link ${isSolid ? "" : "!text-paper/78 hover:!text-paper"} ${isActive ? "!text-current" : ""}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        {isOpen && (
          <nav className="border-t border-current/15 bg-paper/95 py-5 text-carbon md:hidden" aria-label="Mobile">
            <div className="mb-4 flex items-center justify-center gap-3">
              <BrandLogo size="sm" />
              <span className="font-display text-xl leading-none tracking-[0.02em]">
                <span className="text-carbon">Arsh</span>
                <span className="text-[#b8976a]">Group</span>
              </span>
            </div>
            <div className="grid gap-4">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="text-sm uppercase tracking-[0.14em] text-carbon/75"
              >
                {item.label}
              </NavLink>
            ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
