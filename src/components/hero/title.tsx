import Image from 'next/image';
import Link from 'next/link';

export default function Title() {
  return (
    <div className="flex flex-col space-y-6 lg:col-span-2">
      <h1 className="text-5xl font-semibold">
        Maximize o <span className="text-[#e6c67c]">Lucro e a Eficiência</span>{' '}
        do Seu Consultório Odontológico
      </h1>
      <p className="text-xl">
        Estratégias comprovadas de gestão financeira e operacional para
        transformar sua clínica odontológica em um negócio mais rentável e
        organizado.
      </p>
      <Link
        href={'#'}
        className="bg-green-500 px-6 py-4 rounded-lg flex items-center justify-center w-fit gap-2"
      >
        <Image
          src="/whatsapp.svg"
          alt="WhatsApp"
          width={32}
          height={32}
          style={{ filter: 'invert(100%)' }}
        />
        <span className="text-lg font-semibold">Contato via WhatsApp</span>
      </Link>
    </div>
  );
}
