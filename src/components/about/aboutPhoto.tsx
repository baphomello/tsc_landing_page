import Image from 'next/image';

export default function AboutPhoto() {
  return (
    <div className="bg-[#e6c67c] rounded-md flex justify-end shadow-md">
      <Image
        className="shadow-md"
        src="/photo003.webp"
        alt="PhotoAbout"
        width={450}
        height={750}
      />
    </div>
  );
}
