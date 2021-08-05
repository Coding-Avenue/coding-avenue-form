import { useState, useEffect } from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
  gifContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh",
  },
  mSuccessGif: {
    width: "60%",
  },
  blueText: {
    color: "#3080e8",
    marginTop: theme.spacing(2),
  },
  mSuccessText: {
    fontWeight: 700,
    textAlign: "center",
  },
  successText: {
    fontWeight: 800,
    fontSize: "1.4rem",
    textAlign: "center",
  },
}));

const Home = ({ GIF }) => {
  const classes = useStyles();

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

  return (
    <div className={classes.gifContainer}>
      <img
        src={GIF}
        alt="Confetti GIF"
        className={classes[isMobile ? "mSuccessGif" : "successGif"]}
      />
      <Box
        className={`
        ${classes[isMobile ? "mSuccessText" : "successText"]}
        ${classes.blueText}
        `}
      >
        Thank you for connecting
        <br />
        We will get back to you shortly!
      </Box>
    </div>
  );
};

export default Home;
