const SIZES = {
  sm: "h-12 w-12",
  md: "h-14 w-14 md:h-16 md:w-16",
  lg: "h-16 w-16 md:h-[72px] md:w-[72px]",
};

export default function BrandLogo({ size = "md", className = "" }) {
  return (
    <div
      role="img"
      aria-label="ArshGroup"
      className={`shrink-0 rounded-full border border-[#b8976a]/40 bg-white bg-no-repeat shadow-[0_0_0_1px_rgba(184,151,106,0.12)] ${SIZES[size] || SIZES.md} ${className}`}
      style={{
        backgroundImage: "url('/Arshgroup-logo.png')",
        backgroundSize: "220%",
        backgroundPosition: "center 38%",
      }}
    />
  );
}
