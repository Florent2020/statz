import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import image from "../../image/nr1.png";
import MobileStepper from "@mui/material/MobileStepper";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <Grid item xs={4}>
          <Typography variant="h6">Dagens konkurranse</Typography>
          <Typography paragraph>
            Selg mest some bedrift og vinn premier
          </Typography>
          <Typography paragraph>
            <strong>Login og meld dere på innen 10.februar 2023!</strong>
          </Typography>
          <MobileStepper
            variant="dots"
            steps={3}
            position="static"
            sx={{ maxWidth: 400, flexGrow: 1 }}
          />
        </Grid>
        <Grid item xs={3}>
          <Typography paragraph className="marginTop">
            Vinner får Apple iPad og Statz-veske
          </Typography>
          <Typography paragraph>
            <strong>Påmelding via dashboard</strong>
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <img src={image} alt="img" />
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6">Nyheter</Typography>
          <Typography paragraph>Oppdatering 1.1 kommer snart ut</Typography>
          <Typography paragraph>
            <strong>Satzer på å rekke innen 2023</strong>
          </Typography>
          <Button href="#">Les Mer</Button>
        </Grid>
      </div>
    </footer>
  );
}

export default Footer;
