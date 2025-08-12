"use client"

import { sectionCommentsTitle, sectionCommentSubTitle } from "@/constants/homeText";
import LandingTitle from "../atoms/LandingTitle";
import {
    Carousel,
    CarouselItem,
    CarouselContent
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import { useEffect, useRef, useState } from "react";
import { CommentsCard } from "../molecules/CommentsCard";
import { motion } from "framer-motion";

export default function CommentsSection(){
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
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
    const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }))
    const [api, setApi] = useState<any>();
    const [current, setCurrent] = useState(0);

    const comments = [
        {
          imageUrl: "/commentsInit.svg",
          title: "Fiordos Noruegos",
          imageStart: "/ContainerStartOne.svg",
          person: "/personOne.svg",
          personName: "Marcus Rodriguez",
          personPlace: "Exploró el Gran Cañón",
          description: "Cada amanecer pintaba las paredes del cañón con colores que no sabía que existían. Es una lección de humildad ser testigo de millones de años de historia de la Tierra esculpidos en piedra."
        },
        {
          imageUrl: "/commentsInit.svg",
          title: "Fiordos Noruegos",
          imageStart: "/ContainerStartTwo.svg",
          person: "/personFour.svg",
          personName: "Sofía Martínez",
          personPlace: "Visitó los fiordos noruegos",
          description: "De pie ante aquellas imponentes cascadas, me sentí verdaderamente conectado a algo más grande que yo mismo. El silencio era profundo, sólo roto por el susurro de las aguas ancestrales"
        },
        {
          imageUrl: "/commentsInit.svg",
          title: "Fiordos Noruegos",
          imageStart: "/ContainerStartTwo.svg",
          person: "/personThree.svg",
          personName: "Camilo Arestizábal",
          personPlace: "Descubrió el Parque Tayrona",
          description: "La armonía entre la selva y el océano en Tayrona es mágica. Encontré la paz caminando descalzo por playas mientras los monos aulladores llamaban desde copas color esmeralda."
        },
        {
          imageUrl: "/commentsInit.svg",
          title: "Fiordos Noruegos",
          imageStart: "/ContainerStartTwo.svg",
          person: "/personTwo.svg",
          personName: "Esteban Alvarez",
          personPlace: "Visitó los Alpes suizos",
          description: "Desde el momento en que llegué, me maravillé con la belleza de los paisajes montañosos y la tranquilidad del entorno. La gente local fue extremadamente amable y hospitalaria."
        }
    ];

    useEffect(() => {
        if(!api) return;

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        })

        return()=>{
            api.off("select"), () => {
                setCurrent(api.selectedScrollSnap());
            }                      
        }
    }, [api])
    
    return (
    <section className="bg-[var(--deep-forest)] overflow-hidden ">
      <div className="flex flex-col justify-center bg-[var(--deep-forest)] text-[var(--frosted-mint)] items-center pt-20">
        <div className="w-[45vw]"><LandingTitle>{sectionCommentsTitle}</LandingTitle></div>
        <p className="w-[45vw] text-center font-light text-[var(--frosted-mint)]">{sectionCommentSubTitle}</p>
      </div>

      <div className="flex flex-col items-center w-full px-4 py-8">
        <Carousel 
          className="w-full max-w-4xl"
          plugins={[plugin.current]}
          opts={{
            align: "center",
            loop: true,
          }}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          setApi={setApi}
        >
          <CarouselContent>
            {comments.map((comment, index) => (
              <CarouselItem key={index} className="basis-full md:basis-1/2">
                <div className="flex justify-center p-2">
                  <CommentsCard {...comment} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="flex gap-2 mt-6">
          {comments.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                api?.scrollTo(index)
                setCurrent(index)
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                current === index 
                  ? "bg-[var(--mint-fresh)] w-6" 
                  : "bg-[var(--spring-leaf)]"
              }`}
              aria-label={`Ir al comentario ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}