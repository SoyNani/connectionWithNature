interface TitleProps {
  children: React.ReactNode;
  className?: string;
}
export const Title = ({ children, className }: TitleProps) => {
  return (
    <h1 className={"text-[64px] text-[var(--background)] font-bold tracking-tight"}>
      {children}
    </h1>
  );
};