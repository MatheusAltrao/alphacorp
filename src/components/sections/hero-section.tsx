import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Logo from "../../assets/logo/logo-full.png";
import { Tagline } from "../ui/tag-line";

export default function HeroSection() {
  return (
    <section id="home" className="bg-secondary section-padding-y" aria-labelledby="hero-heading">
      <div className="container-padding-x container mx-auto flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
        <div className="flex flex-1 flex-col gap-6 lg:gap-8">
          <div className="section-title-gap-xl flex flex-col">
            <Tagline>AlphaCorp</Tagline>
            <h1 className="heading-xl">Limpeza profissional com qualidade garantida</h1>
            <p className="text-muted-foreground text-base lg:text-lg">
              Transformamos ambientes com rapidez, consistência e confiança em cada serviço prestado
            </p>
          </div>

          <div className="flex flex-col gap-2 md:gap-3">
            <div className="flex items-start gap-3">
              <div className="pt-0.5">
                <Check className="text-primary h-5 w-5" />
              </div>
              <span className="text-card-foreground text-base leading-6 font-medium">Entrega sempre no prazo</span>
            </div>

            <div className="flex items-start gap-3">
              <div className="pt-0.5">
                <Check className="text-primary h-5 w-5" />
              </div>
              <span className="text-card-foreground text-base leading-6 font-medium">Qualidade superior garantida</span>
            </div>

            <div className="flex items-start gap-3">
              <div className="pt-0.5">
                <Check className="text-primary h-5 w-5" />
              </div>
              <span className="text-card-foreground text-base leading-6 font-medium">Serviço consistente e confiável</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button>Solicitar orçamento</Button>
            <Button variant="ghost">
              Como funciona
              <ArrowRight />
            </Button>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full flex-1">
          <AspectRatio ratio={1 / 1}>
            <Image src={Logo} alt="Hero visual" fill priority className="h-full w-full rounded-xl object-cover" />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
}
