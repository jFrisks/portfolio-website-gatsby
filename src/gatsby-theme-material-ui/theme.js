import { createMuiTheme } from '@material-ui/core/styles';

const palette = {
  primary: { main: '#212121', contrastText: '#FAFAFA' },
  secondary: { main: '#FB8C00', contrastText: '#212121' }
};
const themeName = 'Jontes theme';

export default createMuiTheme({ palette, themeName });