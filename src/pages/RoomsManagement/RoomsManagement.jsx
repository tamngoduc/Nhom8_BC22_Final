import * as React from "react";
import MUIDataTable from "mui-datatables";
import { useSnackbar } from "notistack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import BuildRoundedIcon from "@mui/icons-material/BuildRounded";
import {
  Box,
  CircularProgress,
  Stack,
  TablePagination,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deleteRoom, getRoomsList } from "../../slices/room";

const RoomsManagement = () => {
  const { roomsList } = useSelector((state) => state.room);
  const pages = [10, 25, 50];
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(pages[page]);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const dispatch = useDispatch();
  const columns = [
    {
      name: "name",
      label: "Name",
    },
    {
      name: "image",
      label: "Image",
      customBodyRender: (value, tableMeta, updateValue) => {},
    },
    {
      name: "locationId.name",
      label: "Location",
    },
    {
      name: "address",
      label: "Address",
    },
    {
      name: "Manipulation",
      options: {
        filter: true,
        sort: false,
        empty: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <IconButton
              color="warning"
              aria-label="delete"
              onClick={() =>
                window.alert(`Clicked "Edit" for row ${tableMeta.rowIndex}`)
              }
            >
              <BuildRoundedIcon />
            </IconButton>
          );
        },
      },
    },
  ];
  const options = {
    filter: true,
    selectableRows: "multiple",
    filterType: "dropdown",
    responsive: "vertical",
    rowsPerPage: 10,
    onRowsDelete: (rowsDeleted) => {
      const userId = rowsDeleted.data.map((d) => roomsList[d.dataIndex]._id);
      dispatch(deleteRoom(userId));
    },
  };

  React.useEffect(() => {
    if (!roomsList.length) {
      dispatch(getRoomsList(""));
    }
  }, []);

  return (
    <React.Fragment>
      {/* <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Room Management
      </Typography> */}

      {!roomsList.length ? (
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
        <React.Fragment>
          <MUIDataTable
            title={"Room Management"}
            data={roomsList}
            columns={columns}
            options={options}
          />
          {/* <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Manipulation</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {roomsList
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((room) => (
                  <TableRow key={room._id}>
                    <TableCell>{room.name}</TableCell>
                    <TableCell>
                      <Box
                        component="img"
                        src={room.image}
                        sx={{ maxWidth: 50, width: "auto" }}
                      />
                    </TableCell>
                    <TableCell>
                      {room.locationId?.name}, {room.locationId?.province}
                    </TableCell>
                    <TableCell>
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
          </Table> */}
          <br />
          <Stack spacing={2}>
            <TablePagination
              rowsPerPageOptions={pages}
              component="div"
              count={roomsList.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Stack>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default RoomsManagement;
