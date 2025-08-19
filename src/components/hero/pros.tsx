import AnimatedText from './animatedText';
import BulletItem from './bulletItem';

export default function Pros() {
  return (
    <div className="lg:col-span-3">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white text-black py-12 px-6 rounded-lg mt-[-95] shadow-md">
        <div className="space-y-4">
          <h2 className="text-xl lg:text-2xl font-bold">
            Ajudo dentistas a{' '}
            <span className="text-[#e6c67c]">transformarem</span> seus
            consultórios de dentro para fora!
          </h2>
          <AnimatedText>
            <div className="space-y-2">
              <p>
                São mais de 10 anos aprendendo e aprimorando padrões e processos
                de alguém que ainda não tinha o próprio consultório e trabalhava
                em 3 lugares diferentes e 3 turnos.
              </p>
              <p>
                Nesses 10 anos eu aprendi entre erros e acertos o caminho de uma
                gestão operacional e financeira eficiente e lucrativa.
              </p>
            </div>
          </AnimatedText>
        </div>
        <div className="space-y-4">
          <h2 className="text-xl lg:text-2xl font-semibold">
            Quais tópicos serão abordados na mentoria?
          </h2>
          <ul className="space-y-1 grid grid-cols-2 gap-1">
            <BulletItem index={1} text="Gestao financeira" />
            <BulletItem index={6} text="Gestao operacional" />
            <BulletItem index={2} text="Hora Clínica" />
            <BulletItem index={3} text="Precificação" />
            <BulletItem index={4} text="Fechamentos" />
            <BulletItem index={5} text="Recebimento" />
            <BulletItem index={7} text="Recepção" />
            <BulletItem index={8} text="Organização" />
            <BulletItem index={9} text="Atendimento" />
            <BulletItem index={10} text="Ambiente" />
            <BulletItem index={11} text="Estrutura" />
            <BulletItem index={12} text="Processo" />
            <BulletItem index={13} text="Treinamento" />
            <BulletItem index={14} text="Vendas" />
          </ul>
        </div>
      </div>
    </div>
  );
}
