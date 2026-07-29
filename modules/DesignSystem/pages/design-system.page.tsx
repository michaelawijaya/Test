"use client";

import { DesignSystemLayout } from "../components/shared/design-system-layout";
import Image from "~/lib/image";

// Guidelines
import { TypographyDemo } from "../components/demos/typography-demo";
import { ColorDemo } from "../components/demos/color-demo";
// import { GridDemo } from "../components/demos/grid-demo";
// import { IconDemo } from "../components/demos/icon-demo";
// import { AssetsDemo } from "../components/demos/assets-demo";
import { LogoDemo } from "../components/demos/logo-demo";

// Atoms
import { ButtonDemo } from "../components/demos/button-demo";
import { AlertDemo } from "../components/demos/alert-demo";
import { ChipsDemo } from "../components/demos/chips-demo";
import { ToastDemo } from "../components/demos/toast-demo";
import { TooltipDemo } from "../components/demos/tooltip-demo";
import { CheckboxDemo } from "../components/demos/checkbox-demo";
import { RadioDemo } from "../components/demos/radio-demo";

// Molecules
import { InputDemo } from "../components/demos/input-demo";
import { AccordionDemo } from "../components/demos/accordion-demo";
import { DropdownDemo } from "../components/demos/dropdown-demo";
import { CardsDemo } from "../components/demos/cards-demo";
import { ModalsDemo } from "../components/demos/modals-demo";
import { TabsDemo } from "../components/demos/tabs-demo";
import { FileInputDemo } from "../components/demos/file-input-demo";

// Organisms
// import { NavbarSidebarDemo } from "../components/demos/navbar-sidebar-demo";
import { ContactPersonDemo } from "../components/demos/contact-person-demo";
import { DatePickerDemo } from "../components/demos/date-picker-demo";
import { TestimonialsDemo } from "../components/demos/testimonials-demo";
// import { FooterDemo } from "../components/demos/footer-demo";
import { CountdownDemo } from "../components/demos/countdown-demo";

export function DesignSystemPage() {
  return (
    <DesignSystemLayout>
      <div className="space-y-20 pb-24">
        <div className="border-primary-50 relative flex justify-center gap-10 border-b-2 px-5 py-8 backdrop-blur sm:px-8 lg:px-10">
          <Image
            alt=""
            aria-hidden="true"
            className="hidden w-30 lg:block"
            src="/design-system/logo-no-bg.svg"
          />
          <div className="relative grid justify-center gap-8 text-center lg:items-end">
            <div>
              <p className="text-tertiary-40 mb-3 text-sm font-bold uppercase">
                Open House Fasilkom UI 2026
              </p>
              <h1 className="text-h3 text-primary-10 sm:text-h2 lg:text-h1 font-aileron max-w-3xl font-bold">
                Design System
              </h1>
              <p className="text-b6 text-primary-20 font-league-spartan mt-5 max-w-2xl">
                Official Design System of OH26 Fasilkom UI
              </p>
            </div>
          </div>
          <Image
            alt=""
            aria-hidden="true"
            className="hidden w-30 lg:block"
            src="/design-system/logo-no-bg.svg"
          />
        </div>

        {/* Guidelines */}
        <div className="space-y-12">
          <div className="border-tertiary-70 justify-center border-2 px-5 py-4 text-center backdrop-blur">
            <p className="text-tertiary-40 text-sm font-bold uppercase">
              Foundation
            </p>
            <h2 className="text-h2 text-primary-10 font-bold uppercase">
              Guidelines
            </h2>
          </div>
          <TypographyDemo />
          <ColorDemo />
          {/* <GridDemo /> */}
          {/* <IconDemo /> */}
          {/* <AssetsDemo /> */}
          <LogoDemo />
        </div>

        {/* Atoms */}
        <div className="space-y-12">
          <div className="border-tertiary-70 justify-center border-2 px-5 py-4 text-center backdrop-blur">
            <p className="text-tertiary-40 text-sm font-bold uppercase">
              Core controls
            </p>
            <h2 className="text-h2 text-primary-10 font-bold uppercase">
              Atoms
            </h2>
          </div>
          <ButtonDemo />
          <AlertDemo />
          <ChipsDemo />
          <ToastDemo />
          <TooltipDemo />
          <CheckboxDemo />
          <RadioDemo />
        </div>

        {/* Molecules */}
        <div className="space-y-12">
          <div className="border-tertiary-70 justify-center border-2 px-5 py-4 text-center backdrop-blur">
            <p className="text-tertiary-40 text-sm font-bold uppercase">
              Composed patterns
            </p>
            <h2 className="text-h2 text-primary-10 font-bold uppercase">
              Molecules
            </h2>
          </div>
          <InputDemo />
          <AccordionDemo />
          <DropdownDemo />
          <CardsDemo />
          <ModalsDemo />
          <TabsDemo />
          <FileInputDemo />
        </div>

        {/* Organisms */}
        <div className="space-y-12">
          <div className="border-tertiary-70 justify-center border-2 px-5 py-4 text-center backdrop-blur">
            <p className="text-tertiary-40 text-sm font-bold uppercase">
              Application Sections
            </p>
            <h2 className="text-h2 text-primary-10 font-bold uppercase">
              organisms
            </h2>
          </div>
          {/* <NavbarSidebarDemo /> */}
          <ContactPersonDemo />
          <DatePickerDemo />
          <TestimonialsDemo />
          {/* <FooterDemo /> */}
          <CountdownDemo />
        </div>
      </div>
    </DesignSystemLayout>
  );
}
