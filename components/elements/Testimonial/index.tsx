"use client";

import { ChevronLeft, ChevronRight, User } from "lucide-react";
import * as React from "react";
import Image from "~/lib/image";
import { cn } from "~/lib/utils";
import type { TestimonyProps } from "./interface";

type TestimonyPropType = {
  slides?: TestimonyProps[];
  autoplay?: boolean;
  autoplayInterval?: number;
  className?: string;
};

type CarouselButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  direction: "prev" | "next";
};

const defaultSlides: TestimonyProps[] = [
  {
    id: "1",
    name: "Lefi",
    position: "PIC IT Dev",
    testimony:
      "Lorem ipsum dolor sit amet et ornare dignissim bibendum et. Dictum pretium ullamcorper dignissim pellentesque id bibendum sed.",
    profilePic: "/design-system/lefi.jpeg",
  },
  {
    id: "2",
    name: "Jocim",
    position: "VPIC IT Dev",
    testimony:
      "Lorem ipsum dolor sit amet consectetur. Et ornare dignissim bibendum et. Viverra auctor interdum eleifend neque quis faucibus nunc scelerisque.",
    profilePic: "/design-system/lefi.jpeg",
  },
  {
    id: "3",
    name: "Tipen",
    position: "Staff Ahli IT Dev",
    testimony:
      "Dictum pretium ullamcorper dignissim pellentesque id bibendum sed. Viverra auctor interdum eleifend neque quis faucibus nunc scelerisque.",
    profilePic: "/design-system/lefi.jpeg",
  },
  {
    id: "4",
    name: "Acan",
    position: "PIC UI/UX",
    testimony:
      "Sem non euismod risus viverra adipiscing natoque. Dictum pretium ullamcorper dignissim pellentesque id bibendum sed.",
    profilePic: "/design-system/lefi.jpeg",
  },
  {
    id: "5",
    name: "Rahel",
    position: "VPIC UI/UX",
    testimony:
      "Lorem ipsum dolor sit amet et ornare dignissim bibendum et. Viverra auctor interdum eleifend neque quis faucibus nunc scelerisque.",
    profilePic: "/design-system/lefi.jpeg",
  },
];

function normalizeIndex(index: number, totalItems: number) {
  return (index + totalItems) % totalItems;
}

function getRelativePosition(
  index: number,
  currentIndex: number,
  totalItems: number,
) {
  const diff = (index - currentIndex + totalItems) % totalItems;
  return diff > totalItems / 2 ? diff - totalItems : diff;
}

function getDesktopCardStyle(
  index: number,
  currentIndex: number,
  totalItems: number,
): React.CSSProperties {
  const position = getRelativePosition(index, currentIndex, totalItems);
  const offset = "clamp(164px, 24vw, 360px)";

  if (position === 0) {
    return {
      left: "50%",
      opacity: 1,
      transform: "translateX(-50%) scale(1)",
      zIndex: 30,
    };
  }

  if (position === 1) {
    return {
      left: `calc(50% + ${offset})`,
      opacity: 0.6,
      transform: "translateX(-50%) scale(0.82)",
      zIndex: 10,
    };
  }

  if (position === -1) {
    return {
      left: `calc(50% - ${offset})`,
      opacity: 0.6,
      transform: "translateX(-50%) scale(0.82)",
      zIndex: 10,
    };
  }

  // Push hidden items off-screen based on direction to prevent center-flying glitch
  const direction = position > 0 ? 1 : -1;
  return {
    left: `calc(50% + (${offset} * 2 * ${direction}))`,
    opacity: 0,
    pointerEvents: "none",
    transform: "translateX(-50%) scale(0.68)",
    zIndex: 0,
  };
}

function getMobileCardStyle(
  index: number,
  currentIndex: number,
  totalItems: number,
): React.CSSProperties {
  const position = getRelativePosition(index, currentIndex, totalItems);

  if (position === 0) {
    return {
      left: "50%",
      opacity: 1,
      transform: "translateX(-50%)",
      zIndex: 20,
    };
  }

  if (position === 1) {
    return {
      left: "73%",
      opacity: 0.55,
      transform: "translateX(-50%)",
      zIndex: 10,
    };
  }

  if (position === -1) {
    return {
      left: "27%",
      opacity: 0.55,
      transform: "translateX(-50%)",
      zIndex: 10,
    };
  }

  const direction = position > 0 ? 1 : -1;
  return {
    left: `${50 + 96 * direction}%`,
    opacity: 0,
    pointerEvents: "none",
    transform: "translateX(-50%)",
    zIndex: 0,
  };
}

