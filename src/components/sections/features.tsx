import { BarChart3, Bot, Plug, TextSearch } from "lucide-react";
import { Tagline } from "../ui/tag-line";

export default function Features() {
  return (
    <section id="como-funciona" className="bg-secondary section-padding-y border-b">
      <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">
        <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
          <Tagline>Como funciona</Tagline>
          <h2 className="heading-lg text-foreground">Processo simples em 4 etapas</h2>
          <p className="text-muted-foreground text-base">
            Transformamos seu ambiente em um espaço limpo e organizado através de um processo profissional e eficiente.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          <div className="flex flex-col items-center gap-5 text-center">
            <div className="bg-background flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border shadow-[0px_0px_0px_4px_rgba(7,46,106,0.05)]">
              <Plug className="text-primary h-5 w-5" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-foreground font-semibold">1. Contato</h3>
              <p className="text-muted-foreground">Entre em contato e solicite seu orçamento personalizado</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 text-center">
            <div className="bg-background flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border shadow-[0px_0px_0px_4px_rgba(7,46,106,0.05)]">
              <Bot className="text-primary h-5 w-5" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-foreground font-semibold">2. Avaliação</h3>
              <p className="text-muted-foreground">Nossa equipe avalia o ambiente e define o melhor plano de limpeza</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 text-center">
            <div className="bg-background flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border shadow-[0px_0px_0px_4px_rgba(7,46,106,0.05)]">
              <BarChart3 className="text-primary h-5 w-5" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-foreground font-semibold">3. Execução</h3>
              <p className="text-muted-foreground">Realizamos a limpeza com qualidade superior e no prazo acordado</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 text-center">
            <div className="bg-background flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border shadow-[0px_0px_0px_4px_rgba(7,46,106,0.05)]">
              <TextSearch className="text-primary h-5 w-5" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-foreground font-semibold">4. Garantia</h3>
              <p className="text-muted-foreground">Garantimos a satisfação e oferecemos suporte pós-serviço</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
