import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { getLocationsList } from "../../slices/location";

const LocationsManagement = () => {
  const { locationsList, isLocationsListLoading } = useSelector(
    (state) => state.location
  );
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

  React.useEffect(() => {
    if (!locationsList.length) {
      dispatch(getLocationsList(""));
    }
  }, []);

  return (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Location Management
      </Typography>

      {isLocationsListLoading ? (
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
                <TableCell>Province</TableCell>
                <TableCell>Manipulation</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {locationsList
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((location) => (
                  <TableRow key={location._id}>
                    <TableCell>{location.name}</TableCell>
                    <TableCell>
                      <Box
                        component="img"
                        src={location.image}
                        sx={{ maxWidth: 50, width: "auto" }}
                      />
                    </TableCell>
                    <TableCell>{location.province}</TableCell>
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
              rowsPerPageOptions={pages}
              component="div"
              count={locationsList.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Stack>
        </React.Fragment>
      )}
      <br />
    </React.Fragment>
  );
};

export default LocationsManagement;
