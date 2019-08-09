import { createMuiTheme } from "@material-ui/core";
import { red, green, orange } from "@material-ui/core/colors";


const muitheme = createMuiTheme({
    palette: {
        primary: red,
        secondary: green,
    },
        status: {
        danger: orange,
    },
});

export default muitheme;