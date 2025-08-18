import Image from 'next/image';

export default function Header() {
  return (
    <div className="container mx-auto px-4 py-4 w-full">
      <Image src="/tsclogo.svg" alt="TSC Logo" width={80} height={40} />
    </div>
  );
}
