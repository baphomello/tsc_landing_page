import Image from 'next/image';
import AnimatedText from './animatedText';

type BulletItemProps = {
  index: number;
  text: string;
};

export default function BulletItem({ index, text }: BulletItemProps) {
  return (
    <AnimatedText delay={index * 0.2}>
      <li className="flex items-start gap-2">
        <Image src="/files.svg" alt="BulletPoint" width={20} height={20} />
        <span>{text}</span>
      </li>
    </AnimatedText>
  );
}
