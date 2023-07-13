import { createTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import { red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: green[300]
    },
    secondary: {
      main: red[300]
    }
  }
});

export default theme;