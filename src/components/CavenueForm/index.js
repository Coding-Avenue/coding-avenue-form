import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Button,
  Box,
  InputLabel,
  Select,
  FormControl,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2),
  },
  heading: {
    marginTop: theme.spacing(1),
  },
  name: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: theme.spacing(2),
  },
  inputField: {
    width: "100%",
  },
  formError: {
    color: "#ff0000",
    fontFamily: "Roboto",
    fontSize: "0.8rem",
  },
  submit: {
    width: "100%",
  },
  submitButton: {
    width: "100%",
  },
}));

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  whatsapp: Yup.string()
    .required("Required")
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10, "to short")
    .max(10, "to long"),
});

const CavenueForm = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          whatsapp: "",
          profile: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
          history.push("/success");
        }}
      >
        {({ errors, touched, values, handleChange }) => (
          <Form className={classes.form}>
            <Box
              mb={3}
              fontWeight={700}
              letterSpacing={4}
              className={classes.heading}
            >
              Register
            </Box>
            <Box mb={1} className={classes.name}>
              <Box className={classes.inputField}>
                <TextField
                  label="First Name"
                  variant="outlined"
                  name="firstName"
                  type="text"
                  color="primary"
                  onChange={handleChange}
                  value={values.firstName}
                  className={classes.inputField}
                  error={errors.firstName && touched.firstName}
                  helperText={
                    touched.firstName && errors.firstName
                      ? errors.firstName
                      : " "
                  }
                />
              </Box>
              <Box className={classes.inputField}>
                <TextField
                  label="Last Name"
                  variant="outlined"
                  name="lastName"
                  type="text"
                  onChange={handleChange}
                  value={values.lastName}
                  className={classes.inputField}
                  error={errors.lastName && touched.lastName}
                  helperText={
                    touched.lastName && errors.lastName ? errors.lastName : " "
                  }
                />
              </Box>
            </Box>
            <Box mb={1} className={classes.inputField}>
              <TextField
                label="Email"
                variant="outlined"
                name="email"
                type="email"
                onChange={handleChange}
                value={values.email}
                className={classes.inputField}
                error={errors.email && touched.email}
                helperText={touched.email && errors.email ? errors.email : " "}
              />
            </Box>

            <Box mb={1} className={classes.inputField}>
              <TextField
                label="Mobile/Whatsapp"
                variant="outlined"
                name="whatsapp"
                type="whatsapp"
                onChange={handleChange}
                value={values.whatsapp}
                className={classes.inputField}
                error={errors.whatsapp && touched.whatsapp}
                helperText={
                  touched.whatsapp && errors.whatsapp ? errors.whatsapp : " "
                }
              />
            </Box>

            <Box mb={4} className={classes.inputField}>
              <FormControl
                variant="outlined"
                className={`${classes.formControl} ${classes.inputField}`}
              >
                <InputLabel htmlFor="profile">Profile</InputLabel>
                <Select
                  native
                  value={values.profile}
                  onChange={handleChange}
                  className={classes.inputField}
                  label="Profile"
                  inputProps={{
                    name: "profile",
                  }}
                >
                  <option value=""></option>
                  <option value="student">Student</option>
                  <option value="professional">Professional</option>
                </Select>
              </FormControl>

              {/* {errors.profile && touched.profile ? (
                <div className={classes.formError}>{errors.profile}</div>
              ) : null} */}
            </Box>
            <Box mb={1} className={classes.submit}>
              <Button
                variant="contained"
                // variant="outlined"
                type="submit"
                className={classes.submitButton}
                color="primary"
              >
                Submit
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CavenueForm;
