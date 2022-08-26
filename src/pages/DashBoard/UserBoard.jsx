import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import BasicPagination from "./Panigation";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import BuildRoundedIcon from "@mui/icons-material/BuildRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
// Generate Order Data
function createData(id, name, avatar, description, role) {
  return { id, name, avatar, description, role };
}

const rows = [
  createData(0, "Long", "None", "dep trai", "Sieunhan"),
  createData(0, "Long", "None", "dep trai", "Sieunhan"),
  createData(0, "Long", "None", "dep trai", "Sieunhan"),
  createData(0, "Long", "None", "dep trai", "Sieunhan"),
  createData(0, "Long", "None", "dep trai", "Sieunhan"),
  createData(0, "Long", "None", "dep trai", "Sieunhan"),
  createData(0, "Long", "None", "dep trai", "Sieunhan"),
  createData(0, "Long", "None", "dep trai", "Sieunhan"),
  createData(0, "Long", "None", "dep trai", "Sieunhan"),
  createData(0, "Long", "None", "dep trai", "Sieunhan"),
  createData(0, "Long", "None", "dep trai", "Sieunhan"),
  createData(0, "Long", "None", "dep trai", "Sieunhan"),
  createData(0, "Long", "None", "dep trai", "Sieunhan"),
  createData(0, "Long", "None", "dep trai", "Sieunhan"),
  createData(0, "Long", "None", "dep trai", "Sieunhan"),
  createData(0, "Long", "None", "dep trai", "Sieunhan"),
];

export default function UserBoard() {
  return (
    <React.Fragment>
      <Title>User Management</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>User Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Avatar</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Manipulation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.avatar}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>{row.role}</TableCell>
              <TableCell>
                <IconButton color="success" aria-label="delete">
                  <VisibilityRoundedIcon />
                </IconButton>
                <IconButton color="warning" aria-label="delete">
                  <BuildRoundedIcon />
                </IconButton>
                <IconButton color="error" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <br />
      <BasicPagination />
    </React.Fragment>
  );
}
