import { BarChart3, Bot, Plug, TextSearch } from 'lucide-react'
import { Tagline } from '../ui/tag-line'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-secondary section-padding-y border-b">
      <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">
        <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
          <Tagline>How it works</Tagline>
          <h2 className="heading-lg text-foreground">A simple 4-step process</h2>
          <p className="text-muted-foreground text-base">
            We transform your environment into a clean and organized space through a professional and efficient process.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          <div className="flex flex-col items-center gap-5 text-center">
            <div className="bg-background flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border shadow-[0px_0px_0px_4px_rgba(7,46,106,0.05)]">
              <Plug className="text-primary h-5 w-5" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-foreground font-semibold">1. Contact</h3>
              <p className="text-muted-foreground">Get in touch and request your personalized quote.</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-5 text-center">
            <div className="bg-background flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border shadow-[0px_0px_0px_4px_rgba(7,46,106,0.05)]">
              <Bot className="text-primary h-5 w-5" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-foreground font-semibold">2. Evaluation</h3>
              <p className="text-muted-foreground">
                Our team evaluates the environment and defines the best cleaning plan.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-5 text-center">
            <div className="bg-background flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border shadow-[0px_0px_0px_4px_rgba(7,46,106,0.05)]">
              <BarChart3 className="text-primary h-5 w-5" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-foreground font-semibold">3. Execution</h3>
              <p className="text-muted-foreground">
                We perform the cleaning with superior quality and within the agreed deadline.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-5 text-center">
            <div className="bg-background flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border shadow-[0px_0px_0px_4px_rgba(7,46,106,0.05)]">
              <TextSearch className="text-primary h-5 w-5" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-foreground font-semibold">4. Guarantee</h3>
              <p className="text-muted-foreground">We guarantee satisfaction and provide post-service support.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
