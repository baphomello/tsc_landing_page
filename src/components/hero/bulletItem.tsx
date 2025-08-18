import Image from 'next/image';

type BulletItemProps = {
  text: string;
};

export default function BulletItem({ text }: BulletItemProps) {
  return (
    <li className="flex items-start gap-2">
      <Image src="/files.svg" alt="BulletPoint" width={20} height={20} />
      <span>{text}</span>
    </li>
  );
}
