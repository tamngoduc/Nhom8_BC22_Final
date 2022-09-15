import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import MUIDataTable from "mui-datatables";
import { useSnackbar } from "notistack";
import { deleteUser, getUsersList } from "../../slices/user";
import IconButton from "@mui/material/IconButton";
import BuildRoundedIcon from "@mui/icons-material/BuildRounded";
import { Box, CircularProgress } from "@mui/material";

const UsersManagement = () => {
  const {
    usersList,
    isUsersListLoading,
    deletedUserResponse,
    deletedUserError,
  } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const successDelete = (variant) => {
    enqueueSnackbar("Delete user successfully!", { variant });
  };
  const errorDelete = (variant) => {
    enqueueSnackbar(`${deletedUserError}`, { variant });
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
    selectableRows: "single",
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
    if (deletedUserError) {
      errorDelete("error");
    }
  }, [deletedUserError]);

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
        <MUIDataTable
          title={"User Management"}
          data={usersList}
          columns={columns}
          options={options}
        />
      )}
    </React.Fragment>
  );
};

export default UsersManagement;
