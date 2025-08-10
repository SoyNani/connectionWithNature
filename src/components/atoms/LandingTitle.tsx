interface LandingTitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function LandingTitle({children, className}: LandingTitleProps) {
    return (
        <h1 className={"text-[40px]  mb-3 text-center font-bold tracking-tight"}>
            {children}
        </h1>
    );
}