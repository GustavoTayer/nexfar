import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3cba92",
      contrastText: "#fff",
    },
    backgroundColor: {
      default: "#3cba92!important"
    },
    secondary: {
      main: '#5b127d'
    }
  },
 
  typography: {
    fontFamily: ["ui-serif", "sans-serif", "arial"],
    h5: {
      color: "#216394",
      fontWeight: "bold"
    },
    subtitle2: {
      color: "#216394",
      fontWeight: "bold",
      fontSize: "1.05rem",
    }
  },
  overrides: {
    MuiTableCell: {
      head: {
        fontWeight: "bold",
      },
    },
    MuiAppBar:{
      colorPrimary: {
        backgroundColor: '#fff',
        borderBottom: ' 2px solid #3cba92',
        
      }
    }
  },
});

export default theme;