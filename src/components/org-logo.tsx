import Image from "next/image";

type OrgLogoProps = {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg";
  shape?: "circle" | "square";
  className?: string;
};

const sizes = {
  sm: { box: 36, image: 22 },
  md: { box: 44, image: 28 },
  lg: { box: 52, image: 34 },
} as const;

export function OrgLogo({
  src,
  alt,
  size = "md",
  shape = "circle",
  className = "",
}: OrgLogoProps) {
  const dim = sizes[size];
  const radius = shape === "square" ? "rounded-lg" : "rounded-full";
  const isSvg = src.endsWith(".svg");

  return (
    <div
      className={`relative flex shrink-0 items-center justify-center overflow-hidden border border-border bg-muted shadow-sm ring-1 ring-foreground/5 ${radius} ${className}`}
      style={{ width: dim.box, height: dim.box }}
    >
      <Image
        src={src}
        alt={alt}
        width={dim.image}
        height={dim.image}
        className={isSvg ? "h-[70%] w-[70%] object-contain" : "object-contain"}
      />
    </div>
  );
}
