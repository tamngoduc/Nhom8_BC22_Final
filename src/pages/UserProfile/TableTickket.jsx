import React, { useEffect } from "react";
import MUIDataTable from "mui-datatables";
import { Box, CircularProgress } from "@mui/material";
import { getTicketsList } from "../../slices/ticket";
import { useSelector, useDispatch } from "react-redux";

const TableTicket = () => {
  const dispatch = useDispatch();
  const { ticketsList, isTicketsListLoading, ticketsListError } = useSelector(
    (store) => store.ticket
  );
  const userId = useSelector((store) => store.auth.currentUser.user._id);
  const columns = [
    {
      name: "roomId",
      label: "Place",
      options: {
        customBodyRender: (value) => {
          return <Box>{value?.name}</Box>;
        },
        filter: true,
        display: "true",
        customFilterListOptions: { render: (value) => value.name },
      },
    },
    {
      name: "checkIn",
      label: "Check-In",
      options: {
        customBodyRender: (value) => {
          return <Box>{value.slice(0, 10)}</Box>;
        },
      },
    },
    {
      name: "checkOut",
      label: "Check-Out",
      options: {
        customBodyRender: (value) => {
          return <Box>{value.slice(0, 10)}</Box>;
        },
      },
    },
    {
      name: "roomId",
      label: "Image",
      options: {
        customBodyRender: (value) => {
          return (
            <Box
              component="img"
              src={value?.image}
              sx={{ maxWidth: 50, width: "auto" }}
            />
          );
        },
      },
    },
    {
      name: "roomId",
      label: "Price (VND)",
      options: {
        customBodyRender: (value) => {
          return <Box>{value?.price}</Box>;
        },
      },
    },
  ];
  const options = {
    filter: false,
    selectableRows: "none",
    filterType: "dropdown",
    responsive: "vertical",
    rowsPerPage: 5,
    rowsPerPageOptions: [5, 10, 15],
  };

  useEffect(() => {
    dispatch(getTicketsList(userId));
  }, [userId]);

  if (ticketsListError) {
    return <Box>{ticketsListError}</Box>;
  }

  return (
    <React.Fragment>
      {isTicketsListLoading ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <MUIDataTable
          // className="table_ticket"
          title={"Reservations History"}
          data={ticketsList.map((ticket) => ticket).reverse()}
          columns={columns}
          options={options}
        />
      )}
    </React.Fragment>
  );
};

export default TableTicket;
