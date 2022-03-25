import { createTheme } from '@material-ui/core/styles'
import { orange,red,blue } from '@material-ui/core/colors';

export const theme= createTheme({
    palette:{
        primary:{
            main:red[500],
        },
        secondary:{
            main:'#11cb5f',
        }
    },
    mybutton:{
        backgroundColor:'blue',
        color:'white',
        Border:'1px',
    }
})