import type { ProjectorProps } from "./interface";
import Image from "next/image";

export default function Projector({
  description,
  stats,
  className = "",
}: ProjectorProps) {
  return (
    <div className={`flex w-full flex-col items-center ${className}`}>
      
      <Image
        src="/design-system/projector-hanger.svg"
        alt=""
        aria-hidden="true"
        width={20}
        height={100}
        className="-mb-1.5 h-auto z-10 w-[clamp(6px,2%,14px)]"
      />

      
      <div className="flex w-full flex-col gap-[4%] z-20 text-b8 md:text-b6 rounded-2xl border-primary-90 bg-[#F2EBFF]/80 px-[6%] py-[5%] border-6">
        <p className="text-center leading-snug text-primary-90">
          {description}
        </p>

        <div className="flex justify-between gap-[4%] mt-5">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex w-1/2 flex-col gap-[2%] rounded-lg bg-linear-to-br from-[#6B4FC7] to-[#2D1B5E] px-[6%] py-[5%] shadow-lg"
            >
              <h2 className="font-league-spartan text-left text-h6 md:text-h2 bg-linear-to-br from-[#43F5E7] to-[#D6F5F2] bg-clip-text font-bold leading-none text-transparent text-[clamp(1.1rem,3.1vw,2.1rem)]">
                {stat.value}
              </h2>
              <span className="font-aileron text-left font-normal text-b9 md:text-b7 leading-snug text-white text-[clamp(0.6rem,1.25vw,0.85rem)]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      
      <Image
        src="/design-system/projector-legs.svg"
        alt=""
        width={20}
        height={20}
        aria-hidden="true"
        className="-mt-3 h-auto z-10 w-[clamp(60px,21%,220px)]"
      />
    </div>
  );
}
