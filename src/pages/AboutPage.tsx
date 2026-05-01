import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import { useEffect } from 'react';

function AnimatedCounter({ target, suffix = "" }: { target: number, suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const display = useTransform(rounded, (latest) => `${latest}${suffix}`);

  useEffect(() => {
    const controls = animate(count, target, {
      duration: 3,
      ease: "easeOut",
      repeat: Infinity,
      repeatDelay: 1.5,
    });
    return () => controls.stop();
  }, [count, target]);

  return <motion.span>{display}</motion.span>;
}

export function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      <section className="py-12 px-6 relative cursor-default">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-600 to-indigo-600 rounded-3xl blur-2xl opacity-20" />
            <img 
              src="https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?auto=format&fit=crop&q=80&w=1000" 
              alt="Textile Printing Process" 
              className="relative rounded-3xl border border-white/10 shadow-2xl glass-panel object-cover h-[500px] w-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="uppercase tracking-[0.2em] text-brand-400 font-medium text-sm mb-4 block">About Us</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">Crafting Excellence Since 2018</h1>
            <p className="text-gray-400 text-lg font-light mb-6 leading-relaxed">
              EI Textils & Prints was born out of a passion for high-quality fabrics and vibrant, enduring designs. We bridge the gap between creative vision and physical reality by offering state-of-the-art printing technologies and premium materials.
            </p>
            <p className="text-gray-400 text-lg font-light mb-8 leading-relaxed">
              Whether you are an emerging fashion brand, a sports team needing durable performance wear, or a corporate entity looking for premium merchandise, our dedicated team works closely with you to guarantee exceptional results.
            </p>
            <div className="grid grid-cols-2 gap-6 pb-6 border-b border-white/10">
              <div>
                <h4 className="text-4xl font-display font-bold text-brand-400 mb-1">
                  <AnimatedCounter target={500} suffix="+" />
                </h4>
                <span className="text-sm text-gray-400 tracking-wider">PROJECTS DONE</span>
              </div>
              <div>
                <h4 className="text-4xl font-display font-bold text-brand-400 mb-1">
                  <AnimatedCounter target={99} suffix="%" />
                </h4>
                <span className="text-sm text-gray-400 tracking-wider">HAPPY CLIENTS</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
