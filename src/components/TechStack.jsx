import { desktopAnimation, mobileAnimation } from "../constants/device";
import { TECH_STACK } from "../constants/tech";
import { motion } from "framer-motion";
import useIsMobile from "../hooks/useIsMobile";

const TechStack = () => {
  const isMobile = useIsMobile();

  return (
    <div>
        <motion.h1 
            variants={isMobile ? mobileAnimation(isMobile, 0.5) : desktopAnimation(!isMobile, 0.5)} 
            initial="hidden"
            whileInView="visible"
            viewport={{once: false, amount: 0}}
            className="my-13 text-center text-4xl">Technologies I use most often
        </motion.h1>
        <motion.div
            variants={isMobile ? mobileAnimation(isMobile, 0.8) : desktopAnimation(!isMobile, 0.8)}
            initial="hidden"
            whileInView="visible"
            viewport={{once: false, amount: 0}}
            className="flex flex-wrap item-center justify-center gap-4">
            {TECH_STACK.map((tech, index) => {
                const Icon = tech.icons;
                return (
                    <motion.div
                        key={index}
                        variants={isMobile ? desktopAnimation(isMobile, 0.8 + index * 0.1) : mobileAnimation(!isMobile, 0.8 + index * 0.1)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: false, amount: 0}}
                        className="rounded-2xl p-4 duration-50 transition-all border-4 border-neutral-700 bg-neutral-800 hover:bg-neutral-700 hover:scale-110">
                            <Icon className={`text-4xl ${tech.color}`} />
                    </motion.div>
                );
            })}
        </motion.div>
    </div>
  )
}

export default TechStack
