import { Scissors, Printer, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FeatureCard } from '../components/FeatureCard';
import { useState, useEffect } from 'react';

export function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    "/slide1.jpg", 
    "/slide2.jpg", 
    "/slide3.jpg",
    "/slide4.jpg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "0px" }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-6"
      >
        <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-brand-500" />
        <span className="uppercase tracking-[0.2em] text-brand-400 font-medium text-sm">Professional</span>
        <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-brand-500" />
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "0px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-display text-5xl md:text-7xl font-bold leading-[1.1] mb-8 max-w-4xl"
      >
        Premium Textile<br/>
        & <span className="text-gradient drop-shadow-sm">Print Design</span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "0px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-gray-400 text-lg md:text-xl max-w-2xl mb-12"
      >
        Modern fabrics and high-quality printing solutions for startups, companies, and fashion forward-thinking brands.
      </motion.p>

      {/* Mockup / Image Area */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, margin: "0px" }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="w-full max-w-5xl relative rounded-2xl overflow-hidden glass-panel aspect-video md:aspect-[21/9] flex items-center justify-center bg-black/40 ring-1 ring-white/10 shadow-2xl shadow-brand-500/10"
      >
        <AnimatePresence mode="popLayout">
          <motion.img 
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            src={images[currentImageIndex]} 
            alt={`Editing Setup ${currentImageIndex + 1}`} 
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
          />
        </AnimatePresence>
        
        <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left md:ml-12 p-8 glass-panel rounded-2xl max-w-md mx-4 bg-[#090B14]/80 supports-[backdrop-filter]:bg-[#090B14]/40">
          <h3 className="text-3xl font-display font-medium leading-tight mb-4 text-white">We Create <br/> <span className="text-brand-400 font-semibold">Extraordinary</span> <br/> Fabrics</h3>
          <p className="text-sm text-gray-400 mb-6 font-light">Transforming ideas into powerful physical products that captivate, engage, and drive results.</p>
          <div className="flex gap-4">
            <button className="bg-brand-600 hover:bg-brand-500 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors">
              View Our Work →
            </button>
            <button className="px-5 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-white transition-colors border border-white/10 hover:bg-white/5">
              Start a Project
            </button>
          </div>
        </div>
      </motion.div>

      {/* Feature Cards Bottom Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mt-12 md:-mt-16 z-20 relative px-4">
        <FeatureCard 
          icon={<Scissors className="w-6 h-6 text-brand-400" />}
          title="Quality Fabrics"
          description="Premium sourced materials built to last and impress your clients"
          delay={0.4}
          link="/services"
        />
        <FeatureCard 
          icon={<Printer className="w-6 h-6 text-brand-400" />}
          title="Custom Printing"
          description="High-fidelity prints using state-of-the-art sublimation and DTF"
          delay={0.5}
          link="/services"
        />
        <FeatureCard 
          icon={<ShoppingCart className="w-6 h-6 text-brand-400" />}
          title="Bulk & Wholesale"
          description="Scale your retail or corporate merchandising with seamless fulfillment"
          delay={0.6}
          link="/services"
        />
      </div>
    </main>
  );
}
