"use client"

import { contactSection, contactSectionSubtitle } from "@/constants/homeText";
import LandingTitle from "../atoms/LandingTitle";
import { SendEmail } from "../molecules/SendEmail";
import { motion } from "framer-motion";

export default function SectionContact(){
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                when: "beforeChildren",
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };
    return(
        <motion.section 
            id="contact-section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="min-h-screen w-full bg-[url('/sectionContact.svg')] bg-cover bg-no-repeat flex justify-center items-center overflow-hidden">
            <motion.div 
                className="flex justify-center items-center h-full flex-col gap-8">
                <motion.div 
                    variants={itemVariants}
                    className="flex flex-col items-center justify-center text-white text-center">
                    <LandingTitle>{contactSection}</LandingTitle>
                    <p className="font-normal w-[45vw] mt-2 text-center text-[var(--frosted-mint)]">{contactSectionSubtitle}</p>
                </motion.div>
                <motion.div 
                    variants={itemVariants}
                    className="w-[35vw]">
                    <SendEmail />
                </motion.div>
            </motion.div>
        </motion.section>
    )
}