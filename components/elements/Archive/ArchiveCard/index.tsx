import type { ArchiveCardProps } from "./interface";
import Image from "next/image";
import { cn } from "~/lib/utils";



export default function ArchiveCard({
  image,
  imageAlt,
  label,
  decoration,
  className,
}: ArchiveCardProps) {
  return (
    <div className={cn("relative w-fit", className)}>
      
      <Image
        src="/design-system/archive/archive-base.svg"
        alt=""
        aria-hidden
        width={500}
        height={500}
        className="w-full h-auto"
      />

      
      <div className="absolute inset-[4.5%_4.5%_6.5%_6%] overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
        />
      </div>

      
      <div>
        {label}
      </div>

      
      {decoration && (
        <div
          className={cn(
            "z-30"
          )}
        >
          {decoration}
        </div>
      )}
    </div>
  );
}