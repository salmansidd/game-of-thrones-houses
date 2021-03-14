import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#c2ad77',
    },
    secondary: {
      main: '#86090a',
    },
    highlight: {
      main: '#5f0707',
    },
    background: {
      paper: '#ffffff',
      header: '#e3e3e3',
      default: '#000000',
    }
  },

  typography: {
    useNextVariants: true,

    fontWeightLight: 300,
    fontWeightRegular: 300,
    fontWeightMedium: 300,

    h1: {
      fontSize: '34px',
      lineHeight: '40px',
    },

    h2: {
      fontSize: '28px',
      lineHeight: '36px',
    },

    h3: {
      fontSize: '24px',
      lineHeight: '28px',
    },

    h4: {
      fontSize: '20px',
      lineHeight: '26px',
    },

    h5: {
      fontSize: '16px',
      lineHeight: '24px',
    },

    h6: {
      fontSize: '15px',
      lineHeight: '24px',
    },

    subtitle1: {
      fontSize: '16px',
      lineHeight: '24px',
    },

    subtitle2: {
      fontSize: '15px',
      lineHeight: '20px',
    },

    body1: {
      fontSize: '14px',
      lineHeight: '24px',
    },

    body2: {
      fontSize: '12px',
      lineHeight: '16px',
    },
  },
});

export default theme;
