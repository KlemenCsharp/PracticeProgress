const palette = {
    purple: '#5A31F4',
    green: '#0ECD9D',
    red: '#CD0E61',
    black: '#0B0B0B',
    white: '#F0F2F3',
}

export const theme = {
    colors: {
        background: palette.white,
        foreground: palette.black,
        primary: palette.purple,
        success: palette.green,
        danger: palette.red,
        failure: palette.red,
    },
    spacing: {
        s: 8,
        m: 16,
        l: 24,
        xl: 40,
    },
    textVariants: {
        header: {
            fontFamily: 'Roboto',
            fontSize: 36,
            fontWeight: 'bold',
        },
        body: {
            fontFamily: 'Roboto',
            fontSize: 16,
        },
    },
    breakpoints: {
        smallPhone: 0,
        phone: 321,
        tablet: 768
    }
}

export const darkTheme = {
    ...theme,
    colors: {
        ...theme.colors,
        background: palette.black,
        foreground: palette.white,
    }
}
