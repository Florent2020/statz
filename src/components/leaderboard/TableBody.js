import React from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import ReportRoundedIcon from "@mui/icons-material/ReportRounded";
import { Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

function TableBodyComponent() {
  return (
    <>
      <TableBody>
        <TableRow>
          <TableCell component="th" scope="row" className="user__body">
            <div className="user__body--bg-color">
              <Typography variant="paragraph" className="user__body--nr">
                1
              </Typography>
              <div className="user__body--profile">
                <Typography variant="paragraph" className="user--bg">
                  <PersonIcon />
                </Typography>
              </div>
              <div className="user__div">
                <div className="user__results">
                  <Typography variant="h6">Marcus</Typography>
                  <Typography variant="h6">18.550 kr</Typography>
                </div>
                <div className="line__style"></div>
              </div>
            </div>
          </TableCell>
          <TableCell align="right" className="quantity__body">
            <span>7</span>
            <ReportRoundedIcon />
          </TableCell>
          <TableCell align="right">121 000 kr</TableCell>
          <TableCell align="right">94 499 kr</TableCell>
          <TableCell align="right">144,87 %</TableCell>
        </TableRow>
      </TableBody>
    </>
  );
}

export default TableBodyComponent;
