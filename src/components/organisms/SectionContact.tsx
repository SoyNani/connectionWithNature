import { contactSection, contactSectionSubtitle } from "@/constants/homeText";
import LandingTitle from "../atoms/LandingTitle";
import { SendEmail } from "../molecules/SendEmail";

export default function SectionContact(){
    return(
        <section className="min-h-screen w-full bg-[url('/sectionContact.svg')] bg-cover bg-no-repeat flex justify-center items-center">
            <div className="flex justify-center items-center h-full flex-col gap-8">
                <div className="flex flex-col items-center justify-center  text-white text-center">
                    <LandingTitle>{contactSection}</LandingTitle>
                    <p className="font-normal w-[45vw] mt-2 text-center text-[var(--frosted-mint)]">{contactSectionSubtitle}</p>
                </div>
                <div className="w-[35vw] ">
                    <SendEmail />
                </div>
            </div>
        </section>
    )
}