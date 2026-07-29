import { MessageCircle } from "lucide-react";
import Image from "~/lib/image";

type ContactPersonProps = {
  firstContactUrl: string;
  secondContactUrl?: string;
};

export default function ContactPerson({
  firstContactUrl,
  secondContactUrl,
}: ContactPersonProps) {
  return (
    <main className="from-primary-30 to-primary-20 relative h-73 w-full max-w-300 overflow-hidden rounded-2xl bg-linear-to-b max-lg:h-70 max-lg:max-w-180 max-sm:h-[477px] max-sm:w-80 max-sm:rounded-[32px]">
      <Image
        alt=""
        className="absolute bottom-0 left-0 w-full rounded-2xl max-sm:hidden"
        src="/design-system/contact-person-pattern.svg"
      />
      <Image
        alt=""
        className="absolute inset-0 hidden h-full w-full max-sm:block"
        imageClassName="object-cover"
        src="/design-system/contact-person-pattern-mobile.svg"
      />
      <Image
        alt=""
        className="absolute top-0 right-10 w-60 max-lg:top-auto max-lg:right-8 max-lg:bottom-3 max-lg:w-58 max-sm:right-auto max-sm:bottom-10 max-sm:left-1/2 max-sm:w-45 max-sm:-translate-x-1/2"
        src="/design-system/panda-peri.svg"
      />
      <div className="font-aileron text-primary-90 absolute top-20 left-1/2 flex w-full -translate-x-1/2 flex-col items-center px-6 text-center max-lg:top-14 max-lg:max-w-lg max-sm:top-15">
        <div className="flex flex-col justify-center max-sm:items-center">
          <h2 className="text-s5 max-lg:text-s6 max-sm:text-s7 font-bold">
            {" "}
            Butuh Bantuan atau Punya Pertanyaan?{" "}
          </h2>
          <p className="text-b6 max-sm:text-b8 text-left max-sm:justify-center max-sm:text-center">
            Hubungi kami pada kontak berikut{" "}
          </p>
          <div className="mt-5 flex justify-start gap-3 max-lg:flex-col max-lg:items-center max-lg:gap-3">
            <a
              className="bg-primary-70 text-s8 flex w-fit items-center gap-2 rounded-md px-3 py-2 font-bold text-white max-lg:w-41 max-lg:justify-center max-lg:py-3"
              href={firstContactUrl}
              rel="noopener"
              target="_blank"
            >
              <MessageCircle className="size-5" />
              Contact Person
            </a>
            {secondContactUrl && (
              <a
                className="bg-primary-70 text-s8 flex w-fit items-center gap-2 rounded-md px-3 py-2 font-bold text-white max-lg:w-41 max-lg:justify-center max-lg:py-3"
                href={secondContactUrl}
                rel="noopener"
                target="_blank"
              >
                <MessageCircle className="size-5" />
                Contact Person
              </a>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
