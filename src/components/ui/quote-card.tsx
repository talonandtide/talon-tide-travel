
import React from "react";
import { cn } from "@/lib/utils";

export interface QuoteCardProps extends React.HTMLAttributes<HTMLDivElement> {
  quote: string;
  author?: string;
  variant?: "light" | "dark";
}

const QuoteCard = React.forwardRef<HTMLDivElement, QuoteCardProps>(
  ({ quote, author = "Talon & Tide", variant = "light", className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative p-8 md:p-10 rounded-sm transition-all duration-300 max-w-2xl mx-auto",
          "border border-talon-sand/30 shadow-luxury",
          "bg-repeat bg-[length:200px_200px]",
          variant === "light"
            ? "bg-talon-ivory text-talon-charcoal bg-[url('/texture-light.png')]"
            : "bg-talon-navy text-talon-sand bg-[url('/texture-dark.png')]",
          className
        )}
        {...props}
      >
        {/* Decorative corner stitches */}
        <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-talon-gold/70"></div>
        <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-talon-gold/70"></div>
        <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-talon-gold/70"></div>
        <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-talon-gold/70"></div>
        
        {/* Quote content */}
        <blockquote className="relative">
          <span className="absolute -top-6 -left-2 text-6xl font-serif text-talon-gold opacity-30">"</span>
          <p className="relative font-serif text-xl md:text-2xl italic leading-relaxed mb-4 z-10">
            {quote}
          </p>
          {author && (
            <footer className={cn(
              "text-right font-sans text-sm mt-4",
              variant === "light" ? "text-talon-stone" : "text-talon-sand/80"
            )}>
              — {author}
            </footer>
          )}
        </blockquote>
      </div>
    );
  }
);

QuoteCard.displayName = "QuoteCard";

export { QuoteCard };
