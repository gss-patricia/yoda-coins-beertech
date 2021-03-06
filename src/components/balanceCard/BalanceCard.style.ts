import { makeStyles } from "@material-ui/core/styles";
import TransitionsModal from "../modal";
const useStyles = makeStyles((theme) => ({
  button: {
    color: "#275F40",
    fontSize: "1rem",
    padding: "5px 15px",
    fontWeight: "bold",
  },
  image: {
    minWidth: "191px",
    [theme.breakpoints.down(400)]: {
      opacity: "0",
      position: "absolute",
    },
  },
  box: {
    color: "#275F40",
    display: "flex",
    cursor: "pointer",
    justifyContent: "start",
    minHeight: "155px",
    backgroundColor: "#FAFAFA",
    borderRadius: '10px',
    [theme.breakpoints.down(400)]: {
      alignItems: "center",
      justifyContent: "center",
      minHeight: "50px",
    },
    [theme.breakpoints.up(400)]: {
      position: "relative",
    },
    "& h3": {
      [theme.breakpoints.up(400)]: {
        position: "absolute",
        right: "10px",
      },
    },
  },
  collapsedInput: {
    padding: "5% 0",
  },
  inputMargin: {
    margin: "15px 15px",
    [theme.breakpoints.down(410)]: {
      width: "90%",
    },
    [theme.breakpoints.between(445, 600)]: {
      width: "57%",
    },
    [theme.breakpoints.between(601, 958)]: {
      width: "43%",
    },
    [theme.breakpoints.up(1024)]: {
      width: "48%",
    },
  },
  inputWidth: {
    width: "90%",
  },
  balanceGrid: {
    justifyContent: "start",
    borderRadius: '10px',
    margin: "5% 0 10% 5%",
    [theme.breakpoints.down(600)]: {
      marginLeft: "0",
      marginTop: "0",
    },
    [theme.breakpoints.up(767)]: {
      marginBottom: '5%',
      marginTop: "2%",
    },
  },
  typography: {
    fontWeight: "bold",
    marginTop: "20px",
    [theme.breakpoints.down(800)]: {
      fontSize: "1.3rem",
    },
  },
  addIcon: {
    position: "absolute",
    marginTop: "113px",
    right: "35px",
  },
  cheers: {
    width: "100px",
  },
  pigBank: {
    display: "flex",
    color: "#275F40",
    maxHeight: "155px",
    minHeight: "155px",
    margin: "0",
    position: 'relative',
    [theme.breakpoints.down(600)]: {
      marginTop: "0",
    },
    "& img": {
      margin: "0 5% 0 0",
      borderRadius: '10px',
      [theme.breakpoints.down(880)]: {
        opacity: "0",
        position: "absolute",
      },
    },
    "& h3": {
      width: "100%",
      [theme.breakpoints.down(800)]: {
        fontSize: "1.3rem",
      },
    },
    "& h2": {
      [theme.breakpoints.down(800)]: {
        fontSize: "1.1rem",
      },
    },
    "& div": {
      marginLeft: "5%",
      display: "flex",
      flexWrap: "wrap",
      alignContent: "space-around",
      "& div": {
        width: "100%",
        wordBreak: "break-word",
        margin: "0",
      }
    },
  },
  saldo: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginTop: "15px",
  },
  saldoInfo: {
    fontSize: "1.2rem",
    marginTop: "5px",
  },
  date: {
    color: "#9C9696",
  },
}));

export default useStyles;
