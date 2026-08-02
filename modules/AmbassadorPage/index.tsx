"use client";

import { Button } from "@/components/ui/button";
import { User2 } from "lucide-react";
import { Search } from "lucide-react";
import { Book } from "lucide-react";

import Countdown from "~/components/elements/Countdown"

export default function LandingPage() {
  return (
    <main>
      <div className="mt-20 flex flex-col items-center justify-center gap-10">
        <section className="flex flex-col items-center justify-center gap-2 font-semibold text-white max-w-4xl text-center">
          {/* <h1 className="font-size-60 line-height-60"></h1> */}
          <div className="grid gap-5">
            <h1 className="font-league-spartan font-bold text-h1 text-primary-10">Open Recruitment Ambassador</h1>
            <h1 className="font-league-spartan font-bold text-h1 text-primary-10">Open House Fasilkom UI 2026</h1>
            <h5 className="text-s5 font-aileron font-bold">Ambassador Open House Fasilkom UI adalah ikon OH Fasilkom UI yang bertugas untuk mempromosikan acara OH Fasilkom UI dan Fakultas Ilmu Komputer Universitas Indonesia kepada masyarakat.</h5>
          </div>
          <Countdown targetDate={new Date('25 June 2027 23:59:59')}/>
          <p className="text-b6 font-normal">Pendaftaran dibuka pada 22 Agustus 2026</p>
          <div className="grid gap-5 grid-rows-2 grid-cols-2">
          <Button
            variant="tertiary"
            className="col-span-2"
          >
            <User2 className="w-6 h-6 text-white"/>
            <p className="text-s7 font-aileron font-bold">Button</p>
          </Button>
          <Button
            variant="ghost"
            className="border-[#0debd9]"
          >
            <Search className="w-6 h-6 text-[#0debd9]"/>
            <p className="text-s7 font-aileron font-bold text-[#0debd9]">Button</p>
          </Button>
          <Button
            variant="ghost"
            className="border-[#0debd9]"
          >
            <Book className="w-6 h-6 text-[#0debd9]" />
            <p className="text-s7 font-aileron font-bold text-[#0debd9]">Button</p>
          </Button>
        </div>
        </section>
        
      </div>
    </main>
  );
}
