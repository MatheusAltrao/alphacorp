import { Card, CardContent } from "@/components/ui/card";
import { Tagline } from "../ui/tag-line";

export default function Metrics() {
  return (
    <section id="metrics" className="bg-background section-padding-y border-b scroll-mt-24">
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col gap-10 md:gap-12">
          <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
            <Tagline>Resultados</Tagline>
            <h2 className="heading-lg text-foreground">Nossos números falam por nós</h2>
            <p className="text-muted-foreground">
              Indicadores que comprovam qualidade, rapidez e confiança em cada serviço prestado. Compromisso com entrega no prazo e padrão de limpeza
              consistente.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:gap-6 lg:flex-row">
            <Card className="bg-secondary rounded-xl border-none p-6 shadow-none">
              <CardContent className="flex flex-col gap-2 p-0 md:gap-3">
                <h3 className="text-primary font-semibold">Qualidade consistente</h3>
                <span className="text-foreground text-3xl font-semibold md:text-4xl">10k+</span>
                <p className="text-muted-foreground text-base">
                  Ambientes higienizados seguindo checklists rigorosos e inspeções recorrentes para manter um padrão elevado de limpeza.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary rounded-xl border-none p-6 shadow-none">
              <CardContent className="flex flex-col gap-2 p-0 md:gap-3">
                <h3 className="text-primary font-semibold">Rapidez e eficiência</h3>
                <span className="text-foreground text-3xl font-semibold md:text-4xl">95% em 24h</span>
                <p className="text-muted-foreground text-base">
                  Atendimentos executados dentro de 24 horas úteis, com equipes preparadas para resolver sem perda de tempo.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary rounded-xl border-none p-6 shadow-none">
              <CardContent className="flex flex-col gap-2 p-0 md:gap-3">
                <h3 className="text-primary font-semibold">Pontualidade e confiança</h3>
                <span className="text-foreground text-3xl font-semibold md:text-4xl">4.9/5</span>
                <p className="text-muted-foreground text-base">
                  Avaliação média de clientes pela entrega no prazo, comunicação clara e resultados consistentes a cada visita.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
