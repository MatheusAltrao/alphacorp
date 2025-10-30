import { Card, CardContent } from "@/components/ui/card";
import { Tagline } from "../ui/tag-line";

export default function Results() {
  return (
    <section id="results" className="bg-background section-padding-y border-b scroll-mt-24">
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col gap-10 md:gap-12">
          <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
            <Tagline>Results</Tagline>
            <h2 className="heading-lg text-foreground">Our numbers speak for themselves</h2>
            <p className="text-muted-foreground">
              Indicators that prove quality, speed, and trust in every service provided. Commitment to on-time delivery and consistent cleaning
              standards.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:gap-6 lg:flex-row">
            <Card className="bg-secondary rounded-xl border-none p-6 shadow-none">
              <CardContent className="flex flex-col gap-2 p-0 md:gap-3">
                <h3 className="text-primary font-semibold">Consistent quality</h3>
                <span className="text-foreground text-3xl font-semibold md:text-4xl">10k+</span>
                <p className="text-muted-foreground text-base">
                  Spaces sanitized following strict checklists and recurring inspections to maintain a high cleaning standard.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary rounded-xl border-none p-6 shadow-none">
              <CardContent className="flex flex-col gap-2 p-0 md:gap-3">
                <h3 className="text-primary font-semibold">Speed and efficiency</h3>
                <span className="text-foreground text-3xl font-semibold md:text-4xl">95% in 24h</span>
                <p className="text-muted-foreground text-base">
                  Services completed within 24 business hours, with teams ready to act without wasting time.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary rounded-xl border-none p-6 shadow-none">
              <CardContent className="flex flex-col gap-2 p-0 md:gap-3">
                <h3 className="text-primary font-semibold">Punctuality and trust</h3>
                <span className="text-foreground text-3xl font-semibold md:text-4xl">4.9/5</span>
                <p className="text-muted-foreground text-base">
                  Average customer rating for on-time delivery, clear communication, and consistent results at every visit.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
