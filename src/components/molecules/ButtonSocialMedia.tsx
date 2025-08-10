import { FaInstagram, FaLinkedin, FaTwitter, FaGithub, FaFacebook, FaTiktok } from 'react-icons/fa';

interface ButtonSocialMediaProps {
  icon: 'instagram' | 'linkedin' | 'twitter' | 'github' | 'facebook' |  'tiktok';
  url: string;
  className?: string;
  iconClass?: string;
}

export default function ButtonSocialMedia({
  icon,
  url,
  className = "",
  iconClass = ""
}: ButtonSocialMediaProps) {
  const IconComponent = {
    instagram: FaInstagram,
    linkedin: FaLinkedin,
    twitter: FaTwitter,
    github: FaGithub,
    facebook: FaFacebook,
    tiktok: FaTiktok,
  }[icon];

  return (
    <button
      onClick={() => window.open(url, "_blank")}
      className={`w-11 h-11 rounded-full flex justify-center items-center bg-[#166534] hover:bg-[#428b5e] transition-colors shadow-sm ${className}`}
      aria-label={`Ir a ${icon}`}
    >
      <IconComponent className={`text-white text-xl ${iconClass}`} />
    </button>
  );
}