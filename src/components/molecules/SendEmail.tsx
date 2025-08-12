'use client';

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useForm } from "react-hook-form"
import { useState } from "react"

type FormData = {
  email: string;
};

export function SendEmail() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: data.email }),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        throw new Error('Error sending email');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex w-ful rounded-full gap-5 justify-center items-center">
      <div className="relative w-full">
        <FontAwesomeIcon 
          icon={faEnvelope} 
          className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[var(--primary-forest)]"
        />
        <Input 
          type="email" 
          placeholder="Ingresa tú correo..." 
          className="pr-5"
          {...register('email', {
            required: 'El correo es requerido',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Correo electrónico no válido'
            }
          })}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>
      <Button 
        type="submit" 
        variant="orange"
        disabled={isSubmitting || isSuccess}
      >
        {isSubmitting ? 'Enviando...' : isSuccess ? '¡Gracias!' : 'Únete al viaje.'}
      </Button>
    </form>
  );
}