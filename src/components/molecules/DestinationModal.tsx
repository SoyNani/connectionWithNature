// components/molecules/DestinationModal.tsx
"use client"

import { X } from "lucide-react"
import Image from "next/image"
import { Button } from "../ui/button"
import { useEffect } from "react"

interface DestinationModalProps {
    isOpen: boolean
    onClose: () => void
    title: string
    country: string
    description: string
    imageUrl: string
}

export function DestinationModal({
    isOpen,
    onClose,
    title,
    country,
    description,
    imageUrl
}: DestinationModalProps) {
    
    const destinationDetails: Record<string, { longDescription: string; highlights: string[] }> = {
        "Fiordos Noruegos": {
            longDescription: "Los fiordos noruegos, esculpidos por glaciares durante milenios, ofrecen un espectáculo natural donde montañas vertiginosas se sumergen en aguas cristalinas. Majestuosas cascadas caen desde imponentes acantilados hacia aguas profundas, creando un paisaje sonoro de agua en movimiento.",
            highlights: [
                "Navegación entre paredes rocosas de hasta 1,400 metros",
                "Avistamiento de focas y águilas marinas",
                "Pueblos pesqueros con casas de colores",
                "Posibilidad de ver auroras boreales en invierno"
            ]
        },
        "Gran Cañón": {
            longDescription: "Esta garganta de 446 km de longitud revela en sus estratos rocosos 2,000 millones de años de historia geológica. Antiguas capas de tierra cuentan historias que abarcan eras geológicas completas, mostrando el poder de la erosión.",
            highlights: [
                "Mirador Skywalk con piso de cristal",
                "Excursiones en mula por senderos históricos",
                "Rafting en aguas bravas por el río Colorado",
                "Caminatas por el borde con vistas panorámicas"
            ]
        },
        "Parque Nacional Tayrona": {
            longDescription: "Donde la selva húmeda tropical besa el mar Caribe, creando playas de arena dorada enmarcadas por cocoteros y formaciones rocosas. La exuberante selva tropical se fusiona con maravillosas playas caribeñas en un paraíso de biodiversidad única.",
            highlights: [
                "Caminatas por senderos entre ruinas arqueológicas",
                "Snorkel en arrecifes de coral poco profundos",
                "Avistamiento de tortugas marinas",
                "Noches en hamacas frente al mar"
            ]
        },
        "Alpes Suizos": {
            longDescription: "Un paisaje de cuento con picos dentados cubiertos de nieves eternas, praderas alfombradas de flores silvestres y lagos de un azul intenso. Picos nevados perforan el cielo sobre valles color esmeralda salpicados de flores alpinas y lagos cristalinos.",
            highlights: [
                "Teleférico al Jungfraujoch (3,454 m)",
                "Chocolaterías tradicionales en Zermatt",
                "Senderismo por rutas de flores alpinas",
                "Deportes de invierno en St. Moritz"
            ]
        },
        "Gran Barrera de Coral": {
            longDescription: "El sistema coralino más grande del mundo alberga un arcoiris submarino: 400 tipos de coral, 1,500 especies de peces y tortugas centenarias. Sumérgete en un paraíso submarino donde vibrantes jardines de coral albergan una increíble diversidad de vida marina.",
            highlights: [
                "Buceo nocturno cuando los corales florecen",
                "Snorkel con tortugas verdes gigantes",
                "Islas Whitsunday con playas de sílice puro",
                "Observación de ballenas (julio-noviembre)"
            ]
        },
        "Selva Amazónica": {
            longDescription: "La mayor reserva de biodiversidad terrestre, donde cada hectárea contiene hasta 400 especies arbóreas. Los pulmones de nuestro planeta vibran con vida en esta vasta catedral verde de árboles centenarios y exótica fauna que incluye jaguares, guacamayos y delfines rosados.",
            highlights: [
                "Expediciones en canoa por ríos de aguas negras",
                "Avistamiento de delfines rosados",
                "Comunidades indígenas con tradiciones ancestrales",
                "Pasarelas en el dosel a 40 metros de altura"
            ]
        }
    }

    const details = destinationDetails[title] || {
        longDescription: description,
        highlights: []
    }

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);
    
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#14532D]/25 backdrop-blur-sm p-4">
            <div className="relative w-full max-w-4xl bg-white rounded-xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-gray-100 transition-colors"
                    aria-label="Cerrar modal"
                >
                    <X className="w-6 h-6 text-gray-800" />
                </button>

                <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative h-64 md:h-full">
                        <Image
                            src={imageUrl}
                            alt={title}
                            fill
                            className="object-cover"
                            quality={100}
                        />
                    </div>

                    <div className="p-6 md:p-8">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-sm font-medium px-3 py-1 bg-[var(--primary-forest)] text-white rounded-full">
                                {country}
                            </span>
                        </div>

                        <h2 className="text-3xl font-bold text-[var(--deep-forest)] mb-4">
                            {title}
                        </h2>

                        <p className="text-base text-[#14532D;] mb-6">
                            {details.longDescription}
                        </p>

                        {details.highlights.length > 0 && (
                            <div className="mb-8">
                                <h3 className="text-xl font-semibold mb-3 text-[var(--primary-forest)]">
                                    🌟 Lo más destacado
                                </h3>
                                <ul className="space-y-2">
                                    {details.highlights.map((highlight, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="text-[var(--mint-fresh)] mr-2">•</span>
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <Button variant="orange" className="w-full">
                            Ver paquetes turísticos
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}