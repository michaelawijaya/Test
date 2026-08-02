"use client";
import { Timer } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "~/lib/image";
import { cn } from "~/lib/utils";
import type { CountdownProps } from "./interface";

const BlockTime = ({
  date,
  type,
  classNameType,
  classNameBlock,
  background,
}: CountdownProps) => {
  return (
    <div className="font-league relative scale-75 flex flex-col text-white items-center">
      {background && (
        <Image
          alt="bola-bola ubi"
          className="absolute -z-1 h-35 w-35 max-w-none md:h-90 md:w-90 "
          draggable={false}
          src={background}
        />
      )}
      <div
        className={cn(
          "font-league-spartan flex h-37 w-20 items-center justify-center md:h-95 md:w-70 ",
          classNameBlock,
        )}
      >
        <span
          className={cn(
            "text-[#F6F2FF] inline-block text-4xl font-bold md:text-[100px]",
            classNameType,
          )}
        >
          {date}
        </span>
      </div>
      <span
        className={cn(
          "text-[#F6F2FF] text-md md:text-h2 font-league-spartan -mt-5 inline-block font-bold md:-mt-15",
          classNameType,
        )}
      >
        {type}
      </span>
    </div>
  );
};

const Countdown = ({
  targetDate,
  displayDate = false,
  classNameType,
  classNameBlock,
  onComplete,
}: {
  targetDate: Date;
  displayDate?: boolean;
  classNameType?: string;
  classNameBlock?: string;
  onComplete?: () => void;
}) => {
  const defaultRemainingTime = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const interval = setInterval(() => {
      const deadlineDate = targetDate.getTime();
      const now = Date.now();
      const distance = deadlineDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        setRemainingTime({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        if (onComplete) {
          onComplete();
        }
      } else {
        setRemainingTime({
          days,
          hours,
          minutes,
          seconds,
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate, onComplete]);

  const dateTime = {
    date: targetDate.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }),
    time: targetDate
      .toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
        timeZoneName: "short",
      })
      .replace(".", ":"),
  };

  const hasDays = remainingTime.days > 0;
  const countdownBlocks: Array<Pick<CountdownProps, "date" | "type">> = [
    {
      type: hasDays ? "Days" : "Hours",
      date: (hasDays ? remainingTime.days : remainingTime.hours)
        .toString()
        .padStart(2, "0"),
    },
    {
      type: hasDays ? "Hours" : "Minutes",
      date: (hasDays ? remainingTime.hours : remainingTime.minutes)
        .toString()
        .padStart(2, "0"),
    },
    {
      type: hasDays ? "Minutes" : "Seconds",
      date: (hasDays ? remainingTime.minutes : remainingTime.seconds)
        .toString()
        .padStart(2, "0"),
    },
  ];

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-4">
        {countdownBlocks.map((block, index) => (
          <div key={block.type} className="flex items-center gap-4">
            <BlockTime
              background="/design-system/bola-ubi 2.svg"
              classNameBlock={classNameBlock}
              classNameType={classNameType}
              date={block.date}
              key={block.type}
              type={block.type}
            />
            {index < countdownBlocks.length - 1 && (
              <span className="font-league-spartan font-bold text-[100px] leading-12">
                :
              </span>
            )}
          </div>
        ))}
      </div>
      {displayDate && (
        <div className="flex items-center gap-1">
          <Timer
            className={cn(
              "h-3.5 w-3.5 text-white md:h-4.5 md:w-4.5 dark:text-neutral",
              classNameType,
            )}
          />
          <span
            className={cn(
              "inline-block pt-0.5 text-xs font-bold text-white md:pt-0 md:text-base dark:text-neutral",
              classNameType,
            )}
          >{`${dateTime.date}, ${dateTime.time.split(" ")[0]} WIB`}</span>
        </div>
      )}
    </div>
  );
};

export default Countdown;
