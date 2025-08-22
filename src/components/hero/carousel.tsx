import {
  Carousel as ShadcnCarousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '../ui/card';
import FileSvg from './fileSvg';
import AnimatedElement from './animatedElement';

export default function Carousel() {
  const carouselData = [
    {
      title: 'Gestão Operacional',
      description:
        'Otimize os processos internos e a rotina da sua equipe para alcançar mais eficiência com menos esforço.',
      subtopics: ['Processo', 'Estrutura', 'Organização', 'Treinamento'],
    },
    {
      title: 'Gestão Financeira',
      description: 'Organize as finanças da sua clínica para garantir rentabilidade e crescimento sustentável.',
      subtopics: ['Hora Clínica', 'Precificação', 'Fechamentos', 'Recebimento'],
    },
    {
      title: 'Experiência do Paciente',
      description:
        'Melhore o relacionamento com os pacientes e implemente estratégias que aumentam a confiança e as conversões.',
      subtopics: ['Atendimento', 'Vendas', 'Ambiente', 'Recepção'],
    },
  ];

  return (
    <ShadcnCarousel className="mt-2">
      <CarouselContent className="pl-4">
        {carouselData.map((item, index) => (
          <CarouselItem key={index} className="basis-[100%] md:basis-1/2 lg:basis-1/3 px-4">
            <Card className="h-full flex flex-col rounded-md py-4 bg-black/10 text-accent border-1 border-black/20 backdrop-blur-sm shadow-md select-none">
              <CardContent>
                <AnimatedElement>
                  <div className="flex flex-col justify-center items-start space-y-2 ">
                    <h3 className="text-base lg:text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-300 text-justify">{item.description}</p>
                    <ul className="text-sm space-y-1 mt-2">
                      {item.subtopics.map((subtopic, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <FileSvg width={20} height={20} fill="#FFFFFF" />
                          <span>{subtopic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedElement>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious variant={'ghost'} />
      <CarouselNext variant={'ghost'} />
    </ShadcnCarousel>
  );
}
