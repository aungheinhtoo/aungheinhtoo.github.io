import { createTheme } from '@mui/material/styles';
// import { red } from '@mui/material/colors';
// import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

// export const themeOptions: ThemeOptions = {
//   palette: {
//     type: 'dark',
//     primary: {
//       main: '#414559',
//     },
//     secondary: {
//       main: '#838ba7',
//       contrastText: '#f2d5cf',
//     },
//     background: {
//       default: '#303446',
//       paper: '#737994',
//     },
//     text: {
//       primary: '#c6d0f5',
//       secondary: '#b5bfe2',
//       disabled: '#838ba7',
//     },
//     error: {
//       main: '#ea999c',
//     },
//     warning: {
//       main: '#ef9f76',
//     },
//     info: {
//       main: '#8caaee',
//     },
//     success: {
//       main: '#a6d189',
//     },
//   },
// };
// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#414559',
    },
    secondary: {
      main: '#838ba7',
      contrastText: '#f2d5cf',
    },
    background: {
      default: '#303446',
      paper: '#737994',
    },
    text: {
      primary: '#c6d0f5',
      secondary: '#b5bfe2',
      disabled: '#838ba7',
    },
    error: {
      main: '#ea999c',
    },
    warning: {
      main: '#ef9f76',
    },
    info: {
      main: '#8caaee',
    },
    success: {
      main: '#a6d189',
    },
  },
});

export default theme;