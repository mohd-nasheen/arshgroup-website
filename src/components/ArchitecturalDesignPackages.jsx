import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const packageData = [
  {
    id: "standard",
    index: "01",
    name: "Standard Package",
    price: 2299,
    subtitle: "Balanced package with expanded design and finish scope.",
    categories: [
      {
        title: "Design",
        items: [
          "Scheme drawing: all floors (2D)",
          "Elevation design (3D)",
          "Half layout: all floors (3D)",
          "Electrical drawings: all floors (2D)",
          "Plumbing drawing: all floors (2D)",
          "Working drawing: all floors (2D)",
        ],
      },
      {
        title: "Project Management",
        items: [
          "Dedicated full-time site engineer",
          "Project manager visit twice in a week",
          "Daily photo upload and status monitoring app",
          "Architect support till design completion",
        ],
      },
      {
        title: "Structure",
        items: [
          "Basement height: up to 3 feet",
          "Steel: Arun TMT, GBR, or equivalent",
          "Wire-cut bricks for partition walls (9-inch exterior, 4.5-inch inner)",
          "Cement: Ramco or Dalmia",
          "M sand and P sand as per masonry and plastering scope",
          "Concrete grade: M20 with RMC for roof",
          "Ceiling height: 10 feet",
          "Parapet wall: 3 feet height, 6-inch thick",
          "Anti-termite treatment for basement",
        ],
      },
      {
        title: "Bathroom and Plumbing",
        items: [
          "Full-height wall tiles up to Rs 50/sqft",
          "Bath and CP fittings by Parryware up to Rs 20000 per bathroom",
          "Plumbing: Ashirvad",
          "Overhead tank: 2000 litres Ultratech, 3 layered",
        ],
      },
      {
        title: "Flooring",
        items: [
          "Living, dining, bedrooms and kitchen: 4x2 vitrified up to Rs 65/sqft",
          "Balcony and utility: 2x2 antiskid up to Rs 50/sqft",
          "Staircase full body tile up to Rs 110/sqft",
          "Car parking heavy duty tile up to Rs 50/sqft",
          "Terrace screed concreting with waterproofing",
        ],
      },
      {
        title: "Kitchen and Dining",
        items: [
          "Wall tile: vitrified 2x2 up to Rs 55/sqft",
          "Sink faucet up to Rs 3000",
          "Kitchen sink with drain up to Rs 5000",
          "Dining wall mounted wash basin",
          "Kitchen granite top up to Rs 140/sqft",
        ],
      },
      {
        title: "Door, Windows and Railing",
        items: [
          "Main door: Malaysian teak readymade with lock up to Rs 30000",
          "Room doors: flush door with mahogany frame",
          "Bathroom door: WPC door and frame",
          "Windows: UPVC sliding white, max 5x5, one per room",
          "Staircase railing: SS 304 grade",
          "Balcony railing: SS 304 with toughened glass",
        ],
      },
      {
        title: "Painting",
        items: [
          "Inner wall putty by Nippon",
          "Wall and ceiling paint: primer plus Breeze emulsion by Nippon",
          "Exterior paint: Sumo Xtra by Nippon",
          "Front elevation putty included",
        ],
      },
      {
        title: "Electrical",
        items: [
          "Wires: Orbit (FRLS)",
          "Switches: Legrand",
          "Expanded point layout for bedrooms and living areas",
          "AC points for bedrooms and living room",
        ],
      },
      {
        title: "Additional Scope (Charged Extra)",
        items: [
          "Compound wall and gate",
          "Sump and septic tank",
          "Lift, lift pit and shaft",
          "Electricity connection",
          "Building plan approval",
          "Elevation special materials",
        ],
      },
    ],
  },
  {
    id: "premium",
    index: "02",
    name: "Premium Package",
    price: 2549,
    subtitle: "High-control package for elevated architecture and interiors.",
    categories: [
      {
        title: "Design",
        items: [
          "Scheme drawing: all floors (2D)",
          "Elevation design (3D)",
          "Half layout: all floors (3D)",
          "Electrical drawings: all floors (2D)",
          "Plumbing drawing: all floors (2D)",
          "Working drawing: all floors (2D)",
          "Soil test report",
          "Structural drawings",
          "Furniture layout: all floors (2D)",
          "Elevation detail drawing (2D)",
        ],
      },
      {
        title: "Project Management",
        items: [
          "Dedicated full-time site engineer",
          "Project manager daily site visit",
          "Daily photo upload and status monitoring app",
          "Dedicated architect through project with material selection support",
        ],
      },
      {
        title: "Structure",
        items: [
          "Basement height: up to 3.5 feet",
          "Steel: ARS, iSteel, or equivalent",
          "Wire-cut bricks for partition walls",
          "Cement: Ramco, Dalmia, or UltraTech",
          "Concrete grade: M20 with RMC for roof",
          "Ceiling height: 10 feet FFL to FFL",
          "RCC lift pit and shaft included if required",
          "Anti-termite treatment for basement",
        ],
      },
      {
        title: "Bathroom and Plumbing",
        items: [
          "Full-height digital vitrified wall tiles up to Rs 85/sqft",
          "Jaquar fittings up to Rs 30000 per bathroom",
          "Plumbing: Ashirvad or Finolex",
          "Overhead tank: 3000 litres with sensor",
          "Solar heater plumbing lines included if required",
        ],
      },
      {
        title: "Flooring",
        items: [
          "Main areas tiles up to Rs 90/sqft",
          "Balcony and utility up to Rs 60/sqft",
          "Staircase granite up to Rs 160/sqft",
          "Car parking heavy stone up to Rs 80/sqft",
          "Terrace cooling tile with waterproofing",
        ],
      },
      {
        title: "Kitchen and Dining",
        items: [
          "Wall tile 4x2 up to Rs 65/sqft",
          "Designer sink faucet up to Rs 4500",
          "Quartz sink up to Rs 7000",
          "Dining wash basin with granite counter",
          "Kitchen granite top up to Rs 160/sqft",
        ],
      },
      {
        title: "Door, Windows and Railing",
        items: [
          "Main door: Ghana teak up to Rs 52000",
          "Room doors: flush door with laminate and Ghana wood frame",
          "Bathroom door: WPC",
          "Windows: UPVC sliding, no size or quantity restriction",
          "Staircase railing: SS 304",
          "Balcony: full toughened glass with SS 304 railing",
        ],
      },
      {
        title: "Painting",
        items: [
          "Inner wall putty: Birla",
          "Wall and ceiling: primer plus premium emulsion",
          "Exterior paint: Asian Apex",
          "Elevation putty for two sides",
        ],
      },
      {
        title: "Electrical",
        items: [
          "Wires: Finolex or Havells (FRLS)",
          "Switches: GM",
          "Expanded room-wise switch matrix",
          "Single service electricity panel board with RLCB exterior grade",
        ],
      },
      {
        title: "Additional Scope (Charged Extra)",
        items: [
          "Compound wall and gate",
          "Sump and septic tank",
          "Lift",
          "Electricity connection",
          "Building plan approval",
          "Elevation special materials",
        ],
      },
    ],
  },
  {
    id: "ultra",
    index: "03",
    name: "Ultra Luxury",
    price: 2999,
    subtitle: "Top-tier package with deep detailing and advanced material scope.",
    categories: [
      {
        title: "Design",
        items: [
          "Scheme drawing: all floors (2D)",
          "Elevation design (3D)",
          "Half layout: all floors (3D)",
          "Electrical drawings: all floors (2D)",
          "Plumbing drawing: all floors (2D)",
          "Working drawing: all floors (2D)",
          "Soil test report",
          "Structural drawings",
          "Furniture layout: all floors (2D)",
          "Elevation detail drawing (2D)",
          "Site assessment and site plan",
          "Interior views: all floors (3D)",
          "Interior detailing: all rooms (2D)",
          "Interior 3D walk-through",
          "Approval drawing",
          "Landscaping architectural design",
        ],
      },
      {
        title: "Project Management",
        items: [
          "Dedicated full-time site engineer",
          "Project manager daily site visit",
          "Daily photo upload and status monitoring app",
          "Dedicated architect with material and brand support including decor",
        ],
      },
      {
        title: "Structure",
        items: [
          "Basement height: up to 5 feet",
          "Steel: TATA Steel",
          "Wire-cut bricks for partition walls",
          "Cement: Ramco, Dalmia, or UltraTech",
          "River sand for masonry and plastering",
          "Concrete grade: M25 with RMC for roof",
          "Ceiling height: 11 feet FFL to FFL",
          "High-strength reinforcement as per structural drawings",
          "RCC lift pit, shaft, and base slab included if required",
          "Anti-termite treatment for basement",
        ],
      },
      {
        title: "Bathroom and Plumbing",
        items: [
          "Full-height vitrified wall tiles up to Rs 120/sqft",
          "Kohler fittings up to Rs 60000 per bathroom",
          "HDPE flexible plumbing pipe option",
          "RCC overhead tank up to 6000 litres with waterproofing",
          "Solar heater plumbing lines included if required",
        ],
      },
      {
        title: "Flooring",
        items: [
          "Main areas: quartz tiles up to Rs 200/sqft",
          "Balcony and utility up to Rs 60/sqft",
          "Staircase marble up to Rs 350/sqft",
          "Car parking granite up to Rs 120/sqft",
          "Terrace exterior vitrified tile with waterproofing",
        ],
      },
      {
        title: "Kitchen and Dining",
        items: [
          "Designer wall tile 4x2 up to Rs 125/sqft",
          "Floor-mounted pull-out sink faucet up to Rs 8000",
          "Multifunction sink up to Rs 15000",
          "Premium designer wash basin with marble counter",
          "Kitchen top: quartz stone up to Rs 350/sqft",
        ],
      },
      {
        title: "Door, Windows and Railing",
        items: [
          "Main door: designer wood or security steel option with digital lock",
          "Room doors: flush door with laminate and Ghana wood frame",
          "Waterproof flush door with designer laminate option",
          "UPVC colored openable windows with toughened glass, no size limit",
          "Staircase railing: toughened glass with SS, wood, or aluminum",
          "Balcony railing: full toughened glass with aluminum railing",
        ],
      },
      {
        title: "Painting",
        items: [
          "Inner wall putty: Birla",
          "Wall and ceiling: primer plus premium sheen finish",
          "Exterior paint: Apex Ultima Protek",
          "Elevation putty for all sides",
        ],
      },
      {
        title: "Electrical",
        items: [
          "Wires: Finolex or Havells (FRLS)",
          "Switches: touch switches with glass plates",
          "Provision for lift, DG, automation, HVAC, solar and surveillance systems",
          "Electricity panel board up to 2 service connections",
        ],
      },
      {
        title: "Additional Scope (Charged Extra)",
        items: [
          "Compound wall and gate",
          "Sump and septic tank",
          "Lift",
          "Electricity connection",
          "Building plan approval",
          "Elevation special materials",
        ],
      },
    ],
  },
];

