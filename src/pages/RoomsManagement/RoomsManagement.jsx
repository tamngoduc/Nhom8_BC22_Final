import * as React from "react";
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
import { getRoomsList } from "../../slices/room";

const RoomsManagement = () => {
  const { roomsList } = useSelector((state) => state.room);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [page, setPage] = React.useState(0);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!roomsList.length) {
      dispatch(getRoomsList(""));
    }
  }, []);

  return (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Room Management
      </Typography>

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
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Guest Max</TableCell>
                <TableCell>Manipulation</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {roomsList
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((room) => (
                  <TableRow key={room._id}>
                    <TableCell>{room.name}</TableCell>
                    <TableCell>{room.image}</TableCell>
                    <TableCell>{room.location}</TableCell>
                    <TableCell>{room.guestMax}</TableCell>
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
          </Table>
          <br />
          <Stack spacing={2}>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
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
