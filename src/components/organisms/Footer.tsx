"use client"

import { contact, contactText, email, footer, phone, place, quickLinks, quickLinksHistory, quickLinksTrend, title } from "@/constants/homeText";
import ButtonSocialMedia from "../molecules/ButtonSocialMedia";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faEnvelope, faMapLocation, faMobilePhone, faPhone, faPhoneSquareAlt, faVoicemail } from "@fortawesome/free-solid-svg-icons";


export default function Footer() {
    return (
        <section className="w-full bg-[#052E16] flex justify-center items-center flex-col overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[60vw] py-24  text-[var(--mint-fresh)]">
                <div className="flex flex-col gap-4">
                    <p className="text-[25px] font-bold ">{title}</p>
                    <p className="text-[#BBF7D0] font-light ">{contactText}</p>
                    <div className="flex gap-3">
                        <ButtonSocialMedia 
                            icon="instagram" 
                            url="https://www.instagram.com/soyynani" 
                            className="hover:bg-pink-700"
                        />
                        <ButtonSocialMedia 
                            icon="tiktok" 
                            url="https://www.tiktok.com/@soyynaniii"
                            className="hover:bg-gray-900" 
                        />
                        <ButtonSocialMedia 
                            icon="linkedin" 
                            url="https://www.linkedin.com/in/laura-daniela-l%C3%B3pez-jim%C3%A9nez/"
                            className=" hover:bg-blue-700" 
                        />
                        <ButtonSocialMedia 
                            icon="github" 
                            url="https://github.com/SoyNani"
                            className="hover:bg-gray-900"
                            iconClass="text-white"
                        />
                        
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-[18px] font-bold ">{contact}</p>
                    <div className="flex flex-col gap-4 font-light">
                        <div className="flex gap-3 items-center">
                            <FontAwesomeIcon icon={faEnvelope} className="h-3 w-3 text-[#4ADE80]"/>
                            <p className="text-[#BBF7D0]">{email}</p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <FontAwesomeIcon icon={faPhone} className="h-3 w-3 text-[#4ADE80]" />
                            <p className="text-[#BBF7D0]">{phone}</p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <FontAwesomeIcon icon={faMapLocation} className="h-3 w-3 text-[#4ADE80]"/>
                            <p className="text-[#BBF7D0]">{place}</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 font-light">
                    <p className="text-[18px] font-bold ">{quickLinks}</p>
                    <a href="https://viajes.nationalgeographic.com.es/a/destinos-mas-populares_11415" className="text-[#BBF7D0]">{quickLinksTrend}</a>
                    <a href="https://viajes.nationalgeographic.com.es/a/25-viajeros-mas-grandes-historia_11473" className="text-[#BBF7D0]">{quickLinksHistory}</a>
                </div>
            </div>
            <p className="text-[#4ADE80] font-extralight mb-5 text-[15px]">{footer}</p>
        </section>
    )
}