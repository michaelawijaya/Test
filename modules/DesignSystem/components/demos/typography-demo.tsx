import { CodeBlock } from "../shared/code-block";
import { ComponentPreview } from "../shared/component-preview";
import { DemoSection } from "../shared/demo-section";

const typographyGroups = [
  {
    title: "Heading",
    description: "Bold display hierarchy for section titles and page headings.",
    sampleClassName: "font-league-spartan font-bold",
    items: [
      { token: "H1", className: "text-h1", size: "60px", lineHeight: "40px" },
      { token: "H2", className: "text-h2", size: "48px", lineHeight: "40px" },
      { token: "H3", className: "text-h3", size: "36px", lineHeight: "40px" },
      { token: "H4", className: "text-h4", size: "30px", lineHeight: "36px" },
      { token: "H5", className: "text-h5", size: "24px", lineHeight: "32px" },
      { token: "H6", className: "text-h6", size: "20px", lineHeight: "28px" },
      { token: "H7", className: "text-h7", size: "16px", lineHeight: "24px" },
      { token: "H8", className: "text-h8", size: "14px", lineHeight: "20px" },
      { token: "H9", className: "text-h9", size: "12px", lineHeight: "16px" },
    ],
  },
  {
    title: "Sub Heading",
    description:
      "Supporting hierarchy for labels, cards, and compact sections.",
    sampleClassName: "font-aileron font-normal",
    items: [
      { token: "S1", className: "text-s1", size: "60px", lineHeight: "60px" },
      { token: "S2", className: "text-s2", size: "48px", lineHeight: "48px" },
      { token: "S3", className: "text-s3", size: "36px", lineHeight: "40px" },
      { token: "S4", className: "text-s4", size: "30px", lineHeight: "36px" },
      { token: "S5", className: "text-s5", size: "24px", lineHeight: "32px" },
      { token: "S6", className: "text-s6", size: "20px", lineHeight: "28px" },
      { token: "S7", className: "text-s7", size: "16px", lineHeight: "24px" },
      { token: "S8", className: "text-s8", size: "14px", lineHeight: "20px" },
      { token: "S9", className: "text-s9", size: "12px", lineHeight: "16px" },
    ],
  },
  {
    title: "Body",
    description: "Reading and interface copy scale for content-heavy surfaces.",
    sampleClassName: "font-aileron font-normal",
    items: [
      { token: "B1", className: "text-b1", size: "60px", lineHeight: "60px" },
      { token: "B2", className: "text-b2", size: "48px", lineHeight: "48px" },
      { token: "B3", className: "text-b3", size: "36px", lineHeight: "40px" },
      { token: "B4", className: "text-b4", size: "30px", lineHeight: "36px" },
      { token: "B5", className: "text-b5", size: "24px", lineHeight: "32px" },
      { token: "B6", className: "text-b6", size: "20px", lineHeight: "28px" },
      { token: "B7", className: "text-b7", size: "16px", lineHeight: "24px" },
      { token: "B8", className: "text-b8", size: "14px", lineHeight: "20px" },
      { token: "B9", className: "text-b9", size: "12px", lineHeight: "16px" },
    ],
  },
];

export function TypographyDemo() {
  return (
    <DemoSection
      description="Text styles, fonts, and headings used across the application."
      id="typography"
      title="Typography"
    >
      <ComponentPreview>
        <div className="font-aileron grid w-full gap-5 lg:grid-cols-3">
          {typographyGroups.map((group) => (
            <div
              className="border-primary-30/40 bg-primary-90/70 shadow-primary-90/60 min-w-0 rounded-2xl border p-4 shadow-inner sm:p-5"
              key={group.title}
            >
              <div className="border-tertiary-70/40 mb-5 border-b pb-4">
                <h3 className="text-h5 text-tertiary-20 font-bold">
                  {group.title}
                </h3>
                <p className="text-b8 text-primary-20 mt-1">
                  {group.description}
                </p>
              </div>
              <div className="space-y-3">
                {group.items.map((item) => (
                  <div
                    className="grid min-w-0 grid-cols-[44px_minmax(0,1fr)] gap-3 p-3"
                    key={item.token}
                  >
                    <div className="bg-primary-70 text-s8 text-tertiary-20 flex h-10 items-center justify-center rounded-lg font-bold">
                      {item.token}
                    </div>
                    <div className="min-w-0">
                      <p
                        className={`${item.className} ${group.sampleClassName} text-primary-10 truncate`}
                      >
                        Aa
                      </p>
                      <p className="text-b9 text-tertiary-30 mt-1 font-bold">
                        {item.size} / {item.lineHeight}
                      </p>
                      <p className="text-b9 text-primary-20">
                        font-size {item.size}, line-height {item.lineHeight}
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
        code={`<h1 className="font-league-spartan font-bold text-h1 text-primary-10">Heading</h1>\n<p className="font-aileron text-b7 text-primary-20">Body copy</p>`}
      />
    </DemoSection>
  );
}
