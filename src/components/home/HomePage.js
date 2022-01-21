import { Typography, Grid } from "@material-ui/core";
import React from "react";
import bgVideo from "../../image/bg-video.mp4";

function HomePage() {
  return (
    <main className="home">
      <video autoPlay loop muted id="bgVideo">
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className="home__grid">
        <Grid item xs={7}>
          <div className="left__home">
            <Typography variant="h4">/ 01</Typography>
            <div className="line">
              <hr className="line1" />
              <hr className="line2" />
            </div>
            <Typography variant="h6">
              Et verktøy for bedrifter innen salg
            </Typography>
            <Typography paragraph>Skaper vinnervilje og øker salget</Typography>
            <Typography paragraph>Prøv gratis første måned</Typography>
          </div>
        </Grid>
        <Grid item xs={5}>
          <div className="right__home">
            <Typography variant="h1">
              Kongen <br />
              <span>på</span> Haugen
            </Typography>
            <Typography paragraph>Bli #1 med Statz!</Typography>
            <Typography paragraph>
              Et perfekt verktøy for å øke
              <span> motivasjon, engasjement og salg.</span>
            </Typography>
          </div>
        </Grid>
      </div>
    </main>
  );
}

export default HomePage;
