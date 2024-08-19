import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { MdSportsEsports } from "react-icons/md";

const Sidebar = () => {
  const genres = [
    { name: "Action", icon: <MdSportsEsports /> },
    { name: "Adventure", icon: <MdSportsEsports /> },
    { name: "Shooter", icon: <MdSportsEsports /> },
    { name: "Sports", icon: <MdSportsEsports /> },
    { name: "Strategy", icon: <MdSportsEsports /> },
  ];

  return (
    <div style={{ width: 240, backgroundColor: "#181818", color: "#fff" }}>
      <List>
        {genres.map((genre) => (
          <ListItem button key={genre.name}>
            <ListItemIcon style={{ color: "#fff" }}>{genre.icon}</ListItemIcon>
            <ListItemText primary={genre.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Sidebar;
