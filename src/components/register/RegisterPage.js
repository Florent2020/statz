import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import bgVideo from "../../image/bg-video.mp4";
import Logo from "../../image/logo.png";
import { Grid, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";

function RegisterPage() {
  return (
    <main className="register">
      <div className="register__page">
        <video autoPlay loop muted id="bgVideo">
          <source src={bgVideo} type="video/mp4" />
        </video>
        <Box component="form">
          <Grid item xs={5}>
            <Typography variant="h2">Welcome Back!</Typography>
            <Typography variant="paragraph">
              To keep connected with us please login with your personal info!
            </Typography>
            <Link to="/login">
              <Button variant="contained">Sign in</Button>
            </Link>
          </Grid>

          <Grid item xs={7}>
            <div className="login--header">
              <img src={Logo} alt="logo" className="logo" />
              <Typography variant="h1">Create Account</Typography>
              <div className="login--social__media">
                <Link to="#">
                  <FacebookIcon />
                </Link>
                <Link to="#">
                  <LinkedInIcon />
                </Link>
              </div>
              <Typography variant="paragraph">
                or use your email for registration:
              </Typography>
            </div>
            <TextField
              id="outlined-basic name"
              label="Name"
              variant="outlined"
            />
            <TextField
              id="outlined-basic email"
              label="Email"
              variant="outlined"
            />
            <TextField
              id="filled-adornment-password"
              label="Password"
              variant="outlined"
              type="password"
            />
            <Button variant="contained">Sign up</Button>
          </Grid>
        </Box>
      </div>
    </main>
  );
}

export default RegisterPage;
