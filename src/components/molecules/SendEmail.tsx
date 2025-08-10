import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { faEnvelope, faVoicemail } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Mail } from "lucide-react"

export function SendEmail() {
  return (
    <div className="flex w-ful rounded-full gap-5 justify-center items-center">
      <div className="relative w-full">
        <FontAwesomeIcon 
          icon={faEnvelope} 
          className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[var(--primary-forest)]"
        />
        <Input 
            type="email" 
            placeholder="Ingresa tú correo..." 
            className="pr-5 "
        />
        
      </div>
      <Button type="submit" variant="orange">
        Únete al viaje.
      </Button>
    </div>
  )
}
