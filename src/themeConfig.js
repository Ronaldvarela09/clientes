import {createMuiTheme} from "@material-ui/core"
import {blue} from "@material-ui/core/colors"
import {green} from "@material-ui/core/colors"

const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: {main: green['A700']},
    },
})
export default theme
