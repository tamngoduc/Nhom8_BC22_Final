import React, { useEffect } from "react";
import { Box } from "@mui/material";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getTicketsList } from "../../slices/ticket";
import { useSelector, useDispatch } from "react-redux";

const TableTicket = () => {
  const dispatch = useDispatch();
  const { ticketsList, isTicketsListLoading, ticketsListError } = useSelector(
    (store) => store.ticket
  );
  const userId = useSelector((store) => store.auth.currentUser.user._id);

  useEffect(() => {
    dispatch(getTicketsList(userId));
  }, [userId]);
  if (ticketsListError) {
    return <Box>{ticketsListError}</Box>;
  }
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
            <TableCell>Total Cost</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ticketsList.map((ticket) => (
            <TableRow key={ticket._id}>
              <TableCell>{ticket.roomId?.name}</TableCell>
              <TableCell>{ticket.checkIn}</TableCell>
              <TableCell className="table_img">
                <img src={ticket.roomId?.image} />
              </TableCell>
              <TableCell>{ticket.roomId?.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableTicket;
