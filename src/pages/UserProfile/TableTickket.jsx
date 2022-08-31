import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(id, place, time, image, amount, totalCost) {
  return { id, place, time, image, amount, totalCost };
}

const rows = [
  createData(1, "HaLongBay", "22-30/09/2022", "None", "2", "500.000 VND"),
  createData(1, "HaLongBay", "22-30/09/2022", "None", "2", "500.000 VND"),
  createData(1, "HaLongBay", "22-30/09/2022", "None", "2", "500.000 VND"),
];

export default function TableTicket() {
  return (
    <TableContainer component={Paper}>
      <Table
        className="table_ticket"
        sx={{ minWidth: 500 }}
        aria-label="simple table"
      >
        <TableHead className="table_ticket_head">
          <TableRow>
            <TableCell>Place</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Total Cost</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow>
              <TableCell>{row.place}</TableCell>
              <TableCell>{row.time}</TableCell>
              <TableCell>{row.image}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>{row.totalCost}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
