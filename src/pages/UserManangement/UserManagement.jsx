import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import MUIDataTable from "mui-datatables";
import { useSnackbar } from "notistack";
import { deleteUser, getUsersList } from "../../slices/user";
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
  TablePagination,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";

const UsersManagement = () => {
  const {
    usersList,
    isUsersListLoading,
    deletedUserResponse,
    deletedUserResponseError,
  } = useSelector((state) => state.user);
  // const pages = [10, 25, 50];
  // const [page, setPage] = React.useState(0);
  // const [rowsPerPage, setRowsPerPage] = React.useState(pages[page]);
  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };
  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(parseInt(event.target.value, 10));
  //   setPage(0);
  // };
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const successDelete = (variant) => {
    enqueueSnackbar("Delete user successfully!", { variant });
  };
  const errorDelete = (variant) => {
    enqueueSnackbar(`${deletedUserResponseError}`, { variant });
  };
  const columns = [
    {
      name: "name",
      label: "Name",
    },
    {
      name: "email",
      label: "Email",
    },
    {
      name: "phone",
      label: "Phone",
    },
    {
      name: "address",
      label: "Address",
    },
    {
      name: "type",
      label: "Type",
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
      const userId = rowsDeleted.data.map((d) => usersList[d.dataIndex]._id);
      dispatch(deleteUser(userId));
    },
  };

  React.useEffect(() => {
    if (!usersList.length) {
      dispatch(getUsersList());
    }
  }, []);

  React.useEffect(() => {
    if (Object.keys(deletedUserResponse).length) {
      successDelete("success");
      dispatch(getUsersList());
    }
  }, [deletedUserResponse]);

  React.useEffect(() => {
    if (deletedUserResponseError) {
      errorDelete("error");
    }
  }, [deletedUserResponseError]);

  return (
    <React.Fragment>
      {isUsersListLoading ? (
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
            title={"User Management"}
            data={usersList}
            columns={columns}
            options={options}
          />
          {/* <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Manipulation</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {usersList
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((user) => (
                  <TableRow key={user._id}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.phone}</TableCell>
                    <TableCell>{user.address}</TableCell>
                    <TableCell>{user.type}</TableCell>
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
              count={usersList.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Stack> */}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default UsersManagement;
