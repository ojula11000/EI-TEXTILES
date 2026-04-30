import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export function ServicesPage() {
  return (
    <div className="pt-24 pb-20">
      <section className="py-12 px-6 max-w-7xl mx-auto relative cursor-default">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-brand-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative z-10"
        >
          <span className="uppercase tracking-[0.2em] text-brand-400 font-medium text-sm mb-4 block">What We Do</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white">Our Core Services</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
            We provide end-to-end textile design and printing solutions, ensuring your products stand out with unmatched quality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {[
            {
              title: "Sublimation Printing",
              desc: "Vibrant, all-over prints that never fade. Ideal for activewear, jerseys, and custom bold patterns.",
              features: ["Edge-to-edge printing", "Breathable fabric finish", "Unlimited color options"]
            },
            {
              title: "Direct-to-Film (DTF)",
              desc: "High-definition, durable prints on virtually any fabric type, including cotton, blends, and dark colors.",
              features: ["Crisp detail", "High washability", "Versatile fabric support"]
            },
            {
              title: "Custom Embroidery",
              desc: "Premium, textured branding for corporate wear, hats, and high-end apparel lines.",
              features: ["3D Puff options", "Durable threads", "Professional look"]
            },
            {
              title: "Textile Sourcing",
              desc: "We source the highest quality raw materials and finished textiles to match your exact specifications.",
              features: ["Sustainable options", "Bulk pricing", "Quality assurance"]
            }
          ].map((service, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-panel p-8 rounded-2xl border-white/10 hover:border-brand-500/30 transition-colors group"
            >
              <h3 className="text-2xl font-bold font-display text-white mb-3 group-hover:text-brand-400 transition-colors">{service.title}</h3>
              <p className="text-gray-400 mb-6 font-light leading-relaxed">{service.desc}</p>
              <ul className="space-y-3">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-brand-500 mr-3 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
