"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { InfoIcon } from "lucide-react";

import { cn } from "~/lib/utils";

type TooltipDirection = "top" | "bottom" | "left" | "right";

interface TooltipProps {
  title: string;
  description?: string;
  direction?: TooltipDirection;
  children: React.ReactNode;
  className?: string;
}

const ARROW_STYLES: Record<TooltipDirection, string> = {
  top: "bottom-[-5px] left-1/2 -translate-x-1/2 border-l-[5px] border-r-[5px] border-t-[5px] border-l-transparent border-r-transparent border-t-[#D6F5F2]",
  bottom:
    "top-[-5px] left-1/2 -translate-x-1/2 border-l-[5px] border-r-[5px] border-b-[5px] border-l-transparent border-r-transparent border-b-[#D6F5F2]",
  left: "right-[-5px] top-1/2 -translate-y-1/2 border-t-[5px] border-b-[5px] border-l-[5px] border-t-transparent border-b-transparent border-l-[#D6F5F2]",
  right:
    "left-[-5px] top-1/2 -translate-y-1/2 border-t-[5px] border-b-[5px] border-r-[5px] border-t-transparent border-b-transparent border-r-[#D6F5F2]",
};

const POSITION_STYLES: Record<TooltipDirection, string> = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-[5px]",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
  left: "right-full top-1/2 -translate-y-1/2 mr-2",
  right: "left-full top-1/2 -translate-y-1/2 ml-2",
};

export function Tooltip({
  title,
  description,
  direction = "top",
  children,
  className,
}: TooltipProps) {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const showTimeout = useRef<ReturnType<typeof setTimeout>>(undefined);
  const hideTimeout = useRef<ReturnType<typeof setTimeout>>(undefined);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const show = useCallback(() => {
    clearTimeout(hideTimeout.current);
    showTimeout.current = setTimeout(() => setVisible(true), 100);
  }, []);

  const hide = useCallback(() => {
    clearTimeout(showTimeout.current);
    hideTimeout.current = setTimeout(() => setVisible(false), 100);
  }, []);

  const toggle = useCallback(() => {
    setVisible((v) => !v);
  }, []);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLElement>) => {
      if (!(isMobile && (event.key === "Enter" || event.key === " "))) {
        return;
      }
      event.preventDefault();
      toggle();
    },
    [isMobile, toggle],
  );

  // Close on outside click (mobile)
  useEffect(() => {
    if (!(visible && isMobile)) {
      return;
    }
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [visible, isMobile]);

  return (
    <div className={cn("relative inline-block", className)} ref={containerRef}>
      <span
        className="inline-flex"
        onBlur={() => {
          if (!isMobile) {
            hide();
          }
        }}
        onClick={() => {
          if (isMobile) {
            toggle();
          }
        }}
        onFocus={() => {
          if (!isMobile) {
            show();
          }
        }}
        onKeyDown={handleKeyDown}
        onMouseEnter={() => {
          if (!isMobile) {
            show();
          }
        }}
        onMouseLeave={() => {
          if (!isMobile) {
            hide();
          }
        }}
        role="button"
        tabIndex={0}
      >
        {children}
      </span>
      {visible && (
        <div
          className={cn(
            "absolute z-[9999] rounded-lg bg-[#D6F5F2B2] p-3",
            "w-[194px] shadow-[#066D640A] drop-shadow-2xl md:w-[230px]",
            POSITION_STYLES[direction],
          )}
          role="tooltip"
        >
          <div className="flex flex-col gap-y-1.5">
            <div className="flex items-start gap-x-2 pl-2">
              <div className="h-fit w-fit rounded-full bg-[#066D64]">
                <InfoIcon
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0 text-white"
                  strokeWidth={2.5}
                />
              </div>
              <p className="font-aileron text-tertiary-80 pt-[2px] pr-2 text-[14px] leading-tight font-bold">
                {title}
              </p>
            </div>
            {description && (
              <p className="font-aileron px-2 pb-1 text-justify text-[12px] leading-tight text-[#080807]">
                {description}
              </p>
            )}
          </div>
          <div className={cn("absolute h-0 w-0", ARROW_STYLES[direction])} />
        </div>
      )}
    </div>
  );
}
