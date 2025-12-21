import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Logo from "../../assets/logo/vetical-logo.svg";
import { Tagline } from "../ui/tag-line";

export default function HeroSection() {
  return (
    <section id="home" className="pt-[20vh] min-h-[90vh] " aria-labelledby="hero-heading">
      <div className="container-padding-x container mx-auto flex flex-col-reverse items-center gap-12 lg:flex-row lg:gap-16">
        <div className="flex flex-1 flex-col gap-6 lg:gap-8">
          <div className="section-title-gap-xl flex flex-col">
            <Tagline>AlphaCorp</Tagline>
            <h1 className="heading-xl">Professional cleaning with guaranteed quality</h1>
            <p className="text-muted-foreground text-base lg:text-lg">
              We transform environments with speed, consistency, and trust in every service provided.
            </p>
          </div>

          <div className="flex flex-col gap-2 md:gap-3">
            <div className="flex items-start gap-3">
              <div className="pt-0.5">
                <Check className="text-primary h-5 w-5" />
              </div>
              <span className="text-card-foreground text-base leading-6 font-medium">Always delivered on time</span>
            </div>

            <div className="flex items-start gap-3">
              <div className="pt-0.5">
                <Check className="text-primary h-5 w-5" />
              </div>
              <span className="text-card-foreground text-base leading-6 font-medium">Superior quality guaranteed</span>
            </div>

            <div className="flex items-start gap-3">
              <div className="pt-0.5">
                <Check className="text-primary h-5 w-5" />
              </div>
              <span className="text-card-foreground text-base leading-6 font-medium">Consistent and reliable service</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button>Request a quote</Button>
            <Button variant="ghost">
              How it works
              <ArrowRight />
            </Button>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full flex-1 flex items-center justify-center ">
          <div className="h-[300px] w-[300px] ">
            <Image src={Logo} alt="Hero visual" className="h-full w-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
