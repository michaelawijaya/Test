import { CodeBlock } from "../shared/code-block";
import { ComponentPreview } from "../shared/component-preview";
import { DemoSection } from "../shared/demo-section";

const colorGroups = [
  {
    title: "Primary",
    usage: "Main brand purple surfaces and emphasis.",
    colors: [
      { token: "primary-10", hex: "#E7DEF9", className: "bg-primary-10" },
      { token: "primary-20", hex: "#D6C3FC", className: "bg-primary-20" },
      { token: "primary-30", hex: "#B89CEF", className: "bg-primary-30" },
      { token: "primary-40", hex: "#946AE7", className: "bg-primary-40" },
      { token: "primary-50", hex: "#7139DF", className: "bg-primary-50" },
      { token: "primary-60", hex: "#551FBF", className: "bg-primary-60" },
      { token: "primary-70", hex: "#3F178D", className: "bg-primary-70" },
      { token: "primary-80", hex: "#2D1165", className: "bg-primary-80" },
      { token: "primary-90", hex: "#1C0A3E", className: "bg-primary-90" },
    ],
  },
  {
    title: "Secondary",
    usage: "Blue support palette for depth and layout gradients.",
    colors: [
      { token: "secondary-10", hex: "#D9E1F4", className: "bg-secondary-10" },
      { token: "secondary-20", hex: "#C0D2F8", className: "bg-secondary-20" },
      { token: "secondary-30", hex: "#99B5F2", className: "bg-secondary-30" },
      { token: "secondary-40", hex: "#6590EB", className: "bg-secondary-40" },
      { token: "secondary-50", hex: "#326BE5", className: "bg-secondary-50" },
      { token: "secondary-60", hex: "#194FC4", className: "bg-secondary-60" },
      { token: "secondary-70", hex: "#133B91", className: "bg-secondary-70" },
      { token: "secondary-80", hex: "#0C265E", className: "bg-secondary-80" },
      { token: "secondary-90", hex: "#07183A", className: "bg-secondary-90" },
    ],
  },
  {
    title: "Tertiary",
    usage: "Aqua accent palette for highlights and active states.",
    colors: [
      { token: "tertiary-10", hex: "#D6F5F2", className: "bg-tertiary-10" },
      { token: "tertiary-20", hex: "#C0FCF7", className: "bg-tertiary-20" },
      { token: "tertiary-30", hex: "#82F9EF", className: "bg-tertiary-30" },
      { token: "tertiary-40", hex: "#43F5E7", className: "bg-tertiary-40" },
      { token: "tertiary-50", hex: "#0CEBD9", className: "bg-tertiary-50" },
      { token: "tertiary-60", hex: "#0AC1B2", className: "bg-tertiary-60" },
      { token: "tertiary-70", hex: "#08978B", className: "bg-tertiary-70" },
      { token: "tertiary-80", hex: "#066D64", className: "bg-tertiary-80" },
      { token: "tertiary-90", hex: "#06554E", className: "bg-tertiary-90" },
    ],
  },
  {
    title: "Neutral",
    usage: "Text, dividers, and low-emphasis interface elements.",
    colors: [
      { token: "neutral-10", hex: "#333333", className: "bg-neutral-10" },
      { token: "neutral-100", hex: "#FFFFFF", className: "bg-neutral-100" },
      { token: "neutral-200", hex: "#E8E8E8", className: "bg-neutral-200" },
      { token: "neutral-300", hex: "#D2D2D2", className: "bg-neutral-300" },
      { token: "neutral-400", hex: "#BBBBBB", className: "bg-neutral-400" },
      { token: "neutral-500", hex: "#A4A4A4", className: "bg-neutral-500" },
      { token: "neutral-600", hex: "#8E8E8E", className: "bg-neutral-600" },
      { token: "neutral-700", hex: "#777777", className: "bg-neutral-700" },
      { token: "neutral-800", hex: "#606060", className: "bg-neutral-800" },
      { token: "neutral-900", hex: "#4A4A4A", className: "bg-neutral-900" },
      { token: "neutral-1000", hex: "#333333", className: "bg-neutral-1000" },
    ],
  },
  {
    title: "Feedback",
    usage: "Status colors for alerts, success, and warnings.",
    colors: [
      { token: "red-10", hex: "#FB3748", className: "bg-red-10" },
      { token: "red-100", hex: "#FB3748", className: "bg-red-100" },
      { token: "red-200", hex: "#D00416", className: "bg-red-200" },
      { token: "yellow-10", hex: "#FFDB43", className: "bg-yellow-10" },
      { token: "yellow-100", hex: "#FFDB43", className: "bg-yellow-100" },
      { token: "yellow-200", hex: "#DFB400", className: "bg-yellow-200" },
      { token: "green-10", hex: "#1FC16B", className: "bg-green-10" },
      { token: "green-100", hex: "#84EBB4", className: "bg-green-100" },
      { token: "green-200", hex: "#1FC16B", className: "bg-green-200" },
    ],
  },
];

export function ColorDemo() {
  return (
    <DemoSection
      description="Color palette using the project tokens declared in app.css."
      id="color"
      title="Color"
    >
      <ComponentPreview>
        <div className="font-aileron grid w-full gap-5 md:grid-cols-2 xl:grid-cols-3">
          {colorGroups.map((group) => (
            <div
              className="border-primary-30/40 bg-primary-90/70 shadow-primary-90/60 min-w-0 rounded-2xl border p-4 shadow-inner sm:p-5"
              key={group.title}
            >
              <div className="border-tertiary-70/40 mb-5 border-b pb-4">
                <h3 className="text-h5 text-tertiary-20 font-bold">
                  {group.title}
                </h3>
                <p className="text-b8 text-primary-20 mt-1">{group.usage}</p>
              </div>
              <div className="space-y-3">
                {group.colors.map((color) => (
                  <div
                    className="grid min-w-0 grid-cols-[56px_minmax(0,1fr)] items-center gap-3 p-3"
                    key={color.token}
                  >
                    <div
                      className={`border-tertiary-70/50 h-12 w-12 rounded-xl border shadow-sm ${color.className}`}
                    />
                    <div className="min-w-0">
                      <p className="text-s7 text-primary-10 truncate font-bold">
                        {color.token}
                      </p>
                      <p className="text-b9 text-tertiary-30 font-bold">
                        {color.hex}
                      </p>
                      <p className="text-b9 text-primary-20 truncate">
                        bg-{color.token}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ComponentPreview>
      <CodeBlock
        code={`<div className="bg-primary-80 text-primary-10">Primary surface</div>\n<div className="bg-tertiary-50 text-primary-90">Accent surface</div>`}
      />
    </DemoSection>
  );
}
