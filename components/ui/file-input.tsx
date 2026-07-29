"use client";

import { Download, X, CheckCircle } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { cn } from "~/lib/utils";
import Image from "~/lib/image";

import { Button } from "~/components/ui/button";

const EXIT_ANIMATION_MS = 300;

type FileInputProps = Omit<React.ComponentProps<"input">, "type"> & {
  buttonText?: string;
  trigger?: (open: () => void) => React.ReactNode;
  triggerClassName?: string;
  triggerText?: string;
  wrapperClassName?: string;
};

export function FileInput({
  buttonText = "Done",
  className,
  id,
  onChange,
  trigger,
  triggerClassName,
  triggerText = "Upload File",
  wrapperClassName,
  ...props
}: FileInputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const [fileName, setFileName] = useState("Drag your File Here!");
  const [isOpen, setIsOpen] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  const [hasFile, setHasFile] = useState(false);
  const bodyOverflowRef = useRef("");
  const bodyPaddingRightRef = useRef("");

  useEffect(() => {
    if (!isRendered) {
      return;
    }

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    bodyOverflowRef.current = document.body.style.overflow;
    bodyPaddingRightRef.current = document.body.style.paddingRight;

    document.body.style.overflow = "hidden";

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = bodyOverflowRef.current;
      document.body.style.paddingRight = bodyPaddingRightRef.current;
    };
  }, [isRendered]);

  useEffect(() => {
    if (isOpen || !isRendered) {
      return;
    }

    const timeout = window.setTimeout(
      () => setIsRendered(false),
      EXIT_ANIMATION_MS,
    );
    return () => window.clearTimeout(timeout);
  }, [isOpen, isRendered]);

  const openModal = () => {
    setIsRendered(true);
    setIsOpen(true);
  };
  const closeModal = () => setIsOpen(false);

  return (
    <>
      {trigger ? (
        trigger(openModal)
      ) : (
        <Button
          className={cn(
            "text-s8 w-fit rounded-lg px-10 py-3 font-bold text-neutral-100!",
            triggerClassName,
          )}
          onClick={openModal}
          type="button"
          variant="link"
        >
          {triggerText}
        </Button>
      )}

      {isRendered &&
        createPortal(
          <div
            aria-modal="true"
            className={cn(
              "fixed inset-0 z-999 flex items-center justify-center bg-black/40 px-4 transition-opacity duration-300 ease-out",
              isOpen ? "opacity-100" : "pointer-events-none opacity-0",
            )}
            role="dialog"
          >
            <div
              className={cn(
                "mx-auto h-80 w-full max-w-162.5 transform-gpu rounded-2xl bg-white p-7 transition-[opacity,transform] duration-300 ease-out md:h-115",
                isOpen
                  ? "translate-y-0 scale-100 opacity-100"
                  : "translate-y-3 scale-95 opacity-0",
              )}
            >
              <div className="mb-2 flex w-full justify-end">
                <button
                  aria-label="Close file upload"
                  className="cursor-pointer text-black"
                  onClick={closeModal}
                  type="button"
                >
                  <X />
                </button>
              </div>

              <label
                className={cn(
                  "border-primary-30 bg-primary-10 relative mx-auto flex h-45 cursor-pointer flex-col items-center justify-center gap-4 rounded-xl border-3 border-dashed px-20 py-10 text-center md:h-80",
                  wrapperClassName,
                )}
                htmlFor={inputId}
              >
                <input
                  className={cn("sr-only h-75", className)}
                  id={inputId}
                  onChange={(event) => {
                    const nextFileName = event.target.files?.[0]?.name;

                    setFileName(nextFileName ?? "Drag your File Here!");
                    setHasFile(Boolean(nextFileName));
                    onChange?.(event);
                  }}
                  type="file"
                  {...props}
                />

                {hasFile ? (
                  <>
                    <CheckCircle className="text-primary-30 absolute right-23 size-20 md:right-45 md:size-45" />
                    <Image
                      alt=""
                      aria-hidden="true"
                      className="pointer-events-none absolute bottom-12 left-23 w-17 md:left-50 md:w-28"
                      src="/design-system/panda-uploaded.svg"
                    />
                  </>
                ) : (
                  <>
                    <Download className="text-primary-30 absolute left-25 size-20 md:left-45 md:size-45" />
                    <Image
                      alt=""
                      aria-hidden="true"
                      className="pointer-events-none absolute top-10 right-20 bottom-12 max-h-none w-20 max-w-none md:top-20 md:right-45 md:w-40"
                      src="/design-system/panda-buka-folder.svg"
                    />
                  </>
                )}

                <div className="absolute bottom-1 z-10 flex items-center md:bottom-2">
                  {/* {hasFile && (
                  <span className="truncate font-league-spartan text-h8 md:text-h6 text-primary-70">
                    Uploaded File:
                  </span>
                )} */}
                  <h6 className="font-league-spartan text-h8 md:text-h6 text-primary-70 w-full max-w-60 truncate whitespace-normal md:max-w-xl">
                    {fileName}
                  </h6>
                </div>
              </label>
              <div className="mx-auto flex w-full justify-center">
                <Button
                  className="bg-primary-80 text-s8 mt-4 w-fit rounded-lg px-10 py-3 font-bold text-neutral-100!"
                  onClick={closeModal}
                  type="button"
                >
                  {buttonText}
                </Button>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
