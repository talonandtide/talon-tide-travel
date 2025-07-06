
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
					gold: "#BC9A5F",
					sand: "#E5DFD3",
					stone: "#A9A295",
					ivory: "#F9F7F3",
					charcoal: "#222222",
					midnight: "#121A26",  // Deep midnight blue
					espresso: "#3A2618",  // Rich brown
					champagne: "#E8DDCB", // Warm neutral
					bronze: "#CD7F32",    // Metallic accent
					emerald: "#046307",   // Deep emerald
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
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.7s ease-out',
				'fade-out': 'fade-out 0.7s ease-out',
				'float': 'float 6s ease-in-out infinite'
			},
			fontFamily: {
				serif: ['Playfair Display', 'Cormorant Garamond', 'serif'],
				sans: ['Montserrat', 'Lato', 'sans-serif'],
				display: ['Cormorant Garamond', 'serif'],
				body: ['Lato', 'sans-serif'],
			},
			boxShadow: {
				'luxury': '0 10px 30px -5px rgba(0, 0, 0, 0.1)',
				'luxury-hover': '0 15px 40px -5px rgba(0, 0, 0, 0.15)',
				'card': '0 5px 15px rgba(0, 0, 0, 0.08)',
				'card-hover': '0 8px 25px rgba(0, 0, 0, 0.12)',
			},
			backgroundImage: {
				'gradient-luxury': 'linear-gradient(to right, rgba(26, 42, 64, 0.9), rgba(44, 62, 53, 0.7))',
				'gradient-gold': 'linear-gradient(to right, #BC9A5F, #E8DDCB)',
			},
			dropShadow: {
				'text': '0 2px 4px rgba(0, 0, 0, 0.1)',
				'text-lg': '0 4px 8px rgba(0, 0, 0, 0.12)',
			},
			typography: {
				DEFAULT: {
					css: {
						maxWidth: '65ch',
						color: 'inherit',
						a: {
							color: '#BC9A5F', // talon-gold
							'&:hover': {
								color: 'rgba(188, 154, 95, 0.8)', // talon-gold with opacity
							},
						},
						h1: { color: '#2C3E35' }, // talon-green
						h2: { color: '#2C3E35' }, // talon-green
						h3: { color: '#2C3E35' }, // talon-green
						h4: { color: '#2C3E35' }, // talon-green
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
