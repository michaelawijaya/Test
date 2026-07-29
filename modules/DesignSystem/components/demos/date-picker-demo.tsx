import { DemoSection } from "../shared/demo-section";
import { ComponentPreview } from "../shared/component-preview";
import { CodeBlock } from "../shared/code-block";
import { DatePicker } from "~/components/ui/date-picker";

const CODE = `import { DatePicker } from "~/components/ui/date-picker";

export function MyDatePicker() {
  return (
    <DatePicker
      minDate={new Date(2025, 2, 1)}   // Mar 1, 2025
      maxDate={new Date(2027, 8, 30)}  // Sep 30, 2027
      onChange={(date) => console.log(date)}
    />
  );
}`;

export function DatePickerDemo() {
  return (
    <DemoSection
      description="A calendar date picker with day, month, and year views. Click the title to switch views. Supports min/max date constraints."
      id="date-picker"
      title="Date Picker"
    >
      <ComponentPreview>
        <div className="flex items-start justify-center">
          <DatePicker
            maxDate={new Date(2027, 8, 30)}
            minDate={new Date(2025, 2, 1)}
          />
        </div>
      </ComponentPreview>
      <CodeBlock code={CODE} />
    </DemoSection>
  );
}
