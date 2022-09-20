import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import MUIDataTable from "mui-datatables";
import { useSnackbar } from "notistack";
import { deleteUser, getUserDetails, getUsersList } from "../../slices/user";
import IconButton from "@mui/material/IconButton";
import BuildRoundedIcon from "@mui/icons-material/BuildRounded";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";

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
  const [openModal, setOpenModal] = React.useState(false);
  const handleEdit = (userId) => {
    setOpenModal(true);
    dispatch(getUserDetails(userId));
  };
  const handleClose = () => {
    setOpenModal(false);
  };
  const columns = [
    {
      name: "_id",
      label: "ID",
      options: {
        display: false,
      },
    },
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
              onClick={() => handleEdit(tableMeta.rowData[0])}
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
    if (!usersList.length || deletedUserResponse) {
      dispatch(getUsersList());
    }
  }, [deletedUserResponse]);
  React.useEffect(() => {
    if (Object.keys(deletedUserResponse).length) {
      successDelete("success");
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
        <Box>
          <MUIDataTable
            title={"User Management"}
            data={usersList}
            columns={columns}
            options={options}
          />
          <Dialog open={openModal}>
            <DialogTitle sx={{ m: 0, p: 2 }}>
              <Typography>adsd</Typography>
              {/* {selectedPhim?.current?.tenPhim
                ? `Sửa phim: ${selectedPhim?.current?.tenPhim}`
                : "Thêm Phim"} */}
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                  position: "absolute",
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent dividers></DialogContent>
          </Dialog>
        </Box>
      )}
    </React.Fragment>
  );
};

export default UsersManagement;
