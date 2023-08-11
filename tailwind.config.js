module.exports = {
    content: [],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Outfit']
            },
            colors: {
                'brand-blue-1': '#0db7ff',
                'brand-blue-2': '#007bff',
                'brand-purple': '#4e00ff',
                'hq-red': '#F5254A',
                'hq-orange': '#F17027',
                'hq-yellow': '#EACA22',
                'hq-green': '#26D958',
                'hq-light-blue': '#0DB7FF',
                'hq-dark-blue': '#072DF6',
                'hq-purple-blue': '#4E00FF',
                'hq-purple': '#A012F6',
                'hq-pink': '#E020E4'
            }
        }
    },
    variants: {
        extend: {
            display: ['group-hover']
        }
    },
    plugins: [
        require('@tailwindcss/forms')
        // ...
    ]
}
