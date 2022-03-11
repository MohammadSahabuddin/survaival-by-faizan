export default {
    fonts: {
        body: "'Barlow Condensed', sans-serif", //text
        heading: "'Noto Sans', sans-ser", //boxShape
        monospace: "'Teko', sans-serif", //header
        roboto: "'Roboto', sans-serif",
        glory: "'Glory', sans-serif",
        open: "'Open Sans', sans-serif"
    },
    fontWeights: {
        text: 400,
        body: 500,
        heading: 600,
        bold: 700,
    },
    colors: {
        text: '#000000', //black
        heading: "#E4003B", //red
        primary: '#E4003B', //red
        back: "#EDF0F2", //dip white
        secondary: "#fff" // white

    },
    background: {
        primary: "#EDF0F2",
        secondary: "#E4003B",
    },
    text: {
        caps: {
            textTransform: 'capitalize',
            letterSpacing: '0.1em',
            lineHeight: "30px",
            fontWeight: "text"
        },
    },
    buttons: {
        primary: {
            color: 'white',
            bg: 'secondary',
        },
    },
    lineHeights: {
        body: "24px",
        heading: "24px",
    },
    styles: {
        root: {
            p: 0,
            m: 0,
            background: 'primary',
            cursor: 'default',
            position: 'relative',
            overflowX: "hidden"
        }
    },
    breakpoints: ['361px', '376px', '415px', '481px', '769px', '801px', '1025px', '1221px', '1281px', '1365px'],

    //null, null, null, null, null, null, null,
}
