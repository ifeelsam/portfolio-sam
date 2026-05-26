import Image from "next/image";

type OrgLogoProps = {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg";
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
  className = "",
}: OrgLogoProps) {
  const dim = sizes[size];

  return (
    <div
      className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-muted/50 shadow-sm ring-1 ring-white/5 ${className}`}
      style={{ width: dim.box, height: dim.box }}
    >
      <Image
        src={src}
        alt={alt}
        width={dim.image}
        height={dim.image}
        className="object-contain"
      />
    </div>
  );
}