function Card({ pkg, selected, onSelect }) {
  return (
    <motion.button
      type="button"
      onClick={onSelect}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={`group relative flex h-full flex-col overflow-hidden border p-6 text-left transition-all duration-400 ${
        selected
          ? "border-wine bg-carbon text-paper shadow-editorial"
          : "border-carbon/10 bg-paper/78 text-carbon hover:border-wine/35"
      }`}
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br from-wine/30 to-transparent blur-2xl" />
      <p className={`text-xs uppercase tracking-[0.18em] ${selected ? "text-paper/50" : "text-graphite/52"}`}>{pkg.index}</p>
      <h3 className="mt-6 font-display text-4xl leading-none">{pkg.name}</h3>
      <p className={`mt-4 min-h-12 text-sm leading-relaxed ${selected ? "text-paper/66" : "text-graphite/74"}`}>{pkg.subtitle}</p>
      <p className="mt-auto pt-8 font-display text-5xl leading-none">
        Rs {pkg.price}
        <span className={`ml-2 font-sans text-xs uppercase tracking-[0.16em] ${selected ? "text-paper/46" : "text-graphite/52"}`}>
          / sqft
        </span>
      </p>
      <span
        className={`mt-6 inline-flex items-center border px-4 py-2 text-[11px] uppercase tracking-[0.16em] ${
          selected ? "border-paper/25 text-paper/75" : "border-carbon/15 text-carbon/68"
        }`}
      >
        View Package Spec
      </span>
    </motion.button>
  );
}

