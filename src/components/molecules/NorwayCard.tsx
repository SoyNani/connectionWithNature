import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface NorwayCardProps {
  imageUrl: string;
  location: string;
  title: string;
  description: string;
  date?: string;
  buttonText?: string;
}

export function NorwayCard({
  imageUrl,
  location = "Noruega",
  title,
  description,
  date,
  buttonText = "Leer más"
}: NorwayCardProps) {
  return (
    <Card className="max-w-md overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-none p-0">
      <div 
        className="relative h-48 bg-cover bg-center rounded-t-lg"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute top-4 left-4 flex items-center gap-2 bg-[var(--primary-forest)] rounded-full px-3 py-1 text-white text-sm">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="h-3 w-3" />
          <span>{location}</span>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <span className="text-sm text-gray-500">{date}</span>
        <Button variant="readMore" className="gap-2">
          {buttonText}
          <FontAwesomeIcon icon={faArrowRight} className="h-3 w-3" />
        </Button>
      </CardFooter>
    </Card>
  );
}