import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import { FaSearch } from "react-icons/fa";
import { getLocationsList } from "../../../slices/location";
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { useNavigate } from "react-router-dom";

const MobileSearch = () => {
  const { locationsList } = useSelector((state) => state.location);

  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const [display, setDisplay] = useState("none");
  const handleSearch = (e) => {
    setSearch(e.target.value);
    if (search !== "" && search !== " ") {
      setDisplay("block");
    } else {
      setDisplay("none");
    }
  };

  useEffect(() => {
    dispatch(getLocationsList(""));
  }, []);

  return (
    <Box sx={{ pt: 2 }}>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 400,
          border: "1px solid #ccc",
        }}
      >
        <IconButton sx={{ p: "10px" }}>
          <FaSearch />
        </IconButton>

        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Where to go"
          onChange={handleSearch}
        />
      </Paper>
      <List
        sx={{
          maxHeight: 300,
          overflow: "auto",
          borderRadius: "5px",
          boxShadow: "3",
          display: `${display}`,
        }}
      >
        {locationsList
          .filter((item) =>
            String(item.name).toLowerCase().includes(search.toLowerCase())
          )
          .map((location) => {
            return (
              <ListItem
                key={location._id}
                onClick={() => {
                  navigate(`/rooms/${location._id}`);
                  setDisplay("none");
                }}
              >
                <ListItemButton>
                  <ListItemAvatar>
                    <Avatar>
                      <LocationOnOutlinedIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={location.name} />
                </ListItemButton>
              </ListItem>
            );
          })}
      </List>
    </Box>
  );
};

export default MobileSearch;

// import React, { useRef, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import Paper from "@mui/material/Paper";
// import InputBase from "@mui/material/InputBase";
// import IconButton from "@mui/material/IconButton";
// import { FaSearch } from "react-icons/fa";
// import { getLocationsList } from "../../../slices/location";
// import {
//   Avatar,
//   Box,
//   List,
//   ListItem,
//   ListItemAvatar,
//   ListItemButton,
//   ListItemText,
// } from "@mui/material";
// import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
// import { useNavigate } from "react-router-dom";

// const MobileSearch = () => {
//   const { locationsList } = useSelector((state) => state.location);
//   const dispatch = useDispatch();
//   const inputRef = useRef("");
//   const [display, setDisplay] = useState("none");
//   const navigate = useNavigate();
//   const handleSearch = () => {
//     dispatch(getLocationsList(inputRef.current.value));
//     if (inputRef.current.value !== "" && inputRef.current.value !== " ") {
//       setDisplay("display");
//     } else {
//       setDisplay("none");
//     }
//   };

//   return (
//     <Box sx={{ pt: 2 }}>
//       <Paper
//         component="form"
//         sx={{
//           p: "2px 4px",
//           display: "flex",
//           alignItems: "center",
//           width: 400,
//           border: "1px solid #ccc",
//         }}
//       >
//         <IconButton sx={{ p: "10px" }}>
//           <FaSearch />
//         </IconButton>

//         <InputBase
//           sx={{ ml: 1, flex: 1 }}
//           placeholder="Where to go"
//           inputRef={inputRef}
//           onChange={handleSearch}
//         />
//       </Paper>
//       <List
//         sx={{
//           maxHeight: 300,
//           overflow: "auto",
//           borderRadius: "5px",
//           boxShadow: "3",
//           display: `${display}`,
//         }}
//       >
//         {locationsList.map((location) => {
//           return (
//             <ListItem
//               key={location._id}
//               onClick={() => navigate(`/rooms/${location._id}`)}
//             >
//               <ListItemButton>
//                 <ListItemAvatar>
//                   <Avatar>
//                     <LocationOnOutlinedIcon />
//                   </Avatar>
//                 </ListItemAvatar>
//                 <ListItemText primary={location.name} />
//               </ListItemButton>
//             </ListItem>
//           );
//         })}
//       </List>
//     </Box>
//   );
// };

// export default MobileSearch;
