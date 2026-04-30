import { motion } from 'motion/react';

export function FeatureCard({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center group hover:bg-[#101423]/80 transition-colors cursor-default"
    >
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-b from-[#1E293B] to-[#0F172A] border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-inner">
        {icon}
      </div>
      <h3 className="text-lg font-semibold font-display mb-2 text-gray-100">{title}</h3>
      <p className="text-sm text-gray-400 font-light leading-relaxed">{description}</p>
    </motion.div>
  );
}