export default function ArchitecturalDesignPackages() {
  const [selectedId, setSelectedId] = useState("premium");
  const [openCategory, setOpenCategory] = useState(0);

  const activePackage = useMemo(
    () => packageData.find((item) => item.id === selectedId) || packageData[1],
    [selectedId]
  );

  return (
    <section id="construction-packages" className="bg-alabaster py-18 text-carbon md:py-24">
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 0.75, ease: [0.2, 0.65, 0.2, 1] }}
          className="grid gap-8 border-t border-carbon/10 pt-8 md:grid-cols-12"
        >
          <div className="md:col-span-3">
            <p className="eyebrow">Our Home Construction Packages</p>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-display text-4xl leading-none md:text-6xl">Package logic, elevated with a premium interface.</h2>
            <p className="mt-6 max-w-4xl text-base leading-relaxed text-graphite/72 md:text-lg">
              Built from the same package framework and specification logic, redesigned with editorial structure,
              cinematic spacing, and smooth interaction.
            </p>
          </div>
        </motion.div>

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
          {packageData.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.24 }}
              transition={{ duration: 0.6, delay: idx * 0.06 }}
              className="flex"
            >
              <Card
                pkg={pkg}
                selected={pkg.id === selectedId}
                onSelect={() => {
                  setSelectedId(pkg.id);
                  setOpenCategory(0);
                }}
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <motion.div
            key={activePackage.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 180, damping: 18 }}
            className="border border-carbon/10 bg-paper p-6 lg:col-span-4"
          >
            <p className="text-xs uppercase tracking-[0.18em] text-graphite/55">Selected Package</p>
            <h3 className="mt-5 font-display text-5xl leading-none">{activePackage.name}</h3>
            <p className="mt-4 text-sm leading-relaxed text-graphite/72">{activePackage.subtitle}</p>
            <div className="mt-8 border-y border-carbon/10 py-5">
              <p className="text-xs uppercase tracking-[0.16em] text-graphite/52">Base Construction Cost</p>
              <p className="mt-3 font-display text-5xl leading-none">Rs {activePackage.price}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.16em] text-graphite/52">Per sqft</p>
            </div>
            <Link
              to="/contact"
              className="mt-8 inline-flex w-full items-center justify-center border border-carbon bg-carbon px-5 py-4 text-center text-sm uppercase tracking-[0.14em] text-paper transition hover:bg-wine"
            >
              Get Detailed Specification
            </Link>
            <p className="mt-4 text-xs leading-relaxed text-graphite/62">
              Note: minimum overall built-up area should be 2000 sqft.
            </p>
          </motion.div>

          <div className="border border-carbon/10 bg-paper lg:col-span-8">
            <div className="border-b border-carbon/10 bg-carbon px-6 py-5 text-paper">
              <p className="text-xs uppercase tracking-[0.16em] text-paper/58">Package Details</p>
              <p className="mt-2 font-display text-3xl leading-none">{activePackage.name}</p>
            </div>

            <div className="divide-y divide-carbon/10">
              {activePackage.categories.map((category, idx) => {
                const open = openCategory === idx;
                return (
                  <div key={category.title} className="overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setOpenCategory((current) => (current === idx ? -1 : idx))}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="text-sm uppercase tracking-[0.16em] text-carbon/78">{category.title}</span>
                      <motion.span
                        animate={{ rotate: open ? 45 : 0 }}
                        transition={{ type: "spring", stiffness: 260, damping: 18 }}
                        className="font-display text-3xl leading-none text-wine"
                      >
                        +
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {open ? (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ type: "spring", stiffness: 200, damping: 24 }}
                          className="px-6 pb-6"
                        >
                          <ul className="grid gap-2 border-l border-carbon/10 pl-4 text-sm leading-relaxed text-graphite/76">
                            {category.items.map((item) => (
                              <li key={item} className="relative pl-4 before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-wine/65">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
