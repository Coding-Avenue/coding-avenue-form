import { useEffect, useState } from "react";
import CavenueForm from "../../components/CavenueForm";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import logo from "../../assets/logo.png";
import logoMobile from "../../assets/logoMobile.png";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#1D1E21",
    width: "100vw",
    height: "100vh",
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
  },
  mobile: {
    backgroundColor: "#36473D",
    minHeight: "100vh",
  },
  mForm: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    paddingBottom: theme.spacing(4),
  },
  mChildren: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 6,
    boxShadow: "0px 1px 12px #111",
  },
  mLogoContainer: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    borderRadius: 6,
  },
  mLogo: {
    width: 250,
  },
}));

const Home = (props) => {
  const [isMobile, setIsMobile] = useState(false);

  const handleWindowSizeChange = () => {
    if (window.innerWidth < 500) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    handleWindowSizeChange();
  }, []);

  window.addEventListener("resize", handleWindowSizeChange);

  const classes = useStyles();
  if (isMobile) {
    return (
      <div className={classes.mobile}>
        <Box className={classes.mLogoContainer}>
          <img src={logo} className={classes.mLogo} />
        </Box>
        <Box className={classes.mForm}>
          <Box className={classes.mChildren}>
            <CavenueForm />
          </Box>
        </Box>
      </div>
    );
  }
  return (
    <div className={classes.browser}>
      <Box className={classes.banner}></Box>
      <Box className={classes.form}>
        <CavenueForm />
      </Box>
    </div>
  );
};

export default Home;
