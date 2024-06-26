import React, { useContext, useState } from "react";
import { Grid, TextField, Stack, Typography, Box, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import SignImg from "../assets/login.png";
import * as Yup from "yup";
import { useFormik } from "formik";
import axios_instance from "../endPoints/baseURL";
import AuthContext from "../Components/AuthContext/AuthContext";
import Loader from "../Components/Loader/Loader";

const ButtonStyle = {
  fontSize: "20px",
  color: "#fff",
  padding: ".5rem",
  marginTop: "2rem",
  borderRadius: ".3rem",
  border: "none",
  background: "rgb(38, 23, 177)",
};

const inputStyles = {
  justifyContent: { md: "normal", sm: "center", xs: "center" },
  marginTop: { md: "0", sm: "8rem", xs: "8rem" },
  boxShadow: {
    md: "none",
    sm: "3px 3px 3rem rgba(0,0,0,0.3)",
    xs: "3px 3px 3rem rgba(0,0,0,0.3)",
  },
  borderRadius: { md: "none", sm: "1rem" },
};

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        setLoading(true);
        const response = await axios_instance.post("/login", values);
        const { token, user } = response.data;
        login(token, user); // Passing the role to the login function
        toast.success("Logged in successfully!");
        navigate("/"); // Navigate to the desired page after successful login
      } catch (err) {
        toast.error("An unexpected error occurred.");
      } finally {
        setLoading(false);
        setSubmitting(false);
      }
    },
  });

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {loading ? (
        <Loader />
        
      ) : (
        <Grid
          container
          alignItems={"center"}
          justifyContent={"center"}
          mt={{ xs: 5, md: 10 }}
          spacing={2}
        >
          <Grid
            item
            md={5}
            xs={12}
            sx={{ ...inputStyles, ml: { md: 2, xs: 0 }, px: { xs: 2, md: 0 } }}
          >
            <Box sx={{ padding: { md: "none", xs: "30px" } }}>
              <Typography variant="h4" fontWeight={700}>
                Sign In
              </Typography>
              <Typography fontWeight={400} color={"#666"} marginTop={"10px"}>
                We Provide Seamless Complaint Register Portal
              </Typography>
              <form onSubmit={formik.handleSubmit}>
                <Stack direction={"column"} spacing={3} mt={2}>
                  <TextField
                    required
                    variant="standard"
                    type="email"
                    label="Email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    fullWidth
                  />
                  <TextField
                    required
                    variant="standard"
                    type="password"
                    label="Password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                    fullWidth
                  />
                  <Button
                    type="submit"
                    style={ButtonStyle}
                    disabled={formik.isSubmitting}
                  >
                    Submit
                  </Button>
                  <Typography textAlign="center">
                    Don't Have an Account?{" "}
                    <Link
                      to="/register"
                      style={{ textDecoration: "none", color: "#666" }}
                    >
                      Sign Up
                    </Link>
                  </Typography>
                </Stack>
              </form>
            </Box>
          </Grid>
          <Grid
            item
            md={5}
            sx={{ display: { md: "block", xs: "none", sm: "none" } }}
          >
            <img
              src={SignImg}
              alt="Sign In"
              style={{ height: "auto", width: "100%", maxWidth: "600px" }}
            />
          </Grid>
        </Grid>
      )}
    </>
  );
}

export default Login;
