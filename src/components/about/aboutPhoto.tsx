import Image from 'next/image';

export default function AboutPhoto() {
  return (
    <div className="bg-[#e6c67c] rounded-md flex items-start shadow-md">
      <Image src="/photo003.webp" alt="PhotoAbout" width={280} height={340} />
    </div>
  );
}
