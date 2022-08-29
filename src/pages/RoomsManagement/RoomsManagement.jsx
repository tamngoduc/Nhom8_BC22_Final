import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import BuildRoundedIcon from "@mui/icons-material/BuildRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import { Pagination, Stack, Typography } from "@mui/material";

const RoomsManagement = () => {
  return (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Room Management
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Room Id</TableCell>
            <TableCell>Room Name</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Guest Max</TableCell>
            <TableCell>Manipulation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.image}</TableCell>
              <TableCell>{row.location}</TableCell>
              <TableCell>{row.guestMax}</TableCell>
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
          ))} */}
        </TableBody>
      </Table>
      <br />
      <Stack spacing={2}>
        <Pagination count={10} />
      </Stack>
    </React.Fragment>
  );
};

export default RoomsManagement;
