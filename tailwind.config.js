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
                accent: '#3b82f6'
            }
        }
    },
    plugins: []
};


