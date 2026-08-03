"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { User2 } from "lucide-react";
import { Search } from "lucide-react";
import { Book } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/components/ui/accordion";
import Countdown from "~/components/elements/Countdown"


export default function LandingPage() {
  return (
    <main className="bg-page-gradient">
      <div className="mt-20 flex flex-col items-center justify-center gap-30 md:gap-50">
        <section className="flex flex-col items-center justify-center font-semibold text-white text-center">
          <div className="relative w-screen left-1/2 -translate-x-1/2 min-h-fit lg:min-h-screen ">
            <Image
              src="/design-system/pilar-kiri.svg"
              alt="pilar-kiri"
              width={533}
              height={1113}
              className="absolute left-0 bottom-50 lg:bottom-20 z-0 h-104 w-auto lg:h-144 xl:h-full"
            />

            <Image
              src="/design-system/pilar-kanan.svg"
              alt="pilar-kanan"
              width={533}
              height={1113}
              className=" absolute right-0 bottom-50 lg:bottom-20 z-0 h-104 w-auto lg:h-144 xl:h-full
              "
            />

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid gap-5 mt-16 sm:mt-24 lg:mt-40">
                <h1 className="font-league-spartan font-bold text-h4 md:text-h1 text-primary-10">
                  Open Recruitment Ambassador
                </h1>
                <h1 className="font-league-spartan font-bold text-h5 md:text-h1 text-primary-10">
                  Open House Fasilkom UI 2026
                </h1>
                <h5 className="hidden md:block text-s5 font-aileron font-bold">
                  Ambassador Open House Fasilkom UI adalah ikon OH Fasilkom UI yang bertugas untuk
                  mempromosikan acara OH Fasilkom UI dan Fakultas Ilmu Komputer Universitas Indonesia
                  kepada masyarakat.
                </h5>
              </div>

              <Countdown targetDate={new Date('25 June 2027 23:59:59')} />

              <div className="grid gap-5 mt-8">
                <p className="text-b9 md:text-b6 font-normal">Pendaftaran dibuka pada 22 Agustus 2026</p>
                <div className="grid gap-5 grid-rows-2 grid-cols-2 max-w-xl mx-auto">
                  <Button variant="tertiary" className="col-span-2">
                    <User2 className="w-6 h-6 text-white" />
                    <p className="text-s7 font-aileron font-bold">Button</p>
                  </Button>
                  <Button variant="ghost" className="border-[#0debd9]">
                    <Search className="w-6 h-6 text-[#0debd9]" />
                    <p className="text-s7 font-aileron font-bold text-[#0debd9]">Button</p>
                  </Button>
                  <Button variant="ghost" className="border-[#0debd9]">
                    <Book className="w-6 h-6 text-[#0debd9]" />
                    <p className="text-s7 font-aileron font-bold text-[#0debd9]">Button</p>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center gap-2 font-semibold text-white max-w-4xl text-center px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5">
            <div className="grid gap-1">
              <h1 className="font-league-spartan font-bold text-h5 md:text-h1 text-primary-10">Apa itu Ambassador</h1>
              <h1 className="font-league-spartan font-bold text-h5 md:text-h1 text-primary-10">Open House Fasilkom UI?</h1>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
              <Image
                src="/design-system/projector-final-mobile.svg"
                alt="Open House Fasilkom UI 2026"
                width={755}
                height={600}
                priority
                className="block md:hidden w-full max-w-70 sm:max-w-95 md:max-w-125 lg:max-w-190 h-auto"
              />
              <Image
                src="/design-system/projector-final.svg"
                alt="Open House Fasilkom UI 2026"
                width={755}
                height={600}
                priority
                className="hidden md:block w-full max-w-70 sm:max-w-95 md:max-w-125 lg:max-w-190 h-auto"
              />
              <Image
                src="/design-system/panda-mc-3.svg"
                alt="Open House Fasilkom UI 2026"
                width={257}
                height={333}
                priority
                className="hidden md:block md:w-auto h-auto shrink-0"
              />
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center gap-8 md:gap-50 font-semibold text-white max-w-4xl text-center">
          <h1 className="font-league-spartan font-bold text-h5 md:text-h1 text-primary-10">
            Ambassador 2025&apos;s Archive
          </h1>
          
          <div className="relative lg:hidden w-full max-w-90 h-160 mx-auto">

            <Image
              src="/design-system/welcoming-ambassador-mobile.svg"
              alt="Welcoming ambassador"
              width={250}
              height={370}
              className="absolute top-2 left-2 z-10"
            />

            <Image
              src="/design-system/webinar-with-alumni-mobile.svg"
              alt="Webinar with alumni"
              width={230}
              height={340}
              className="absolute top-22 right-2 z-50"
            />

            <Image
              src="/design-system/farewell-party-mobile.svg"
              alt="Farewell party"
              width={200}
              height={300}
              className="absolute top-45 left-0 z-40"
            />

            <Image
              src="/design-system/mentoring-1on1-mobile.svg"
              alt="Mentoring"
              width={220}
              height={330}
              className="absolute top-63 left-30 z-20"
            />

            <Image
              src="/design-system/ristek-class-mobile.svg"
              alt="Ristek"
              width={200}
              height={300}
              className="absolute top-95 left-16 z-50"
            />

          </div>

          
          <div className="hidden lg:block relative w-full max-w-3xl h-105 mx-auto scale-150">
            <Image src="/design-system/welcoming-ambassador.svg" alt="Welcoming ambassador" width={294.46303063995236} height={438.69154010670513} className="absolute top-20 left-0 z-40" />
            <Image src="/design-system/farewell-party.svg" alt="Farewell party" width={294.46303063995236} height={438.69154010670513} className="absolute bottom-22/100 left-35/100 z-30" />
            <Image src="/design-system/webinar-with-alumni.svg" alt="Webinar with alumni" width={294.46303063995236} height={438.69154010670513} className="absolute top-10 left-70/100 z-20" />
            <Image src="/design-system/ristek-class.svg" alt="Ristek class" width={294.46303063995236} height={438.69154010670513} className="absolute top-58/100 left-30 z-50" />
            <Image src="/design-system/mentoring-1on1.svg" alt="Mentoring 1-on-1" width={294.46303063995236} height={438.69154010670513} className="absolute top-60/100 right-8 z-10" />
          </div>
        </section>                
      </div>
    </main>
  );
}
