import { PROFILE_CONTENT } from "../constants";
import { fadeIn } from "../constants/variants";
import { motion } from "framer-motion";
import TechStack from "../components/TechStack";

const About = () => {

    return (
        <div className="pt-5 lg:pt-10 lg:pb-10">
            <div className="flex flex-wrap">

                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col item-center lg:item-start">
                        <motion.h1 
                            variants={fadeIn('right', 0)}
                            initial="hidden"
                            whileInView="visible" 
                            viewport={{once: false, amount: 0}}                           
                            className="mt-8 pb-8 text-6xl font-thin tracking-tight sm:mt-12 sm:text-5xl lg:mt-16 lg:text-7xl text-center lg:text-left">Hello World, <br /> I'm John!
                        </motion.h1>
                        <div className="w-35 h-1 bg-yellow-400 sm:w-43 sm:h-1 mx-auto mb-6 block lg:hidden"></div>
                        <motion.p 
                            variants={fadeIn('right', 0.3)}
                            initial="hidden"
                            whileInView="visible" 
                            viewport={{once: false, amount: 0}}
                            className="my-3 max-w-xl font-light tracking-tighter sm:mb-20 md:ml-17 lg:ml-0 text-center md:text-center lg:text-left">{PROFILE_CONTENT}
                        </motion.p>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 lg:p-8">    
                    <motion.div 
                        variants={fadeIn('left', 0.5)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: false, amount: 0}}
                        className="lg:bg-neutral-900 rounded-2xl lg:border-4 border-neutral-700 lg:pl-10 lg:pr-10 pb-10">
                        <TechStack />
                    </motion.div>
                </div>

            </div>
        </div>
    );
}

export default About;