
import React from "react";
import { cn } from "@/lib/utils";

export interface QuoteCardProps extends React.HTMLAttributes<HTMLDivElement> {
  quote: string;
  author?: string;
  variant?: "light" | "dark";
}

const QuoteCard = React.forwardRef<HTMLDivElement, QuoteCardProps>(
  ({ quote, author = "TALON & TIDE", variant = "light", className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative p-8 rounded-sm transition-all duration-300 max-w-md mx-auto",
          "border-2 shadow-luxury",
          "bg-repeat",
          variant === "light"
            ? "border-talon-stone/30 bg-talon-sand text-talon-charcoal bg-[url('/texture-light.png')]"
            : "border-talon-gold/30 bg-talon-navy text-talon-sand bg-[url('/texture-dark.png')]",
          className
        )}
        {...props}
      >
        {/* Decorative stitched border */}
        <div className="absolute inset-0 border border-dashed border-talon-stone/40 m-1 pointer-events-none"></div>
        
        {/* Decorative corner pin/button */}
        <div className="absolute top-3 left-3 w-3 h-3 rounded-full bg-talon-gold shadow-md"></div>
        
        {/* Quote content */}
        <blockquote className="relative font-serif mt-4">
          <p className="text-xl md:text-2xl leading-relaxed mb-4 z-10">
            {quote}
          </p>
          {author && (
            <footer className={cn(
              "text-right font-sans text-sm uppercase tracking-wide mt-4 font-semibold",
              variant === "light" ? "text-talon-stone" : "text-talon-sand/80"
            )}>
              {author}
            </footer>
          )}
        </blockquote>
      </div>
    );
  }
);

QuoteCard.displayName = "QuoteCard";

export { QuoteCard };
