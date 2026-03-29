import * as Flags from "country-flag-icons/react/3x2";

interface FlagProps {
  code: string; // ISO 3166-1 alpha-2 code, e.g. "GB", "US"
  size?: string;
  className?: string;
}

export default function Flag({ code, size = "1.3em", className }: FlagProps) {
  const FlagSvg = Flags[code.toUpperCase() as keyof typeof Flags];
  if (!FlagSvg) return null;
  return (
    <FlagSvg
      style={{ width: size, height: size, borderRadius: "3px", flexShrink: 0, display: "inline-block" }}
      className={className}
    />
  );
}
