"use client"

import { Subtitle } from "../atoms/SubTitle";
import { Title } from "../atoms/Title";
import { homeTitle, homeSubtitle, homeTitleHighlight } from "../../constants/homeText";
import { Button } from "../ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default function HomePage() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  return(
    <motion.section 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="h-screen w-full bg-[url('/fondo.svg')] bg-cover flex justify-center items-center overflow-hidden">
        <motion.div className="flex justify-center items-center h-full">
          <motion.div 
            variants={containerVariants}
            className="flex flex-col items-center justify-center w-[60vw] gap-8 text-center">
            <motion.div variants={itemVariants}>
              <Title className="">
                {homeTitle}
                <span className="text-[#86EFAC] whitespace-nowrap">{homeTitleHighlight}</span>
              </Title>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Subtitle className="mt-8">{homeSubtitle}</Subtitle>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Button variant="forest">
                Comienza tu viaje
              </Button>
            </motion.div>
            <motion.div 
              variants={itemVariants}
              className="mt-[40px]"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}>
              <FontAwesomeIcon icon={faArrowDown} className="h-8 w-8 text-white"/>
            </motion.div>
          </motion.div>
        </motion.div>
    </motion.section>
  )
}