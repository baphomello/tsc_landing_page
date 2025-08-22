'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type AnimatedElementProps = {
  children: ReactNode;
  delay?: number;
};

export default function AnimatedElement({ children, delay = 0 }: AnimatedElementProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
