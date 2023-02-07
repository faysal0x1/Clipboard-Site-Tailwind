const colors = require('tailwindcss/colors')
module.exports = {
    content: ['./*.html'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px'
        },
        extend: {
            fontFamily: {
                sans: ['Bai Jamjuree', 'sans-serif']


            },
            colors: {
                strongCyan: 'hsl(171,66%,44%)',
                lightBlue: 'hsl(233,100%,69%)',
                darkGrayishBlue: 'hsl(210,10%,33%)',
                grayishBlue: 'hsl(201,11%,66%)'
            },

            container: {
                center: true,
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}