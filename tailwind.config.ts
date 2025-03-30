
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
				// Enhanced custom colors for Talon & Tide
				talon: {
					green: "#2C3E35",
					navy: "#1A2A40",
					gold: "#E4CBA8",   // Updated to match champagne gold
					sand: "#F5E8D7",   // Updated to match warm sand beige
					stone: "#A9A295",
					ivory: "#F9F7F3",
					charcoal: "#2B2B2B", // Updated to match charcoal gray
					midnight: "#1C3D5B", // Added deep midnight blue
					espresso: "#3A2618", // Rich brown
					champagne: "#E4CBA8", // Warm neutral
					bronze: "#CD7F32",  // Metallic accent
					emerald: "#6B705C",  // Updated to match muted olive green
				},
				// New color shortcuts
				midnight: "#1C3D5B",
				champagne: "#E4CBA8",
				sandbeige: "#F5E8D7",
				olive: "#6B705C",
				charcoal: "#2B2B2B",
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
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-out': {
					'0%': {
						opacity: '1',
						transform: 'translateY(0)'
					},
					'100%': {
						opacity: '0',
						transform: 'translateY(10px)'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-5px)' }
				},
				'subtle-pulse': {
					'0%, 100%': { opacity: '0.8' },
					'50%': { opacity: '1' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.7s ease-out',
				'fade-out': 'fade-out 0.7s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'subtle-pulse': 'subtle-pulse 4s ease-in-out infinite'
			},
			fontFamily: {
				serif: ['Libre Baskerville', 'Playfair Display', 'Cormorant Garamond', 'serif'],
				sans: ['Montserrat', 'Lato', 'sans-serif'],
				display: ['Cormorant Garamond', 'serif'],
				body: ['Montserrat', 'sans-serif'],
				accent: ['Playfair Display', 'serif'],
			},
			boxShadow: {
				'luxury': '0 10px 25px -5px rgba(0, 0, 0, 0.15), 0 5px 10px -5px rgba(0, 0, 0, 0.1)',
				'luxury-hover': '0 15px 35px -5px rgba(0, 0, 0, 0.2), 0 10px 15px -5px rgba(0, 0, 0, 0.15)',
				'card': '0 5px 15px rgba(0, 0, 0, 0.08)',
				'card-hover': '0 8px 30px rgba(0, 0, 0, 0.15)',
			},
			backgroundImage: {
				'gradient-luxury': 'linear-gradient(to right, rgba(28, 61, 91, 0.9), rgba(44, 62, 53, 0.7))',
				'gradient-gold': 'linear-gradient(to right, #E4CBA8, #F5E8D7)',
			},
			dropShadow: {
				'text': '0 2px 4px rgba(0, 0, 0, 0.08)',
				'text-lg': '0 3px 6px rgba(0, 0, 0, 0.12)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
