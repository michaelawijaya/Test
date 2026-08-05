import type { ArchiveLabelProps } from "./interface";
import { cn } from "~/lib/utils";


export default function ArchiveLabel({ children, className }: ArchiveLabelProps) {
  return (
    <div className={cn("absolute rounded-md bg-[#A6A0E5] z-50 px-4 py-2 font-bold shadow-lg", className)}>
      {children}
    </div>
  );
}