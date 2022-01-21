// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Nav from "./components/layout/Nav";
import HomePage from "./components/home/HomePage";
import LoginPage from "./components/login/LoginPage";
import RegisterPage from "./components/register/RegisterPage";
import DashboardPage from "./components/dashboard/DashboardPage";
import LeaderboardPage from "./components/leaderboard/LeaderboardPage";
import Footer from "./components/layout/Footer";
import "./sass/style.scss";
import Header from "./components/layout/Header";
import PublicIcon from "@material-ui/icons/Public";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

function App() {
  return (
    <div className="App">
      <Router>
        <Grid container>
          <Grid item xs={1}>
            <Header />
            <div className="header__icons">
              <PublicIcon />
              <CloseRoundedIcon />
              <PersonRoundedIcon />
            </div>
          </Grid>
          <Grid item xs={11}>
            <Nav />
            <Routes>
              <Route path="/" exact element={<HomePage />} />
            </Routes>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
            </Routes>
            <Routes>
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
            <Routes>
              <Route path="/dashboard" element={<DashboardPage />} />
            </Routes>
            <Routes>
              <Route path="/leaderboard" element={<LeaderboardPage />} />
            </Routes>
            <Footer />
          </Grid>
        </Grid>
      </Router>
    </div>
  );
}

export default App;
