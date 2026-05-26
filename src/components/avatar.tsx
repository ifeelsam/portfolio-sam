import Image from "next/image";
import { site } from "@/lib/site";

export function Avatar() {
  return (
    <div className="relative shrink-0">
      <div className="site-avatar-ring overflow-hidden rounded-full">
        <Image
          src="/avatar.jpg"
          alt={`${site.name} profile photo`}
          width={72}
          height={72}
          className="h-[4.5rem] w-[4.5rem] object-cover"
          priority
        />
      </div>
      <span
        className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-card bg-live"
        aria-label="Available"
      />
    </div>
  );
}
