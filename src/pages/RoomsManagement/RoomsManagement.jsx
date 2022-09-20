import * as React from "react";
import MUIDataTable from "mui-datatables";
import { useSnackbar } from "notistack";
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
import { useDispatch, useSelector } from "react-redux";
import { deleteRoom, getRoomDetails, getRoomsList } from "../../slices/room";

const RoomsManagement = () => {
  const {
    roomsList,
    isRoomsListLoading,
    deletedRoomResponse,
    deletedRoomError,
  } = useSelector((state) => state.room);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const successDelete = (variant) => {
    enqueueSnackbar("Delete room successfully!", { variant });
  };
  const errorDelete = (variant) => {
    enqueueSnackbar(`${deletedRoomError}`, { variant });
  };
  const [openModal, setOpenModal] = React.useState(false);
  const handleEdit = (roomId) => {
    setOpenModal(true);
    dispatch(getRoomDetails(roomId));
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
      name: "image",
      label: "Image",
      options: {
        customBodyRender: (value) => {
          return (
            <Box
              component="img"
              src={value}
              sx={{ maxWidth: 50, width: "auto" }}
            />
          );
        },
      },
    },
    {
      name: "locationId",
      label: "Location",
      options: {
        customBodyRender: (value) => {
          return <Box>{value ? `${value.name}, ${value.province}` : null}</Box>;
        },
      },
    },
    {
      name: "guests",
      label: "Guests",
    },
    {
      name: "bedRoom",
      label: "Bed room",
    },
    {
      name: "bath",
      label: "Bath",
    },
    {
      name: "description",
      label: "Description",
    },
    {
      name: "price",
      label: "Price",
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
      const roomId = rowsDeleted.data.map((d) => roomsList[d.dataIndex]._id);
      dispatch(deleteRoom(roomId));
    },
  };

  React.useEffect(() => {
    if (!roomsList.length || deletedRoomResponse) {
      dispatch(getRoomsList(""));
    }
  }, [deletedRoomResponse]);
  React.useEffect(() => {
    if (Object.keys(deletedRoomResponse).length) {
      successDelete("success");
    }
  }, [deletedRoomResponse]);
  React.useEffect(() => {
    if (deletedRoomError) {
      errorDelete("error");
    }
  }, [deletedRoomError]);

  return (
    <React.Fragment>
      {isRoomsListLoading ? (
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
            title={"Room Management"}
            data={roomsList}
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

export default RoomsManagement;
