interface SubtitleProps {
  children: React.ReactNode;
  className?: string;
}

export const Subtitle = ({ children, className }: SubtitleProps) => {
  return (
    <p className={"text-[32px] font-light text-[var(--spring-leaf)] "}>
      {children}
    </p>
  );
};