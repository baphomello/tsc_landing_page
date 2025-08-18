import Image from 'next/image';

type NotificationPopupProps = {
  text: string;
};

export default function NotificationPopup({ text }: NotificationPopupProps) {
  return (
    <div className="pt-1 pb-2 px-2 w-65 bg-gray-500/70 rounded-md scale-50 select-none text-white">
      <div className="w-full text-right opacity-50">
        <span className="scale-50 text-sm select-none">Agora</span>
      </div>
      <div className="flex items-center justify-center gap-3">
        <div className="bg-green-500 p-2 rounded-md">
          <Image
            src="/piggy.svg"
            alt="PiggyBank"
            width={64}
            height={64}
            style={{ filter: 'invert(100%)' }}
          />
        </div>
        <div className="text-sm">{text}</div>
      </div>
    </div>
  );
}
