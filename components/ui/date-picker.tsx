"use client";

import type * as React from "react";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "~/lib/utils";

type CalendarView = "days" | "months" | "years";

const MONTH_LABELS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const DAY_LABELS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

export interface DatePickerProps {
  value?: Date;
  defaultValue?: Date;
  initialView?: CalendarView;
  minDate?: Date;
  maxDate?: Date;
  onChange?: (date: Date) => void;
  className?: string;
}

function DatePicker({
  value,
  defaultValue,
  initialView = "days",
  minDate,
  maxDate,
  onChange,
  className,
}: DatePickerProps) {
  const [selected, setSelected] = useState<Date | undefined>(
    value ?? defaultValue,
  );
  const [view, setView] = useState<CalendarView>(initialView);
  const [viewDate, setViewDate] = useState<Date>(() => {
    const d = selected ?? new Date();
    return new Date(d.getFullYear(), d.getMonth(), 1);
  });

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  function isSameDay(a: Date, b: Date) {
    return (
      a.getFullYear() === b.getFullYear() &&
      a.getMonth() === b.getMonth() &&
      a.getDate() === b.getDate()
    );
  }

  function isDayDisabled(date: Date) {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    if (minDate) {
      const min = new Date(minDate);
      min.setHours(0, 0, 0, 0);
      if (d < min) {
        return true;
      }
    }
    if (maxDate) {
      const max = new Date(maxDate);
      max.setHours(0, 0, 0, 0);
      if (d > max) {
        return true;
      }
    }
    return false;
  }

  function isMonthDisabled(y: number, m: number) {
    if (minDate) {
      const min = new Date(minDate);
      min.setHours(0, 0, 0, 0);
      const lastDay = new Date(y, m + 1, 0);
      if (lastDay < min) {
        return true;
      }
    }
    if (maxDate) {
      const max = new Date(maxDate);
      max.setHours(0, 0, 0, 0);
      const firstDay = new Date(y, m, 1);
      if (firstDay > max) {
        return true;
      }
    }
    return false;
  }

  function isYearDisabled(y: number) {
    if (minDate) {
      const min = new Date(minDate);
      min.setHours(0, 0, 0, 0);
      if (new Date(y, 11, 31) < min) {
        return true;
      }
    }
    if (maxDate) {
      const max = new Date(maxDate);
      max.setHours(0, 0, 0, 0);
      if (new Date(y, 0, 1) > max) {
        return true;
      }
    }
    return false;
  }

  // Year range: startYear to startYear+11 (12 main years) + 1 trailing year shown muted.
  // floor(year/12)*12 - 1 produces "2015–2026" for year 2026 matching the design.
  function getYearRangeStart(y: number) {
    return Math.floor(y / 12) * 12 - 1;
  }

  function prevPeriod() {
    if (view === "days") {
      setViewDate(new Date(year, month - 1, 1));
    } else if (view === "months") {
      setViewDate(new Date(year - 1, 0, 1));
    } else {
      setViewDate(new Date(getYearRangeStart(year) - 1, 0, 1));
    }
  }

  function nextPeriod() {
    if (view === "days") {
      setViewDate(new Date(year, month + 1, 1));
    } else if (view === "months") {
      setViewDate(new Date(year + 1, 0, 1));
    } else {
      setViewDate(new Date(getYearRangeStart(year) + 13, 0, 1));
    }
  }

  function getTitle() {
    if (view === "days") {
      return new Intl.DateTimeFormat("en-US", {
        month: "long",
        year: "numeric",
      }).format(viewDate);
    }
    if (view === "months") {
      return String(year);
    }
    const start = getYearRangeStart(year);
    return `${start}–${start + 11}`;
  }

  function cycleView() {
    setView(view === "days" ? "months" : "years");
  }

  function handleDayClick(date: Date, outOfMonth = false) {
    if (isDayDisabled(date)) {
      return;
    }
    setSelected(date);
    onChange?.(date);
    if (outOfMonth) {
      setViewDate(new Date(date.getFullYear(), date.getMonth(), 1));
    }
  }

  function handleMonthClick(m: number) {
    if (isMonthDisabled(year, m)) {
      return;
    }
    setViewDate(new Date(year, m, 1));
    setView("days");
  }

  function handleYearClick(y: number) {
    if (isYearDisabled(y)) {
      return;
    }
    setViewDate(new Date(y, month, 1));
    setView("months");
  }

  function cellClass(isSelected: boolean, isDisabled: boolean) {
    if (isDisabled) {
      return "text-secondary-40 opacity-50 cursor-not-allowed";
    }
    if (isSelected) {
      return "bg-secondary-80 text-[#C0D2F8]";
    }
    return "text-secondary-80 hover:bg-secondary-20";
  }

  function renderDays() {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();
    // Convert JS Sunday-first (0) to Monday-first: Sun→6, Mon→0, …, Sat→5
    const rawFirstDay = new Date(year, month, 1).getDay();
    const firstDay = rawFirstDay === 0 ? 6 : rawFirstDay - 1;

    const cells: React.ReactNode[] = [];

    // Trailing days from previous month
    for (let i = firstDay - 1; i >= 0; i--) {
      const d = daysInPrevMonth - i;
      const date = new Date(year, month - 1, d);
      cells.push(
        <button
          className="font-aileron text-secondary-20 flex size-7 items-center justify-center rounded-full text-[14px] font-bold transition-colors"
          key={`prev-${d}`}
          onClick={() => handleDayClick(date, true)}
          type="button"
        >
          {d}
        </button>,
      );
    }

    // Current month days
    for (let d = 1; d <= daysInMonth; d++) {
      const date = new Date(year, month, d);
      const isSelected = !!selected && isSameDay(date, selected);
      const isDisabled = isDayDisabled(date);
      cells.push(
        <button
          className={cn(
            "font-aileron flex size-7 items-center justify-center rounded-full text-[14px] font-bold transition-colors",
            cellClass(isSelected, isDisabled),
          )}
          disabled={isDisabled}
          key={d}
          onClick={() => handleDayClick(date)}
          type="button"
        >
          {d}
        </button>,
      );
    }

    // Leading days from next month to complete the last row
    const totalCells = Math.ceil((firstDay + daysInMonth) / 7) * 7;
    for (let d = 1; d <= totalCells - firstDay - daysInMonth; d++) {
      const date = new Date(year, month + 1, d);
      cells.push(
        <button
          className="font-aileron text-secondary-20 flex size-7 items-center justify-center rounded-full text-[14px] font-bold transition-colors"
          key={`next-${d}`}
          onClick={() => handleDayClick(date, true)}
          type="button"
        >
          {d}
        </button>,
      );
    }

    return (
      <div className="grid grid-cols-7 place-items-center gap-y-1">
        {DAY_LABELS.map((label) => (
          <div
            className="font-aileron text-h9 text-secondary-80 flex size-7 items-center justify-center font-bold"
            key={label}
          >
            {label}
          </div>
        ))}
        {cells}
      </div>
    );
  }

  function renderMonths() {
    return (
      <div className="grid grid-cols-4 gap-y-3 py-2">
        {MONTH_LABELS.map((label, i) => {
          const isSelected =
            !!selected &&
            selected.getMonth() === i &&
            selected.getFullYear() === year;
          const isDisabled = isMonthDisabled(year, i);
          return (
            <button
              className={cn(
                "font-aileron flex h-9 items-center justify-center rounded-full text-[14px] font-bold transition-colors",
                cellClass(isSelected, isDisabled),
              )}
              disabled={isDisabled}
              key={label}
              onClick={() => handleMonthClick(i)}
              type="button"
            >
              {label}
            </button>
          );
        })}
      </div>
    );
  }

  function renderYears() {
    const start = getYearRangeStart(year);
    const mainYears = Array.from({ length: 12 }, (_, i) => start + i);

    return (
      <div className="grid grid-cols-4 gap-y-3 py-2">
        {mainYears.map((y) => {
          const isSelected = !!selected && selected.getFullYear() === y;
          const isDisabled = isYearDisabled(y);
          return (
            <button
              className={cn(
                "font-aileron flex h-9 items-center justify-center rounded-full text-[14px] font-bold transition-colors",
                cellClass(isSelected, isDisabled),
              )}
              disabled={isDisabled}
              key={y}
              onClick={() => handleYearClick(y)}
              type="button"
            >
              {y}
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "bg-secondary-10 w-72 rounded-2xl p-6 select-none",
        className,
      )}
    >
      {/* Header */}
      <div className="mb-3 flex items-center justify-between">
        <button
          className="text-secondary-80 hover:bg-secondary-20 flex size-8 items-center justify-center rounded-full transition-colors"
          onClick={prevPeriod}
          type="button"
        >
          <ChevronLeft className="size-5" />
        </button>

        <button
          className={cn(
            "font-league-spartan text-secondary-80 rounded-lg px-2 py-0.5 text-lg font-bold transition-colors",
            view === "years"
              ? "cursor-default"
              : "hover:bg-secondary-20 cursor-pointer",
          )}
          onClick={view === "years" ? undefined : cycleView}
          type="button"
        >
          {getTitle()}
        </button>

        <button
          className="text-secondary-80 hover:bg-secondary-20 flex size-8 items-center justify-center rounded-full transition-colors"
          onClick={nextPeriod}
          type="button"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>

      <div className="border-secondary-20 mt-2 rounded-xl border p-3">
        {view === "days" && renderDays()}
        {view === "months" && renderMonths()}
        {view === "years" && renderYears()}
      </div>
    </div>
  );
}

export { DatePicker };
