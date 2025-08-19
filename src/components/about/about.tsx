import AboutPhoto from './aboutPhoto';

export default function About() {
  return (
    <section className="mx-auto flex w-2xl space-x-4 py-12 px-6">
      <AboutPhoto />
      <article className="space-y-2 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold">Sobre Mim</h2>
        <p>
          Iniciei minha jornada em 2013, para ajudar a organizar algumas coisas
          no consultório do meu namorado, que hoje é meu marido e pai do nosso
          filho Heitor.
        </p>
        <p>
          A Organização deu tão certo que tranquei a faculdade de engenharia de
          produção na UTFPR e passei a me dedicar ao consultório.
        </p>
        <p>
          Hoje eu ajudo dentistas a transformarem seus consultórios de dentro
          para fora
        </p>
      </article>
    </section>
  );
}
