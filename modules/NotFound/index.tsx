import Link from "next/link";
import { Button } from "~/components/ui/button";
import Image from "~/lib/image";

export default function NotFoundPage() {
  return (
    <section className="to-primary-20 relative h-screen overflow-hidden bg-linear-to-b from-[#946AE7]">
      <Image
        alt=""
        className="absolute -bottom-50 block w-full max-sm:hidden"
        src="/design-system/not-found-footer.svg"
      />
      <Image
        alt=""
        className="absolute bottom-0 hidden w-full max-sm:block"
        src="/design-system/not-found-footer-mobile.svg"
      />

      <Image
        alt=""
        className="absolute top-1/2 left-1/2 -translate-x-1/2 max-sm:top-[58%] max-sm:w-30"
        src="/design-system/panda-sedih.svg"
      />
      <div className="font-league-spartan text-primary-90 absolute top-1/4 left-1/2 w-full -translate-x-1/2 text-center font-bold">
        <h1 className="text-h1">404</h1>
        <h3 className="text-h4">Page Not Found</h3>
        <Link href="/home">
          <Button className="mt-4 w-fit" variant="primary">
            Back to Home
          </Button>
        </Link>
      </div>
    </section>
  );
}
