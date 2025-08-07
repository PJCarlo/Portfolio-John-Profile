import profilePhoto from "../assets/JohnCarloPantoniaProfile.png";
import CV_File from "../assets/file/johncarlopantoniacv.pdf";
import { Download } from 'lucide-react';
import { fadeIn } from "../constants/variants";
import { motion } from "framer-motion";

const Profile = () => {

  const downloadCV = () => {
    const url = CV_File;
    const link = document.createElement('a');
    link.href = url;
    link.download = 'John-Carlo-Pantonia-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="pb-10 pt-35 lg:mb-10">
    
      <div className="flex flex-wrap">
        <div className="relative mx-auto w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56">
          {/* Pulse Border */}
          <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-400 via-blue-500 to-indigo-600 p-1 animate-pulse"></div>
          <div className="absolute inset-1 rounded-full bg-neutral-800 flex items-center justify-center">
            {/* Inner Circle */}
            <div className="w-36 h-36 sm:w-44 sm:h-44 lg:w-52 lg:h-52 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-6xl font-bold text-gray-600">
              <img src={profilePhoto} alt="John Carlo Pantonia" className="rounded-full w-full h-full object-cover"/>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col flex items-center">
        <motion.h1 
          variants={fadeIn('down', 0)}
          initial="hidden"
          whileInView="visible"
          viewport={{once: false, amount: 0}}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-center pt-5 md:pt-8 lg:pt-10">John Carlo Pantonia
        </motion.h1>
        <motion.span 
          variants={fadeIn('down', 0.3)}
          initial="hidden"
          whileInView="visible" 
          viewport={{once: false, amount: 0}}
          className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-2xl sm:text-2xl md:text-3xl lg:text-4xl bg-clip-text tracking-tight text-transparent pt-2 lg:pt-3">Software Developer
        </motion.span>
      </div>

      {/* CV */}
      <div className="flex flex-col sm:flex-row pt-15 lg:pt-18 gap-4 justify-center items-center">
        <button 
          onClick={downloadCV} 
          className="flex justify-center items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-300">
          <Download className="w-5 h-5 sm:w-4 sm:h-4 lg:w-6 lg:h-6" />
            Download CV
        </button>
      </div>  
    </div>
  );
};

export default Profile;
