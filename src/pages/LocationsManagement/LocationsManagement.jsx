import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { deleteLocation, getLocationsList } from "../../slices/location";

const LocationsManagement = () => {
  const {
    locationsList,
    isLocationsListLoading,
    deletedLocationResponse,
    deletedLocationError,
  } = useSelector((state) => state.location);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const successDelete = (variant) => {
    enqueueSnackbar("Delete location successfully!", { variant });
  };
  const errorDelete = (variant) => {
    enqueueSnackbar(`${deletedLocationError}`, { variant });
  };
  const columns = [
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
      const locationId = rowsDeleted.data.map(
        (d) => locationsList[d.dataIndex]._id
      );
      dispatch(deleteLocation(locationId));
    },
  };

  React.useEffect(() => {
    if (!locationsList.length) {
      dispatch(getLocationsList(""));
    }
  }, []);
  React.useEffect(() => {
    if (Object.keys(deletedLocationResponse).length) {
      successDelete("success");
      dispatch(getLocationsList(""));
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
        <MUIDataTable
          title={"Location Management"}
          data={locationsList}
          columns={columns}
          options={options}
        />
      )}
    </React.Fragment>
  );
};

export default LocationsManagement;
