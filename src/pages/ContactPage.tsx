import { motion } from 'motion/react';

export function ContactPage() {
  return (
    <div className="pt-24 pb-20">
      <section className="py-12 px-6 relative overflow-hidden cursor-default">
         <div className="absolute bottom-0 right-1/4 w-[600px] h-[300px] bg-brand-600/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
         
         <motion.div 
           initial={{ opacity: 0, scale: 0.95, y: 30 }}
           whileInView={{ opacity: 1, scale: 1, y: 0 }}
           viewport={{ once: false, margin: "-50px" }}
           transition={{ duration: 0.8 }}
           className="max-w-4xl mx-auto glass-panel rounded-3xl p-8 md:p-16 relative z-10 shadow-2xl border-white/10 text-center md:text-left flex flex-col md:flex-row gap-12 items-center"
         >
            <div className="flex-1">
              <span className="uppercase tracking-[0.2em] text-brand-400 font-medium text-sm mb-4 block">Ready to start?</span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">Let's Create Together</h1>
              <p className="text-gray-400 font-light mb-8 max-w-md">
                Get in touch to discuss your next big project. We offer free consultations and sample runs for bulk orders.
              </p>
              
              <div className="space-y-4 text-gray-300 font-light">
                <div className="flex items-center justify-center md:justify-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                    <span className="text-brand-400">@</span>
                  </div>
                  <span>hello@eitexilsprints.com</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                    <span className="text-brand-400">#</span>
                  </div>
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-auto bg-[#090B14] p-8 rounded-2xl border border-white/5 shadow-inner">
               <form className="flex flex-col gap-4 w-full md:w-80">
                  <input type="text" placeholder="Your Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-500 transition-colors" />
                  <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-500 transition-colors" />
                  <textarea placeholder="Tell us about your project" rows={3} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-500 transition-colors resize-none" />
                  <button type="button" className="w-full bg-gradient-to-r from-brand-600 to-brand-500 text-white font-medium py-3 rounded-xl hover:from-brand-500 hover:to-brand-400 transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)] mt-2">
                    Send Message
                  </button>
               </form>
            </div>
         </motion.div>
      </section>
    </div>
  );
}
