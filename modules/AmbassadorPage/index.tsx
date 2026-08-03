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
      </div>
    </main>
  );
}
