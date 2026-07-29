import { DemoSection } from "../shared/demo-section";
import { ComponentPreview } from "../shared/component-preview";
import { CodeBlock } from "../shared/code-block";
import { Testimonials } from "~/components/elements/Testimonial";

export function TestimonialsDemo() {
  return (
    <DemoSection
      description="User feedback and review display."
      id="testimonials"
      title="Testimonials"
    >
      <ComponentPreview>
        <div className="w-full overflow-x-hidden rounded-xl bg-white px-10 py-5">
          <Testimonials />
        </div>
      </ComponentPreview>
      <CodeBlock code={"// Placeholder for Testimonials component usage"} />
    </DemoSection>
  );
}
