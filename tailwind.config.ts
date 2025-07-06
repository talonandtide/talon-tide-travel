
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Enhanced luxury safari color palette
				talon: {
					green: "#2C3E35",      // Deep forest green
					navy: "#1A2A40",       // Rich navy blue
					gold: "#BC9A5F",       // Classic brass/gold
					sand: "#E5DFD3",       // Warm sand
					stone: "#A9A295",      // Natural stone
					ivory: "#F9F7F3",      // Warm ivory
					charcoal: "#222222",   // Deep charcoal
					midnight: "#121A26",   // Deep midnight blue
					espresso: "#3A2618",   // Rich espresso brown
					champagne: "#E8DDCB",  // Warm champagne
					bronze: "#CD7F32",     // Polished bronze
					emerald: "#046307",    // Deep emerald
					// New luxury safari colors
					leather: "#8B4513",    // Rich leather brown
					mahogany: "#4A0E0E",   // Dark mahogany wood
					brass: "#B5A642",      // Antique brass
					canvas: "#F5F5DC",     // Canvas/linen
					copper: "#B87333",     // Aged copper
					teak: "#654321",       // Teak wood
					olive: "#556B2F",      // Safari olive
					khaki: "#8B7D6B",      // Classic khaki
					parchment: "#F1E9D2",  // Aged parchment
					cognac: "#9A463D",     // Cognac leather
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'luxury-fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px) scale(0.95)'
					},
					'100%': {
						opacity: '1',  
						transform: 'translateY(0) scale(1)'
					}
				},
				'luxury-float': {
					'0%, 100%': { 
						transform: 'translateY(0) rotate(0deg)' 
					},
					'25%': { 
						transform: 'translateY(-8px) rotate(1deg)' 
					},
					'50%': { 
						transform: 'translateY(-4px) rotate(0deg)' 
					},
					'75%': { 
						transform: 'translateY(-12px) rotate(-1deg)' 
					}
				},
				'shimmer': {
					'0%, 100%': { 
						backgroundPosition: '0% 50%' 
					},
					'50%': { 
						backgroundPosition: '100% 50%' 
					}
				},
				'brass-glow': {
					'0%, 100%': {
						boxShadow: '0 0 20px rgba(188, 154, 95, 0.3)'
					},
					'50%': {
						boxShadow: '0 0 30px rgba(188, 154, 95, 0.5)'
					}
				},
				'wood-grain': {
					'0%': {
						backgroundPosition: '0% 0%'
					},
					'100%': {
						backgroundPosition: '100% 0%'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'luxury-fade-in': 'luxury-fade-in 0.8s ease-out',
				'luxury-float': 'luxury-float 8s ease-in-out infinite',
				'shimmer': 'shimmer 3s ease-in-out infinite',
				'brass-glow': 'brass-glow 2s ease-in-out infinite',
				'wood-grain': 'wood-grain 10s linear infinite'
			},
			fontFamily: {
				serif: ['Playfair Display', 'Cormorant Garamond', 'serif'],
				sans: ['Montserrat', 'Lato', 'sans-serif'],
				display: ['Cormorant Garamond', 'serif'],
				body: ['Lato', 'sans-serif'],
			},
			boxShadow: {
				'luxury': '0 20px 50px -12px rgba(44, 62, 53, 0.25), 0 8px 20px -6px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
				'luxury-hover': '0 25px 60px -12px rgba(44, 62, 53, 0.35), 0 12px 24px -6px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
				'card': '0 8px 25px rgba(44, 62, 53, 0.15), 0 3px 10px rgba(0, 0, 0, 0.08)',
				'card-hover': '0 12px 35px rgba(44, 62, 53, 0.2), 0 5px 15px rgba(0, 0, 0, 0.12)',
				'brass': '0 4px 15px rgba(188, 154, 95, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
				'trunk': '0 15px 35px rgba(0, 0, 0, 0.2), inset 0 2px 4px rgba(255, 255, 255, 0.1), inset 0 -2px 4px rgba(0, 0, 0, 0.1)',
				'expedition': '0 20px 40px rgba(26, 42, 64, 0.3), 0 8px 16px rgba(0, 0, 0, 0.15)'
			},
			backgroundImage: {
				'gradient-luxury': 'linear-gradient(135deg, rgba(44, 62, 53, 0.9) 0%, rgba(26, 42, 64, 0.8) 50%, rgba(18, 26, 38, 0.9) 100%)',
				'gradient-gold': 'linear-gradient(45deg, #BC9A5F 0%, #CD7F32 50%, #B5A642 100%)',
				'gradient-brass': 'linear-gradient(135deg, #CD7F32 0%, #BC9A5F 50%, #B5A642 100%)',
				'gradient-wood': 'linear-gradient(90deg, #3A2618 0%, #4A0E0E 25%, #3A2618 50%, #654321 75%, #3A2618 100%)',
				'gradient-canvas': 'linear-gradient(45deg, #F5F5DC 0%, #E8DDCB 50%, #F1E9D2 100%)',
				'gradient-safari': 'linear-gradient(135deg, #2C3E35 0%, #556B2F 25%, #1A2A40 50%, #046307 75%, #121A26 100%)',
				'texture-leather': 'radial-gradient(circle at 25% 25%, rgba(139, 69, 19, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(58, 38, 24, 0.1) 0%, transparent 50%)',
				'texture-canvas': 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(169, 162, 149, 0.03) 2px, rgba(169, 162, 149, 0.03) 4px)',
				'texture-linen': 'radial-gradient(circle at 1px 1px, rgba(169, 162, 149, 0.1) 1px, transparent 0)',
			},
			dropShadow: {
				'text': '0 2px 4px rgba(0, 0, 0, 0.1)',
				'text-lg': '0 4px 8px rgba(0, 0, 0, 0.15)',
				'luxury': '0 8px 16px rgba(44, 62, 53, 0.15)',
				'brass': '0 4px 8px rgba(188, 154, 95, 0.3)',
			},
			backdropBlur: {
				'luxury': '16px',
			},
			typography: {
				DEFAULT: {
					css: {
						maxWidth: '70ch',
						color: 'inherit',
						a: {
							color: '#BC9A5F',
							textDecoration: 'none',
							'&:hover': {
								color: 'rgba(188, 154, 95, 0.8)',
								textDecoration: 'underline',
							},
						},
						h1: { 
							color: '#2C3E35',
							fontFamily: 'Playfair Display, serif',
							fontWeight: '600'
						},
						h2: { 
							color: '#2C3E35',
							fontFamily: 'Playfair Display, serif',
							fontWeight: '600'
						},
						h3: { 
							color: '#2C3E35',
							fontFamily: 'Playfair Display, serif',
							fontWeight: '500'
						},
						h4: { 
							color: '#2C3E35',
							fontFamily: 'Playfair Display, serif',
							fontWeight: '500'
						},
						blockquote: {
							borderLeftColor: '#BC9A5F',
							borderLeftWidth: '4px',
							backgroundColor: 'rgba(229, 223, 211, 0.2)',
							padding: '1rem 1.5rem',
							fontStyle: 'italic',
							fontFamily: 'Playfair Display, serif',
							color: '#1A2A40',
						},
						code: {
							backgroundColor: 'rgba(44, 62, 53, 0.1)',
							color: '#2C3E35',
							fontWeight: '500'
						}
					},
				},
			},
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		require('@tailwindcss/typography'),
	],
} satisfies Config;
