import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import bgVideo from "../../image/bg-video.mp4";

function LoginPage() {
  return (
    <main className="login">
      <div className="login__page">
        <video autoPlay loop muted id="bgVideo">
          <source src={bgVideo} type="video/mp4" />
        </video>
        <Box component="form" sx={{ width: "400px" }}>
          <TextField
            id="outlined-basic username"
            label="Username"
            variant="outlined"
          />
          <TextField
            id="outlined-basic password"
            label="Password"
            variant="outlined"
          />
          <Button variant="contained">Login</Button>
        </Box>
      </div>
    </main>
  );
}

export default LoginPage;
