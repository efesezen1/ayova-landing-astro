import { cn } from "@/lib/utils";

interface OrbitingCirclesProps extends React.HTMLAttributes<HTMLDivElement> {
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
}

export function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  delay = 10,
  radius = 50,
  path = true,
  ...props
}: OrbitingCirclesProps) {
  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <circle
            className="stroke-black/10 stroke-1 dark:stroke-white/10"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}
      <div
        style={
          {
            "--duration": duration,
            "--radius": radius,
            "--delay": -delay,
          } as React.CSSProperties
        }
        className={cn(
          "absolute flex size-full transform-[rotate(calc(360deg*var(--delay)/var(--duration)))] items-center justify-center rounded-full border-0 bg-transparent transition-transform duration-500 ease-linear",
          { "[animation-direction:reverse]": reverse },
          "animate-orbit",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </>
  );
}
