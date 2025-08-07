import { EXPERIENCES, PROJECTS } from "../constants"
import { fadeIn } from "../constants/variants";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className="border-b border-neutral-900 pb-10 lg:pb-18">
      <motion.h1 
        variants={fadeIn('down', 0)}
        initial="hidden"
        whileInView="visible"
        viewport={{once: false, amount: 0}}
        className="my-20 text-center text-4xl">Experience
      </motion.h1>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <motion.p 
                variants={fadeIn('right', 0.3 + index * 0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{once: false, amount: 0}}
                className="mb-2 text-sm text-neutral-400">{experience.year}
              </motion.p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <motion.h6 
                variants={fadeIn('left', 0.4 + index * 0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{once: false, amount: 0}}
                className="mb-2 font-semibold">{experience.role} -{" "}
                  <span className="text-sm text-purple-100">{experience.company}</span>
              </motion.h6>
              <motion.p 
                variants={fadeIn('left', 0.5 + index * 0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{once: false, amount: 0}}
                className="mb-4 text-sm text-neutral-400">{experience.description}
              </motion.p>
              {experience.technology.map((tech, index) => (
                <motion.span 
                  variants={fadeIn('down', 0.6 + index * 0.1)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{once: false, amount: 0}}
                  key={index} 
                  className="mr-2 mt-2 inline-block rounded-full bg-neutral-800 px-2 py-1 text-xs text-purple-200">
                    {tech}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <motion.h1 
        variants={fadeIn('down', 0)}
        initial="hidden"
        whileInView="visible"
        viewport={{once: false, amount: 0}}
        className="pt-20 my-20 text-center text-4xl">Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="pb-25 flex flex-wrap lg:justify-center">
            <motion.div 
              variants={fadeIn('right', 0.3 + index * 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{once: false, amount: 0}}
              className="w-full lg:w-1/4">
                <p className="mb-2 text-sm text-neutral-400">{project.date}</p>
            </motion.div>
            <div className="w-full max-w-xl lg:w-3/4">
              <motion.h6 
                variants={fadeIn('left', 0.4 + index * 0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{once: false, amount: 0}}
                className="mb-2 font-semibold">{project.title}
              </motion.h6>
              <motion.p 
                variants={fadeIn('left', 0.5 + index * 0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{once: false, amount: 0}}
                className="mb-4 text-sm text-neutral-400">{project.description}
              </motion.p>
              {project.technologies.map((tech, index) => (
                <motion.span
                  variants={fadeIn('down', 0.6 + index * 0.1)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{once: false, amount: 0}}
                  key={index} 
                  className="mr-2 mt-2 inline-block rounded-full bg-neutral-800 px-2 py-1 text-xs text-purple-200">
                  {tech}
                </motion.span>
              ))}
              {project.link && (
                <motion.a 
                  variants={fadeIn('left', 0.7 + index * 0.1)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{once: false, amount: 0}}
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mr-2 mt-4 inline-block rounded-full bg-neutral-800 text-blue-500 px-2 py-1 text-xs">
                    View Project
                </motion.a>
              )}
            </div>
          </div>
        ))}  
      </div>
    </div>
  )
}

export default Skills
