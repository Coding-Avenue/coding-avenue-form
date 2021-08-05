import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100vw",
    height: "100vh",
    position: "relative",
  },
  not: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "5rem",
    fontFamily: "Roboto",
    fontWeight: 700,
  },
  backContainer: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  back: {
    width: "40%",
  },
  mNot: {
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "3rem",
    fontFamily: "Roboto",
    fontWeight: 500,
  },
  mBackContainer: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  mBack: {
    width: "80%",
  },
}));

const Home = ({ image }) => {
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
      <div className={classes.container}>
        <Box className={classes.mNot}>404</Box>
        <Box className={classes.mBackContainer}>
          <img src={image} alt="404" className={classes.mBack} />
        </Box>
      </div>
    );
  }
  return (
    <div className={classes.container}>
      <Box className={classes.not}>404</Box>
      <Box className={classes.backContainer}>
        <img src={image} alt="404" className={classes.back} />
      </Box>
    </div>
  );
};

export default Home;
