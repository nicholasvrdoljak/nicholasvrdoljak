import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[500]
    },
    secondary: {
      main: red[500]
    }
  }
});

export default theme;