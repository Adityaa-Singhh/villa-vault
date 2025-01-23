
/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		overflowClipMargin: {
  			'content-box': 'content-box'
  		},
  		animation: {
  			marquee: 'marquee var(--duration) infinite linear',
  			'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		},
  		keyframes: {
  			marquee: {
  				from: {
  					transform: 'translateX(0)'
  				},
  				to: {
  					transform: 'translateX(calc(-100% - var(--gap)))'
  				}
  			},
  			'marquee-vertical': {
  				from: {
  					transform: 'translateY(0)'
  				},
  				to: {
  					transform: 'translateY(calc(-100% - var(--gap)))'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		backgroundImage: {
  			'custom-pattern': 'linear-gradient(135deg, #0A2640 25%, #1C3D5B 75%)'
  		},
  		colors: {
  			customBlue: 'rgb(10, 38, 64)',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primaryColor: '#0A2640',
  			secondaryColor: '#1C3D5B',
			deepOcean: 'rgb(10,38,64)',
			slateBlue : 'rgb(91,112,117)',
			jetBlack: 'rgb(0,0,0)',
			inkBlue : '#0A2640',
			stoneGray: '#5B7075',
			charcoal:'#333333',
			cloudWhite: '#f7f7f7',
			powderedSnow:'#f1f1f1',
			ashGray: 'rgb(142,142,142)',
			warmGray:'#8e8e8e',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
			primaryColor: 'hsl(var(--primary-color))',
  		}
  	}
  },
  plugins: [require("tailwindcss-animate"),
	[
		function ({ addComponents }) {
		  addComponents({
			'.custom-flex': {
			  display: 'flex',
			  alignItems: 'center',
			  fontSize: '24px',
			  fontWeight: '400', // Normal weight
			  gap: '1rem', // 4px gap
			  lineHeight: '2rem', // Leading 8px
			  marginTop: '1.5rem', // 6px margin-top
			},
		  });
		},
	  ],
  ]
  ,
  
}

