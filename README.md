
# Connection with Nature

Proyecto web desarrollado con [Next.js](https://nextjs.org) y [Tailwind CSS](https://tailwindcss.com) para estilos modernos y responsivos.

## Características principales

- **Framework:** Next.js 15
- **Estilos:** Tailwind CSS
- **Iconos:** FontAwesome y Lucide
- **Componentes UI:** [shadcn/ui](https://ui.shadcn.com/)
- **Imágenes:** Almacenadas en un bucket de S3 (Amazon Web Services)
- **Animaciones:** tw-animate-css
- **Pipeline de despliegue:** Configuración para despliegue automático en Azure DevOps (modo pruebas)
- **Tipografía:** Geist (optimizada con next/font)

## Scripts principales

```bash
npm run dev      # Desarrollo local
npm run build    # Build de producción
npm run start    # SSR en producción
```

## Estructura del proyecto

- `src/components/organisms` - Componentes principales de la landing
- `src/components/molecules` - Componentes reutilizables
- `src/constants` - Textos y datos estáticos
- `public/` - Imágenes y recursos estáticos

## Despliegue

El proyecto está configurado para despliegue automático en Azure DevOps mediante pipeline (modo pruebas). Puedes adaptar la configuración para producción según tus necesidades.

Las imágenes se almacenan y sirven desde un bucket S3, optimizando la carga y el rendimiento.

---


