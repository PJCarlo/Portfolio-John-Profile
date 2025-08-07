import { CONTACT } from "../constants"
import { FaPhone, FaFacebook, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../constants/variants";

const Connect = () => {
  return (
    <div className="pb-10 lg:pt-4 lg:pb-12">
      <motion.h1 
        variants={fadeIn('down', 0)}
        initial="hidden"
        whileInView="visible"
        viewport={{once: false, amount: 0}}
        className="my-10 text-center text-4xl">Connect
      </motion.h1>
      <div className="text-center tracking-tighter">  
        <div className="mb-10 lg:mb-12 flex justify-center items-center gap-3 text-white">
          <FaPhone className="cursor-pointer hover:text-green-400"/>
          <motion.span 
            variants={fadeIn('left', 0.1)}
            initial="hidden"
            whileInView="visible" 
            viewport={{once: false, amount: 0}}
            className="text-sm px-3 py-1 border border-purple-400 rounded-full">{CONTACT.phone}
          </motion.span>
        </div>
        <div className="m-5 flex justify-center items-center gap-12 sm:gap-15 text-2xl text-white">
          <a href={`messagemeat:${CONTACT.facebook}`} target="profile" rel="facebookProfile" aria-label="Facebook">
            <FaFacebook className="cursor-pointer hover:text-blue-600" />
          </a>
          <a href={`mailto:${CONTACT.email}`} target="email" rel="directEmail" aria-label="Email">
            <FaEnvelope className="cursor-pointer hover:text-gray-400" />
          </a>
          <a href={`connecton:${CONTACT.linkedIn}`} target="connect" rel="linkedInConnect" aria-label="LinkedIn">
            <FaLinkedin className="cursor-pointer hover:text-blue-500" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Connect
