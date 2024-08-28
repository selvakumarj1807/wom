import { Formik } from "formik";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Card, Checkbox, Grid, TextField, useTheme, Box, styled } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import * as Yup from "yup";

import useAuth from "app/hooks/useAuth";
import { Paragraph } from "app/components/Typography";

import axios from 'axios';
// STYLED COMPONENTS
const FlexBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center"
}));

const JustifyBox = styled(FlexBox)(() => ({
  justifyContent: "center"
}));

const ContentBox = styled(JustifyBox)(() => ({
  height: "100%",
  padding: "32px",
  background: "rgba(0, 0, 0, 0.01)"
}));

const JWTRegister = styled(JustifyBox)(() => ({
  background: "#1A2038",
  minHeight: "100vh !important",
  "& .card": {
    maxWidth: 800,
    minHeight: 400,
    margin: "1rem",
    display: "flex",
    borderRadius: 12,
    alignItems: "center"
  }
}));

// initial login credentials
const initialValues = {
  email: "",
  password: "",
  name: "",
  remember: true
};

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Password must be 6 characters length")
    .required("Password is required!"),
  email: Yup.string().email("Invalid Email address").required("Email is required!"),
  name: Yup.string().required("Name is required!")
});

export default function JwtRegister() {
  const theme = useTheme();
  const { register } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const handleFormSubmit = async (values, { setSubmitting, setErrors }) => {
    setLoading(true);
    setServerError(""); // Reset server error

    try {
      // Attempt to register the user
      await register(values.email, values.name, values.password);

      // Send the registration details to your backend
      const result = await axios.post('https://wom-backend.onrender.com/api/v1/user/register', {
        name: values.name,
        email: values.email,
        password: values.password
      });

      console.log(result);  // Log the result for debugging purposes

      // Redirect to the login page after successful registration
      window.location.replace('/session/UserSignin');
    } catch (error) {
      if (error.response && error.response.data.message) {
        // Handle the error message returned from the server
        setServerError(error.response.data.message);
      } else {
        setServerError("An unexpected error occurred. Please try again.");
      }
      setSubmitting(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <JWTRegister>
      <Card className="card">
        <Grid container>
          <Grid item sm={6} xs={12}>
            <ContentBox>
              <img
                width="100%"
                alt="Register"
                src="/assets/images/illustrations/posting_photo.svg"
              />
            </ContentBox>
          </Grid>

          <Grid item sm={6} xs={12}>
            <Box p={4} height="100%">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleFormSubmit}
              >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <h2 style={{ marginBottom: '20px', textAlign: 'center', textDecoration: 'underline', fontWeight: 'bold', color: 'darkblue' }}>User Register</h2>

                    <TextField
                      fullWidth
                      size="small"
                      type="text"
                      name="name"
                      label="Name"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={values.name}
                      onChange={handleChange}
                      helperText={touched.name && errors.name}
                      error={Boolean(errors.name && touched.name)}
                      sx={{ mb: 3 }}
                    />

                    <TextField
                      fullWidth
                      size="small"
                      type="email"
                      name="email"
                      label="Email"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={values.email}
                      onChange={handleChange}
                      helperText={touched.email && errors.email}
                      error={Boolean(errors.email && touched.email)}
                      sx={{ mb: 3 }}
                    />

                    <TextField
                      fullWidth
                      size="small"
                      name="password"
                      type="password"
                      label="Password"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={values.password}
                      onChange={handleChange}
                      helperText={touched.password && errors.password}
                      error={Boolean(errors.password && touched.password)}
                      sx={{ mb: 2 }}
                    />

                    {serverError && (
                      <Box mb={2} sx={{ color: 'red' }}>
                        {serverError}
                      </Box>
                    )}

                    <FlexBox gap={1} alignItems="center">
                      <Checkbox
                        size="small"
                        name="remember"
                        onChange={handleChange}
                        checked={values.remember}
                        sx={{ padding: 0 }}
                      />

                      <Paragraph fontSize={13}>
                        I have read and agree to the terms of service.
                      </Paragraph>
                    </FlexBox>

                    <LoadingButton
                      type="submit"
                      color="primary"
                      loading={loading}
                      variant="contained"
                      sx={{ mb: 2, mt: 3 }}
                    >
                      Register
                    </LoadingButton>

                    <Paragraph>
                      Already have an account?
                      <NavLink
                        to="/session/UserSignin"
                        style={{ color: theme.palette.primary.main, marginLeft: 5 }}
                      >
                        Login
                      </NavLink>
                    </Paragraph>
                  </form>
                )}
              </Formik>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </JWTRegister>
  );
}
