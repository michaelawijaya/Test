"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { User2 } from "lucide-react";
import { Search } from "lucide-react";
import { Book } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/components/ui/accordion";
import Countdown from "~/components/elements/Countdown"
import Projector from "@/components/elements/Projector"
import ArchiveCard from "@/components/elements/Archive/ArchiveCard"
import ArchiveLabel from "@/components/elements/Archive/ArchiveLabel"


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
        <section className="relative flex flex-col items-center justify-center gap-2 font-semibold text-white max-w-6xl text-center px-4 sm:px-6 lg:px-8">
          <Image
            src="/design-system/efek-sparkle-kiri.png"
            alt=""
            width={400}
            height={0}
            className="hidden absolute md:block z-0 h-auto bottom-20 md:scale-230 md:-left-115"
          />
          
          <div className="grid gap-5 z-10">
            <div className="grid gap-1">
              <h1 className="font-league-spartan font-bold text-h5 md:text-h1 text-primary-10">Apa itu Ambassador</h1>
              <h1 className="font-league-spartan font-bold text-h5 md:text-h1 text-primary-10">Open House Fasilkom UI?</h1>
            </div>
            <div className="flex flex-col w-full md:flex-row items-center justify-center md:gap-25">
              <Projector 
                description={
                  <>
                    <strong>Program Ambassador</strong> Open House Fasilkom UI 2026 mengajak anak-anak SMA/K sederajat dan influencer untuk meningkatkan <strong>brand awareness Fasilkom UI.</strong> Ambassador bertugas membuat konten digital untuk menyebarkan informasi mengenai Open House Fasilkom UI dan Fasilkom UI.
                  </>
                }
                stats={[
                        { value: "200+", label: "Pendaftar dari seluruh Indonesia" },
                        { value: "250+", label: "Pengguna Referral Code" },
                      ]}
                className=""
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
        <section className="relative flex flex-col items-center justify-center gap-8 md:gap-50 font-semibold text-white max-w-4xl text-center">

          <h1 className="font-league-spartan font-bold text-h5 md:text-h1 text-primary-10">
            Ambassador 2025&apos;s Archive
          </h1>
          <div className="relative w-full max-w-90 h-160 mx-auto">
            <div className="lg:hidden">
              <ArchiveCard
                image="/design-system/archive/archive-image-welcoming-ambassador.svg"
                imageAlt="Mentoring 1 on 1"
                className="absolute z-20 scale-55 rotate-3 -left-28 -top-10"
                label={
                  <ArchiveLabel 
                    className="text-s7 text-primary-90 font-bold top-5 -left-3">
                      Welcoming Ambassador
                  </ArchiveLabel>}
                decoration={
                  <Image
                    src="/design-system/archive/archive-paper-clip.svg"
                    alt=""
                    width={27}
                    height={0}
                    className="absolute bottom-51 left-88 rotate-"
                  />
                }
              />
              <ArchiveCard
                image="/design-system/archive/archive-image-webinar-with-alumni.svg"
                imageAlt="Mentoring 1 on 1"
                className="absolute z-30 scale-55 -rotate-8 top-15 -right-20"
                label={
                  <ArchiveLabel 
                    className="text-s7 text-primary-90 font-bold top-2 -left-3">
                      Webinar with Alumni
                  </ArchiveLabel>}
                decoration={
                  <Image
                    src="/design-system/archive/archive-pin.svg"
                    alt=""
                    width={70}
                    height={20}
                    className="absolute bottom-59 left-70"
                  />
                }
              />
              <ArchiveCard
                image="/design-system/archive/archive-image-farewell-party.svg"
                imageAlt="Mentoring 1 on 1"
                className="absolute z-20 scale-55 -rotate-96 -left-36 top-45"
                label={
                  <ArchiveLabel 
                    className="text-s7 text-primary-90 font-bold top-3 left-75 rotate-90">
                      Farewell Party
                  </ArchiveLabel>}
                decoration={
                  <Image
                    src="/design-system/archive/archive-binder-clip.svg"
                    alt=""
                    width={130}
                    height={20}
                    className="absolute bottom-25 -right-18 rotate-95"
                  />
                }
              />            
              <ArchiveCard
                image="/design-system/archive/archive-image-mentoring1on1.svg"
                imageAlt="Mentoring 1 on 1"
                className="absolute z-10 scale-55 rotate-8 top-55 -right-25"
                label={
                  <ArchiveLabel 
                    className="text-s7 text-primary-90 font-bold top-1 -right-2">
                      Mentoring 1-ON-1
                  </ArchiveLabel>}
                decoration={
                  <Image
                    src="/design-system/archive/archive-paper-clip.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="absolute bottom-0 left-92 rotate-95"
                  />
                }
              />                
              <ArchiveCard
                image="/design-system/archive/archive-image-ristek-class.svg"
                imageAlt="Mentoring 1 on 1"
                className="absolute z-30 scale-70 rotate-2 top-93 -left-5"
                label={
                  <ArchiveLabel 
                    className="text-s7 text-primary-90 font-bold top-2 -left-2">
                      RISTEK Class
                  </ArchiveLabel>}
                decoration={
                  <Image
                    src="/design-system/archive/archive-pin.svg"
                    alt=""
                    width={50}
                    height={20}
                    className="absolute bottom-48 left-65 rotate-0"
                  />
                }
              />

            </div>

            <div className="hidden lg:block">
              <ArchiveCard
                image="/design-system/archive/archive-image-welcoming-ambassador.svg"
                imageAlt="Mentoring 1 on 1"
                className="absolute z-40 -left-95 rotate-4"
                label={
                  <ArchiveLabel 
                    className="text-s7 text-primary-90 font-bold top-5 -left-3">
                      Welcoming Ambassador
                  </ArchiveLabel>}
                decoration={
                  <Image
                    src="/design-system/archive/archive-paper-clip.svg"
                    alt=""
                    width={27}
                    height={0}
                    className="absolute bottom-51 left-88 rotate-"
                  />
                }
              />
              <ArchiveCard
                image="/design-system/archive/archive-image-farewell-party.svg"
                imageAlt="Mentoring 1 on 1"
                className="absolute z-30 -top-12 -left-15 -rotate-100"
                label={
                  <ArchiveLabel 
                    className="text-s7 text-primary-90 font-bold top-45 -right-8 rotate-90">
                      Farewell Party
                  </ArchiveLabel>}
                decoration={
                  <Image
                    src="/design-system/archive/archive-binder-clip.svg"
                    alt=""
                    width={130}
                    height={20}
                    className="absolute bottom-20 -right-18 rotate-95"
                  />
                }
              />
              <ArchiveCard
                image="/design-system/archive/archive-image-webinar-with-alumni.svg"
                imageAlt="Mentoring 1 on 1"
                className="absolute z-20 -top-10 -right-80 rotate-7"
                label={
                  <ArchiveLabel 
                    className="text-s7 text-primary-90 font-bold top-54 -right-3">
                      Webinar with Alumni
                  </ArchiveLabel>}
                decoration={
                  <Image
                    src="/design-system/archive/archive-pin.svg"
                    alt=""
                    width={70}
                    height={20}
                    className="absolute bottom-61 left-40 -rotate-90"
                  />
                }
              />
              <ArchiveCard
                image="/design-system/archive/archive-image-ristek-class.svg"
                imageAlt="Mentoring 1 on 1"
                className="absolute z-50 bottom-27 -left-60 rotate-4"
                label={
                  <ArchiveLabel 
                    className="text-s7 text-primary-90 font-bold top-2 -left-2">
                      Ristek Class
                  </ArchiveLabel>}
                decoration={
                  <Image
                    src="/design-system/archive/archive-pin.svg"
                    alt=""
                    width={70}
                    height={20}
                    className="absolute bottom-60 left-80 rotate-0"
                  />
                }
              />
              <ArchiveCard
                image="/design-system/archive/archive-image-mentoring1on1.svg"
                imageAlt="Mentoring 1 on 1"
                className="absolute z-10 top-60 -right-40 -rotate-10"
                label={
                  <ArchiveLabel 
                    className="text-s7 text-primary-90 font-bold top-53 left-55">
                      Mentoring 1-ON-1
                  </ArchiveLabel>}
                decoration={
                  <Image
                    src="/design-system/archive/archive-paper-clip.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="absolute bottom-50 left-92 rotate-95"
                  />
                }
              />
            </div>
            
          </div>
          
        </section>
        <section className="relative flex flex-col items-center justify-center gap-8 md:gap-15 font-semibold text-white text-center -mt-25 md:mt-24 lg:mt-0 w-full px-4">
          <Image
            src="/design-system/kristal-kiri.svg"
            alt=""
            width={80}
            height={0}
            className="absolute z-0 h-auto bottom-190 -left-4 md:scale-230 md:left-10 "
          />
          <Image
            src="/design-system/kristal-kanan.svg"
            alt=""
            width={60}
            height={0}
            className="absolute z-0 h-auto bottom-190 right-0 md:scale-230 md:right-10"
          />
          <div className="grid gap-1">
            <h1 className="font-league-spartan font-bold text-h4 md:text-h1 text-primary-10">Need More Help?</h1>
            <h4 className="font-aileron text-b7 md:text-s4 font-bold">&ldquo;Temukan berbagai pertanyaan serta jawaban seputar ambassador di sini!&ldquo;</h4>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-15 max-w-7xl w-full">
            <Accordion type="single" collapsible className="flex-1 min-w-0 md:max-w-6xl">
              <AccordionItem value="item-1">
                <AccordionTrigger>Apa aja benefit daftar Ambassador?</AccordionTrigger>
                <AccordionContent className="wrap-break-word">Sebagai Ambassador, kamu akan terlibat langsung dalam promosi OH Fasilkom, berkesempatan membangun relasi dengan teman-teman dari seluruh Indonesia, mendapatkan akses ke program eksklusif seperti webinar dan mentoring, serta memperluas wawasan seputar teknologi, bisnis digital, dan masa depan industri IT.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Bagaimana jika aku memiliki kesibukan lain dan ingin mendaftar?</AccordionTrigger>
                <AccordionContent>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo blanditiis adipisci optio cumque dicta nemo facilis, totam, consequatur eum quibusdam, placeat officiis nostrum. Consectetur velit molestias blanditiis inventore, eligendi deleniti.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Berapa lama program Ambassador ini berjalan?</AccordionTrigger>
                <AccordionContent>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem voluptatibus ipsum ut quibusdam laboriosam minus, distinctio repudiandae delectus earum consectetur. Nesciunt perferendis, rerum quae dolorem tempora sed facere? Blanditiis, provident!</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Harus bisa ngedit video gak kak??</AccordionTrigger>
                <AccordionContent>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae tenetur quaerat, omnis architecto accusantium ex accusamus. Consectetur sed, distinctio, dolore unde necessitatibus itaque maiores odio aliquam tempora animi ipsum hic!</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Aku dari luar Jabodetabek, bisa ikut juga gak?</AccordionTrigger>
                <AccordionContent>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi blanditiis minus doloribus porro, quasi incidunt laudantium natus ad molestias? Ea omnis laudantium exercitationem quos perspiciatis totam blanditiis vero, suscipit magni.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>Apakah program ini berbayar?</AccordionTrigger>
                <AccordionContent>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia facilis corporis repudiandae amet est, totam incidunt doloremque voluptatem natus minima itaque voluptate eos molestiae eveniet ex obcaecati eligendi. Atque, natus!</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger>Harus terkenal ya kak?</AccordionTrigger>
                <AccordionContent>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat at ex vel! Placeat iste laudantium, rerum quod recusandae mollitia vitae impedit quisquam minus non delectus distinctio aperiam vel quaerat doloremque.</AccordionContent>
              </AccordionItem>
            </Accordion>
            <Image
              src="/design-system/panda-bertanya-tanya.svg"
              alt="Open House Fasilkom UI 2026"
              width={337}
              height={381}
              priority
              className="hidden md:block md:w-auto h-auto shrink-0"
            />
          </div>
        </section>
        <section className="flex flex-col items-center justify-center gap-12 md:gap-15 font-semibold text-white max-w-7xl text-center mb-7 px-4 sm:px-6 lg:px-8">
          <div className="grid gap-1">
            <h1 className="font-league-spartan font-bold text-h4 md:text-h1 text-primary-80 md:text-primary-10">Butuh bantuan atau punya pertanyaan lain?</h1>
            <h4 className="font-aileron text-s7 md:text-s4 font-bold text-primary-80 md:text-primary-10">Kamu dapat hubungi kontak di bawah ini untuk informasi lebih lanjut ya!</h4>
          </div>
          <Image
            src="/design-system/panda-megang-laptop.svg"
            alt="Open House Fasilkom UI 2026"
            width={681}
            height={884}
            priority
            className="w-full h-auto max-w-xs md:max-w-sm lg:max-w-md"
            sizes="(max-width: 768px) 320px, (max-width: 1024px) 384px, 448px"
          />
          <div className="grid grid-cols-2 grid-rows-1 max-w-xl w-full gap-4">
            <Button variant="primary" className="col-span-1">
              <MessageCircle className="w-6 h-6 text-white"/>
              <p className="text-s7 font-aileron font-bold">Contact Person</p>
            </Button>
            <Button variant="primary" className="col-span-1">
              <MessageCircle className="w-6 h-6 text-white"/>
              <p className="text-s7 font-aileron font-bold">Contact Person</p>
            </Button>
          </div>
        </section>                                
      </div>
    </main>
  );
}
