const colors = require('tailwindcss/colors');

module.exports = {
    purge: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],
    mode: 'jit',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Montserrat', 'Helvetica', 'ui-sans-serif', 'system-ui'],
            },
            colors: {
                red: colors.red,
                white : colors.white,
                black : colors.black,
                gray: colors.gray,
                lime: colors.lime,
            },
        },
    },
    plugins: [require('@tailwindcss/line-clamp')],
}
