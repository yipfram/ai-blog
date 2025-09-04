/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        '*.hbs',
        'partials/**/*.hbs',
        'assets/js/**/*.js'
    ],
    theme: {
        extend: {
            colors: {
                accent: '#3b82f6',
                'ai-blue': '#00d4ff',
                'ai-purple': '#8b5cf6',
                'ai-cyan': '#06b6d4',
                'ai-pink': '#ec4899'
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'float-delayed': 'float 8s ease-in-out infinite 2s',
                'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
                'data-flow': 'data-flow 4s linear infinite',
                'circuit-pulse': 'circuit-pulse 5s ease-in-out infinite',
                'neural-pulse': 'neural-pulse 2s ease-in-out infinite'
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
                    '25%': { transform: 'translateY(-20px) translateX(10px)' },
                    '50%': { transform: 'translateY(-10px) translateX(-15px)' },
                    '75%': { transform: 'translateY(-30px) translateX(5px)' }
                },
                'pulse-glow': {
                    '0%, 100%': { 
                        opacity: '0.3',
                        transform: 'scale(1)',
                        boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)'
                    },
                    '50%': { 
                        opacity: '0.8',
                        transform: 'scale(1.1)',
                        boxShadow: '0 0 40px rgba(0, 212, 255, 0.6)'
                    }
                },
                'data-flow': {
                    '0%': { transform: 'translateX(-100px) translateY(0px)', opacity: '0' },
                    '10%': { opacity: '1' },
                    '90%': { opacity: '1' },
                    '100%': { transform: 'translateX(100vw) translateY(-50px)', opacity: '0' }
                },
                'circuit-pulse': {
                    '0%, 100%': { 
                        opacity: '0.1',
                        transform: 'scale(1) rotate(0deg)'
                    },
                    '50%': { 
                        opacity: '0.3',
                        transform: 'scale(1.05) rotate(180deg)'
                    }
                },
                'neural-pulse': {
                    '0%, 100%': { 
                        opacity: '0.4',
                        transform: 'scale(1)',
                        filter: 'blur(0px)'
                    },
                    '50%': { 
                        opacity: '0.8',
                        transform: 'scale(1.2)',
                        filter: 'blur(1px)'
                    }
                }
            }
        }
    },
    plugins: []
};


