import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function PortfolioPage() {
  return (
    <div className="pt-24 pb-20">
      <section className="py-12 px-6 max-w-7xl mx-auto relative cursor-default">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="uppercase tracking-[0.2em] text-brand-400 font-medium text-sm mb-4 block">Our Work</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white">Featured Projects</h1>
          </motion.div>
          <motion.button 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white hover:text-brand-400 transition-colors flex items-center gap-2 font-medium"
          >
            Load More <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
          {[
            { img: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=800", title: "Athletic Wear Series", cat: "Sublimation" },
            { img: "https://images.unsplash.com/photo-1583332463428-ccceb3dff6e1?auto=format&fit=crop&q=80&w=800", title: "Corporate Branding", cat: "Embroidery" },
            { img: "https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&q=80&w=800", title: "Urban Streetwear Collection", cat: "DTF Print" },
            { img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=800", title: "Custom Graphic Tees", cat: "DTF Print" },
            { img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=800", title: "Premium Cotton Selection", cat: "Sourcing" },
            { img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=800", title: "Vibrant Patterns", cat: "Sublimation" },
          ].map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-2xl overflow-hidden glass-panel aspect-square cursor-pointer"
            >
              <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090b14] via-black/20 to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs font-bold tracking-widest text-brand-400 uppercase mb-2 block">{item.cat}</span>
                <h3 className="text-xl font-display font-medium text-white">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