export function usePrevNextButtons({
  onPrev,
  onNext,
}: {
  onPrev: () => void;
  onNext: () => void;
}) {
  const onPrevButtonClick = React.useCallback(() => {
    onPrev();
  }, [onPrev]);

  const onNextButtonClick = React.useCallback(() => {
    onNext();
  }, [onNext]);

  return {
    onPrevButtonClick,
    onNextButtonClick,
  };
}

export function CarouselButton({
  className,
  direction,
  ...props
}: CarouselButtonProps) {
  const Icon = direction === "prev" ? ChevronLeft : ChevronRight;

  return (
    <button
      aria-label={
        direction === "prev" ? "Previous testimonials" : "Next testimonials"
      }
      className={cn(
        "bg-primary-70 flex size-7 items-center justify-center rounded-full text-neutral-100 shadow-[4px_4px_28px_0px_#0000000A] transition-[box-shadow,transform,opacity] duration-200 hover:scale-105 hover:shadow-[0px_4px_8px_0px_#7139DF47] active:scale-95 disabled:pointer-events-none disabled:opacity-70 sm:size-9 md:size-12",
        className,
      )}
      type="button"
      {...props}
    >
      <Icon aria-hidden="true" className="size-3.5 sm:size-4 md:size-6" />
    </button>
  );
}

function AvatarFrame({
  alt,
  featured,
  src,
}: {
  alt: string;
  featured?: boolean;
  src?: string;
}) {
  return (
    <div
      className={cn(
        "relative shrink-0 transition-all duration-500 ease-in-out", // Added transition
        featured
          ? "h-[70px] w-[52px] sm:h-[99px] sm:w-[75px] md:h-[149px] md:w-[113px]"
          : "h-[50px] w-[37px] sm:h-[69px] sm:w-[52px] md:h-[104px] md:w-[78px]",
      )}
    >
      <div className="bg-primary-20 absolute top-[20.7%] right-[12.8%] bottom-[21%] left-[12.5%] flex items-center justify-center overflow-hidden rounded-sm">
        {src ? (
          <Image
            alt={alt}
            className="h-full w-full"
            imageClassName="object-cover"
            src={src}
          />
        ) : (
          <User className="text-primary-70 size-1/2" />
        )}
      </div>

      <Image
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
        imageClassName="object-contain"
        src="/design-system/avatar-border.png"
      />
    </div>
  );
}

function TestimonyCard({
  featured,
  profilePic,
  name,
  position,
  testimony,
}: TestimonyProps & { featured?: boolean }) {
  return (
    <div
      className={cn(
        "flex w-full flex-col items-center transition-all duration-500 ease-in-out", // Changed to transition-all for layout smoothing
        featured ? "mt-0" : "mt-8 sm:mt-10 md:mt-14",
      )}
    >
      <div className="mb-1.5 sm:mb-2 md:mb-3">
        <AvatarFrame
          alt={`${name} profile`}
          featured={featured}
          src={profilePic}
        />
      </div>

      <article
        className={cn(
          "flex h-[104px] w-full flex-col items-center overflow-hidden border-white/10 text-center text-neutral-100 shadow-[4px_4px_28px_0px_#0000000A] transition-all duration-500 ease-in-out sm:h-[144px] md:h-[248px]", // Added transition-all
          featured
            ? "bg-primary-80 gap-1.5 rounded-[20px] border-[0.5px] px-2 py-2 sm:gap-3 sm:rounded-[28px] sm:px-4 sm:py-3 md:max-w-[504px] md:gap-6 md:rounded-[32px] md:px-[42px] md:py-6"
            : "bg-primary-70/80 gap-1 rounded-[14px] border-[0.3px] px-1.5 py-1.5 sm:gap-[8.4px] sm:rounded-[18px] sm:px-2.5 sm:py-2 md:max-w-[352.8px] md:gap-[16.8px] md:rounded-[22.4px] md:px-[29.4px] md:py-[16.8px]",
        )}
      >
        <h3
          className={cn(
            "font-aileron font-bold text-neutral-100 transition-all duration-500 ease-in-out",
            featured
              ? "md:text-s5 text-[10px] sm:text-[14px]"
              : "text-[8px] sm:text-[11px] md:text-[17px]",
          )}
        >
          {name}
        </h3>
        <p
          className={cn(
            "font-ubuntu text-neutral-300 transition-all duration-500 ease-in-out",
            featured
              ? "md:text-b6 text-[8px] sm:text-[11px]"
              : "text-[7px] sm:text-[9px] md:text-[14px]",
          )}
        >
          {position}
        </p>
        <p
          className={cn(
            "font-ubuntu min-h-0 w-full flex-1 overflow-y-auto pr-1 text-neutral-200 transition-all duration-500 ease-in-out",
            featured
              ? "md:text-b7 text-[7px] sm:text-[10px]"
              : "md:text-b9 text-[6px] sm:text-[8px]",
          )}
        >
          {testimony}
        </p>
      </article>
    </div>
  );
}

