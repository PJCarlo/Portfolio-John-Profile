import { desktopAnimation, mobileAnimation } from "../constants/device";
import { motion } from "framer-motion";
import { TECH_STACK } from "../constants/tech";
import useIsMobile from "../hooks/useIsMobile";

export default function TechStackCard() {
  const isMobile = useIsMobile();  
  return (
    <motion.div
      variants={isMobile ? desktopAnimation(isMobile, 0.5) : mobileAnimation(!isMobile, 0.5)}
      initial="hidden"
      whileInView="visible"
      viewport={{once: false, amount: 0}}
      className="rounded-2xl border-4 border-neutral-700 bg-neutral-900 p-10 ">
        
      <h2 className="text-center text-2xl md:text-3xl font-semibold mb-10 text-slate-100">Technologies I use most often</h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 place-items-center">
        {TECH_STACK.map((tech, index) => {
          const Icon = tech.icons;
          return (
            <motion.div
              key={index}
              variants={isMobile ? desktopAnimation(isMobile, 0.8 + index * 0.1) : mobileAnimation(!isMobile, 0.8 + index * 0.1)}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.2 }}
              viewport={{once: false, amount: 0}}
              className="flex flex-col items-center p-4 rounded-2xl border-4 border-neutral-700 bg-neutral-800 hover:bg-neutral-700 transition-all">
                <Icon className={`text-5xl ${tech.color}`} />
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
