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

function LoginPage() {
  return (
    <main className="login">
      <div className="login__page">
        <video autoPlay loop muted id="bgVideo">
          <source src={bgVideo} type="video/mp4" />
        </video>
        <Box component="form">
          <Grid item xs={7}>
            <div className="login--header">
              <img src={Logo} alt="logo" className="logo" />
              <Typography variant="h1">Sign in to Statz</Typography>
              <div className="login--social__media">
                <Link to="#">
                  <FacebookIcon />
                </Link>
                <Link to="#">
                  <LinkedInIcon />
                </Link>
              </div>
              <Typography variant="paragraph">
                or use your email account:
              </Typography>
            </div>
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
            <div className="forgot--pass">
              <Link to="#">Forgot your password?</Link>
            </div>
            <Button variant="contained">Sign in</Button>
          </Grid>

          <Grid item xs={5}>
            <Typography variant="h2">Hello, Friend!</Typography>
            <Typography variant="paragraph">
              Enter your personal details and start journey with us
            </Typography>
            <Button variant="contained">
              <Link to="/sign-up">Sign up</Link>
            </Button>
          </Grid>
        </Box>
      </div>
    </main>
  );
}

export default LoginPage;
