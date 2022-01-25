import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableBodyComponent from "./TableBody";

function LeaderboardPage() {
  return (
    <>
      <main className="leaderboard">
        <div className="leaderboard__toppliste">
          <Grid container>
            <Grid item xs={4}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Toppliste/Måned
                </InputLabel>
                <Select label="Toppliste/Måned">
                  <MenuItem>Marcus</MenuItem>
                  <MenuItem>Marcus</MenuItem>
                  <MenuItem>Marcus</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </div>
        <div className="alo">
          <div className="tableHead"></div>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              stickyHeader
              aria-label="sticky table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Bruker</TableCell>
                  <TableCell align="right">Antall</TableCell>
                  <TableCell align="right">Verdi</TableCell>
                  <TableCell align="right">Mål</TableCell>
                  <TableCell align="right">%</TableCell>
                </TableRow>
              </TableHead>

              <TableBodyComponent />
              <TableBodyComponent />
              <TableBodyComponent />
              <TableBodyComponent />
              <TableBodyComponent />
            </Table>
          </TableContainer>
        </div>
      </main>
    </>
  );
}

export default LeaderboardPage;
