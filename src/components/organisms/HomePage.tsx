import { Subtitle } from "../atoms/SubTitle";
import { Title } from "../atoms/Title";
import { homeTitle, homeSubtitle, homeTitleHighlight } from "../../constants/homeText";
import { Button } from "../ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";


export default function HomePage() {
  return(
    <section className="min-h-screen w-full bg-[url('/fondo.svg')] bg-cover mb-8 flex justify-center items-center">
        <div className="flex justify-center items-center h-full">
          <div className="flex flex-col items-center justify-center w-[60vw] gap-8 text-center">
            <Title className="">
              {homeTitle}
              <span className="text-[#86EFAC] whitespace-nowrap">{homeTitleHighlight}</span>
            </Title>
            <Subtitle className="mt-8">{homeSubtitle}</Subtitle>
            <Button
              variant="forest"
            >Comienza tu viaje</Button>
            <div className="animate-bounce mt-[40px]">
              <FontAwesomeIcon icon={faArrowDown} className="h-8 w-8 text-white"/>
            </div>
          </div>
          
        </div>
    </section>
  )
}