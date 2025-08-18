'use client';

import Image from 'next/image';
import NotificationPopup from '@/components/hero/notificationPopup';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Self() {
  const { scrollY } = useScroll(); // captura o scroll da página
  const paddingTop = useTransform(scrollY, [0, 500], [48, 16]);

  return (
    <div className="relative w-max mx-auto ml-[-8] lg:ml-[-32]">
      <div className="absolute top-0 left-0 w-full flex flex-col items-center">
        <motion.div
          style={{ paddingTop }}
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="pl-50 z-20"
        >
          <NotificationPopup text="Sua clínica atendeu 17 clientes a mais do que na semana anterior." />
        </motion.div>
        <motion.div
          style={{ paddingTop }}
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="pr-50 z-40"
        >
          <NotificationPopup text="Essa semana seu faturamento aumentou em 31% em relação a semana anterior." />
        </motion.div>
      </div>
      <Image
        className="mx-auto relative z-30"
        src="/photo001.webp"
        alt="Tanize Photo 001"
        width={340}
        height={340}
      />
    </div>
  );
}
