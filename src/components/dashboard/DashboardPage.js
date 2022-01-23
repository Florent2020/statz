import React from "react";
import { Grid } from "@material-ui/core";
import PersonIcon from "@mui/icons-material/Person";
import bgVideo from "../../image/bg-video.mp4";

function DashboardPage() {
  return (
    <main className="dashboard">
      <video autoPlay loop muted id="bgVideo">
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className="dash--head">
        <h1 className="name--of--username">Name Nameson</h1>
        <span className="user--email">name@nameson.com</span>
        <div className="username--results">
          <Grid item xs={4} className="left--results">
            <h4 className="ranked">Rangert</h4>
            <span className="ranged--nr">6</span>
          </Grid>
          <Grid item xs={4} className="center--results"></Grid>
          <Grid item xs={4} className="right--results">
            <h4 className="points">Poeng</h4>
            <span className="points--nr">2655</span>
          </Grid>
        </div>
      </div>
      <div className="dash--body">
        <div className="user--body">
          <Grid item xs={4}>
            <select className="today--competition">
              <option value="">Dagens Konkurranse</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <div className="line">
              <hr className="line1" />
              <hr className="line2" />
            </div>
          </Grid>
          <Grid item xs={4} className="square--grid">
            <div className="square"></div>
            <PersonIcon />
          </Grid>
          <Grid item xs={4}>
            <select className="totall--month">
              <option value="">Totalt denne mnd</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <div className="line">
              <hr className="line1" />
              <hr className="line2" />
            </div>
          </Grid>
        </div>
      </div>
    </main>
  );
}

export default DashboardPage;
