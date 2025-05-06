'use client';

import { motion } from 'framer-motion';

export default function Card({ title, description, icon }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className="bg-gradient-to-br from-purple-800/60 to-black p-6 rounded-2xl shadow-xl border border-purple-700 text-white space-y-4"
    >
      <div className="text-3xl">{icon}</div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm text-gray-300">{description}</p>
    </motion.div>
  );
}
