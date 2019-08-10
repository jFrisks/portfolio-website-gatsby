import { createMuiTheme } from "@material-ui/core";
import { purple, green, orange } from "@material-ui/core/colors";


const muitheme = createMuiTheme({
    palette: {
        primary: purple,
        secondary: green,
    },
        status: {
        danger: orange,
    },
});

export default muitheme;