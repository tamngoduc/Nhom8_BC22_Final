import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
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
import {
  deleteLocation,
  getLocationDetails,
  getLocationsList,
} from "../../slices/location";
import LocationForm from "./LocationForm";

const LocationsManagement = () => {
  const {
    locationsList,
    isLocationsListLoading,
    deletedLocationResponse,
    deletedLocationError,

    updatedLocationResponse,
    isUpdatedLocationLoading,
    updatedLocationError,
    createdLocationResponse,
    isCreatedLocationLoading,
    createdLocationError,
    uploadedLocationImageResponse,
    isUploadedLocationImageLoading,
    uploadedLocationImageError,
  } = useSelector((state) => state.location);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const successDelete = (variant) => {
    enqueueSnackbar("Delete location successfully!", { variant });
  };
  const errorDelete = (variant) => {
    enqueueSnackbar(`${deletedLocationError}`, { variant });
  };
  const [openModal, setOpenModal] = React.useState(false);
  const handleEdit = (locationId) => {
    setOpenModal(true);
    dispatch(getLocationDetails(locationId));
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
      name: "province",
      label: "Province",
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
      name: "valueate",
      label: "Evaluate",
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
      const locationId = rowsDeleted.data.map(
        (d) => locationsList[d.dataIndex]._id
      );
      dispatch(deleteLocation(locationId));
    },
  };

  React.useEffect(() => {
    if (
      !locationsList.length ||
      deletedLocationResponse ||
      updatedLocationResponse ||
      createdLocationResponse ||
      uploadedLocationImageResponse
    ) {
      dispatch(getLocationsList(""));
    }
  }, [
    deletedLocationResponse,
    updatedLocationResponse,
    createdLocationResponse,
    uploadedLocationImageResponse,
  ]);
  React.useEffect(() => {
    if (Object.keys(deletedLocationResponse).length) {
      successDelete("success");
    }
  }, [deletedLocationResponse]);
  React.useEffect(() => {
    if (deletedLocationError) {
      errorDelete("error");
    }
  }, [deletedLocationError]);

  return (
    <React.Fragment>
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
        <Box>
          <MUIDataTable
            title={"Location Management"}
            data={locationsList}
            columns={columns}
            options={options}
          />

          <Dialog open={openModal}>
            <DialogTitle sx={{ m: 0, p: 2 }}>
              <Typography>adsd</Typography>
              {/* {selectedPhim?.current?.tenPhim
                ? `S???a phim: ${selectedPhim?.current?.tenPhim}`
                : "Th??m Phim"} */}
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
            <DialogContent dividers>
              <LocationForm />
            </DialogContent>
          </Dialog>
        </Box>
      )}
    </React.Fragment>
  );
};

export default LocationsManagement;