export function Testimonials({
  slides = defaultSlides,
  autoplay = false,
  autoplayInterval = 20_000,
  className,
}: TestimonyPropType) {
  const [currentIndex, setCurrentIndex] = React.useState(() =>
    slides.length > 1 ? 1 : 0,
  );
  const totalItems = slides.length;
  const activeIndex =
    totalItems > 0 ? normalizeIndex(currentIndex, totalItems) : 0;

  const goTo = React.useCallback(
    (index: number) => {
      if (totalItems <= 0) {
        return;
      }

      setCurrentIndex(normalizeIndex(index, totalItems));
    },
    [totalItems],
  );

  const nextSlide = React.useCallback(() => {
    goTo(activeIndex + 1);
  }, [activeIndex, goTo]);

  const prevSlide = React.useCallback(() => {
    goTo(activeIndex - 1);
  }, [activeIndex, goTo]);

  React.useEffect(() => {
    if (!autoplay || totalItems <= 1) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setCurrentIndex((index) => normalizeIndex(index + 1, totalItems));
    }, autoplayInterval);

    return () => window.clearInterval(intervalId);
  }, [autoplay, autoplayInterval, totalItems]);

  if (totalItems === 0) {
    return null;
  }

  if (totalItems === 1) {
    return (
      <section className={cn("w-full py-10 md:py-20", className)}>
        <div className="mx-auto flex max-w-[504px] justify-center px-8">
          <TestimonyCard {...slides[0]} featured />
        </div>
      </section>
    );
  }

  return (
    <section className={cn("w-full py-10 md:py-20", className)}>
      <div className="mx-auto max-w-[1400px] px-0 sm:px-10 md:px-14">
        <div className="relative">
          <section
            aria-label="Testimonials"
            aria-live="polite"
            className="hidden h-[420px] overflow-visible lg:block"
          >
            <div className="relative h-full">
              {slides.map((slide, index) => {
                const featured = index === activeIndex;

                return (
                  <div
                    className={cn(
                      "absolute top-0 flex h-full items-start justify-center transition-all duration-500 ease-in-out will-change-[left,transform,opacity]",
                      featured ? "w-[504px]" : "w-[352.8px]",
                    )}
                    key={slide.id ?? `${slide.name}-${slide.position}`}
                    style={getDesktopCardStyle(index, activeIndex, totalItems)}
                  >
                    <TestimonyCard {...slide} featured={featured} />
                  </div>
                );
              })}
            </div>
          </section>

          <section
            aria-label="Testimonials"
            aria-live="polite"
            className="relative h-[214px] overflow-hidden sm:h-[300px] lg:hidden"
          >
            {slides.map((slide, index) => {
              const featured = index === activeIndex;

              return (
                <div
                  className={cn(
                    "absolute top-0 flex h-full items-start justify-center px-1.5 transition-all duration-500 ease-in-out will-change-[left,transform,opacity,filter] sm:px-2",
                    "w-[54%] sm:w-[48%]",
                    !featured && "blur-[0.4px]",
                  )}
                  key={slide.id ?? `${slide.name}-${slide.position}-mobile`}
                  style={getMobileCardStyle(index, activeIndex, totalItems)}
                >
                  <TestimonyCard {...slide} featured={featured} />
                </div>
              );
            })}
          </section>

          <div className="pointer-events-none absolute top-1/2 right-0 left-0 z-40 flex -translate-y-1/2 justify-between">
            <CarouselButton
              className="pointer-events-auto -ml-3 md:ml-0 lg:ml-4 xl:ml-10"
              direction="prev"
              onClick={prevSlide}
            />
            <CarouselButton
              className="pointer-events-auto -mr-3 md:mr-0 lg:mr-4 xl:mr-10"
              direction="next"
              onClick={nextSlide}
            />
          </div>

          <div className="mx-auto mt-4 grid w-fit auto-cols-max grid-flow-col place-items-center gap-1.5 sm:mt-6 sm:gap-2 lg:mt-8">
            {slides.map((slide, index) => (
              <button
                aria-label={`Show testimonial ${index + 1}`}
                className={cn(
                  "h-1.5 rounded-full transition-[width,background-color,transform] duration-300 hover:scale-110 sm:h-2",
                  index === activeIndex
                    ? "bg-primary-70 w-5 sm:w-6"
                    : "bg-primary-20 w-1.5 sm:w-2",
                )}
                key={`${slide.id ?? slide.name}-${slide.position}-indicator`}
                onClick={() => goTo(index)}
                type="button"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
