import { featuredDestinations, featuredDestinationsSubTitle } from "@/constants/homeText";
import LandingTitle from "../atoms/LandingTitle";
import { NorwayCard } from "../molecules/NorwayCard";

export default function FeaturedDestinations() {
    return (
        <section className="min-h-screen w-full bg-[var(--frosted-mint)] mb-[50px]">
            <div className="flex flex-col justify-center items-center p-20 ">
                <LandingTitle >{featuredDestinations}</LandingTitle>
                <p className="text-center font-normal w-[40vw] ">{featuredDestinationsSubTitle}</p>
            </div>
            <section className="flex justify-center items-center mb-8 flex-col gap-5">
                <div className="flex gap-5">
                    <NorwayCard 
                        imageUrl="/Image.svg"
                        location="Noruega"
                        title="Fiordos Noruegos"
                        description="Majestuosas cascadas caen desde imponentes acantilados hacia aguas cristalinas."
                    />
                    <NorwayCard 
                        imageUrl="/Image.svg"
                        location="Estados Unidos"
                        title="Gran Cañón"
                        description="Antiguas capas de tierra cuentan historias que abarcan millones de años en esta impresionante obra maestra geológica."
                    />
                </div>
                <div className="flex gap-5">
                    <NorwayCard 
                        imageUrl="/Image.svg"
                        location="Colombia"
                        title="Parque Nacional Tayrona"
                        description="Donde la exuberante selva tropical se fusiona con maravillosas playas caribeñas, creando un paraíso de biodiversidad."
                    />
                    <NorwayCard 
                        imageUrl="/Image.svg"
                        location="Suiza"
                        title="Alpes Suizos"
                        description="Picos nevados perforan el cielo sobre valles color esmeralda salpicados de flores silvestres y lagos de aguas cristalinas."
                    />
                </div>
                <div className="flex gap-5">
                    <NorwayCard 
                        imageUrl="/Image.svg"
                        location="Australia"
                        title="Gran Barrera de Coral"
                        description="Sumérgete en un paraíso submarino donde vibrantes jardines de coral albergan una increíble diversidad de vida marina."
                    />
                    <NorwayCard 
                        imageUrl="/Image.svg"
                        location="Brasil"
                        title="Selva Amazónica"
                        description="Los pulmones de nuestro planeta vibran con vida en esta vasta catedral verde de árboles centenarios y exótica fauna."
                    />
                </div>
            </section>
        </section>
    )
}