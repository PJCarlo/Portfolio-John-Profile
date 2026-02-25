import { CONTACT } from "../constants";
import { FaPhone, FaFacebook,FaInstagram, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../constants/variants";

const Connect = () => {
  return (
    <div className="pb-10 lg:pt-4 lg:pb-12">
      <motion.h1 
        variants={fadeIn('down', 0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{once: false, amount: 0}}
        className="my-10 text-center text-4xl">Connect
      </motion.h1>
      <div className="text-center tracking-tighter">  
        <div className="mb-10 lg:mb-12 flex justify-center items-center gap-3 text-white">
          <FaPhone className="cursor-pointer hover:text-green-400"/>
          <span className="text-sm px-3 py-1 border border-purple-400 rounded-full">{CONTACT.phone}</span>
        </div>
        <div className="m-5 flex justify-center items-center gap-12 sm:gap-15 text-2xl text-white">
          <a href={`https://www.facebook.com/${CONTACT.facebook}`} target="profile" rel="facebookProfile" aria-label="Facebook">
            <FaFacebook className="cursor-pointer hover:text-blue-600" />
          </a>
          <a href={`https://www.instagram.com/${CONTACT.instagram}`} target="profile" rel="instagramProfile" aria-label="Instagram">
            <FaInstagram className="cursor-pointer hover:text-pink-700" />
          </a>
          <a href={`https://mail.google.com/mail/u/0/${CONTACT.email}`} target="email" rel="directEmail" aria-label="Email">
            <FaEnvelope className="cursor-pointer hover:text-red-500" />
          </a>
          <a href={`https://www.linkedin.com/in/${CONTACT.linkedIn}`} target="connect" rel="linkedInConnect" aria-label="LinkedIn">
            <FaLinkedin className="cursor-pointer hover:text-blue-500" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Connect
