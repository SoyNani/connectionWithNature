import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface CommentsCardProps {
  imageUrl: string;
  location?: string;
  title: string;
  description: string;
  date?: string;
  buttonText?: string;
  imageStart?: string;
  person?: string;
  personName?: string;
  personPlace?: string;
}

export function CommentsCard({
  imageUrl,
  location = "Noruega",
  title,
  description,
  date,
  buttonText = "Leer más",
  imageStart,
  person,
  personName,
  personPlace
}: CommentsCardProps) {
    
  return (
    <Card className="overflow-hidden p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-none">
      <div className="rounded-t-lg ">
        <div className="top-4 left-4 flex flex-col items-start gap-2 rounded-full px-3 py-1 text-white text-sm">
          <img src={imageUrl} alt="Viñetas" />
          <img src={imageStart} alt="Puntuación con estrellas" />
        </div>
      </div>
      <CardContent>
        <p className="text-[var(--deep-forest)]">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="flex items-center gap-5"> 
          <img src={person} alt="Foto de una persona" />
          <div className="flex flex-col">
            <p className="font-bold text-[var(--deep-forest)] ">{personName}</p>
            <p className="font-light text-[var(--primary-forest)] ">{personPlace}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}