import * as React from "react";
import MUIDataTable from "mui-datatables";
import { useSnackbar } from "notistack";
import IconButton from "@mui/material/IconButton";
import BuildRoundedIcon from "@mui/icons-material/BuildRounded";
import { Box, CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deleteRoom, getRoomsList } from "../../slices/room";

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
  const columns = [
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
      const roomId = rowsDeleted.data.map((d) => roomsList[d.dataIndex]._id);
      dispatch(deleteRoom(roomId));
    },
  };

  React.useEffect(() => {
    if (!roomsList.length) {
      dispatch(getRoomsList(""));
    }
  }, []);
  React.useEffect(() => {
    if (Object.keys(deletedRoomResponse).length) {
      successDelete("success");
      dispatch(getRoomsList(""));
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
        <MUIDataTable
          title={"Room Management"}
          data={roomsList}
          columns={columns}
          options={options}
        />
      )}
    </React.Fragment>
  );
};

export default RoomsManagement;
