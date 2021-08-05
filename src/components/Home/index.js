import { useEffect, useState } from "react";
import CavenueForm from "../../components/CavenueForm";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import logo from "../../assets/logo.png";

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
  browser: {
    display: "flex",
  },
  banner: {
    backgroundColor: "#36473D",
    minHeight: "100vh",
    width: "40%",
  },
  formContainer: {
    width: "60%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    maxWidth: 650,
  },
  logoContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: "120%",
    height: "auto",
    transform: "rotate(-90deg)",
  },
}));

const Home = ({ setIsFormComplete }) => {
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
          <img src={logo} alt="Brand Logo" className={classes.mLogo} />
        </Box>
        <Box className={classes.mForm}>
          <Box className={classes.mChildren}>
            <CavenueForm setIsFormComplete={setIsFormComplete} />
          </Box>
        </Box>
      </div>
    );
  }
  return (
    <div className={classes.browser}>
      <Box className={classes.banner}>
        <Box className={classes.logoContainer}>
          <img src={logo} alt="Brand Logo" className={classes.logo} />
        </Box>
      </Box>
      <Box className={classes.formContainer}>
        <Box className={classes.form}>
          <CavenueForm setIsFormComplete={setIsFormComplete} />
        </Box>
      </Box>
    </div>
  );
};

export default Home;
