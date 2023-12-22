import './Sidebar.css'
// import { useState } from "react";
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
// import { Box, IconButton, Typography, useTheme } from "@mui/material";

//Importing Icons
import { GridViewRounded, Mail, Folder, Label, Sort } from '@mui/icons-material';

// import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
// import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
// import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
// import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
// import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
// import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
// import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
// import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
// import MapOutlinedIcon from "@mui/icons-material/MapOutlined";


// const Item = ({ title, to, icon, selected, setSelected }) => {
//     const theme = useTheme();
//     // const colors = tokens(theme.palette.mode);
//     return (
//       <MenuItem
//         active={selected === title}
//         // style={{
//         //   color: colors.grey[100],
//         // }}
//         onClick={() => setSelected(title)}
//         icon={icon}
//       >
//         <Typography>{title}</Typography>
//         <Link to={to} />
//       </MenuItem>
//     );
// };

// const Sidebar_ = () => {

//     const [isCollapsed, setIsCollapsed] = useState(false);
//     const [selected, setSelected] = useState("Dashboard");


//     return (
//         <Box
//         sx={{
//           "& .pro-sidebar-inner": {
//             background: `#868dfb !important`,
//             // background: `${colors.primary[400]} !important`,
//           },
//           "& .pro-icon-wrapper": {
//             backgroundColor: "transparent !important",
//           },
//           "& .pro-inner-item": {
//             padding: "5px 35px 5px 20px !important",
//           },
//           "& .pro-inner-item:hover": {
//             color: "#868dfb !important",
//           },
//           "& .pro-menu-item.active": {
//             color: "#6870fa !important",
//           },
//         }}
//       >
//         <Sidebar collapsed={isCollapsed}>
//             <Menu /*iconShape="square"*/ >
            
//                 {/* LOGO AND MENU ICON */}
//                 <MenuItem
//                     onClick={() => setIsCollapsed(!isCollapsed)}
//                     icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
//                     style={{
//                     margin: "10px 0 20px 0",
//                     // color: colors.grey[100],
//                     }}
//                 >
//                     {!isCollapsed && (
//                     <Box
//                         display="flex"
//                         justifyContent="space-between"
//                         alignItems="center"
//                         ml="15px"
//                     >
//                         <Typography variant="h3" 
//                         // color={colors.grey[100]}
//                         >
//                         ADMINIS
//                         </Typography>
//                         <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
//                         <MenuOutlinedIcon />
//                         </IconButton>
//                     </Box>
//                     )}
//                 </MenuItem>

//                 {/* <Box paddingLeft={isCollapsed ? undefined : "10%"}>
//                     <MenuItem
//                         active={selected === "Dashboard"}
//                         // style={{
//                         //   color: colors.grey[100],
//                         // }}
//                         onClick={() => setSelected("Dashboard")}
//                         icon={<HomeOutlinedIcon />}
//                     >
//                         <Typography>{"Dashboard"}</Typography>
//                         <Link to={"/"} />
//                     </MenuItem>
                                        
//                     <Typography
//                     variant="h6"
//                     color={colors.grey[300]}
//                     sx={{ m: "15px 0 5px 20px" }}
//                     >
//                     Data
//                     </Typography>
//                     <Item
//                     title="Manage Team"
//                     to="/team"
//                     icon={<PeopleOutlinedIcon />}
//                     selected={selected}
//                     setSelected={setSelected}
//                     />
//                     <Item
//                     title="Contacts Information"
//                     to="/contacts"
//                     icon={<ContactsOutlinedIcon />}
//                     selected={selected}
//                     setSelected={setSelected}
//                     />
//                     <Item
//                     title="Invoices Balances"
//                     to="/invoices"
//                     icon={<ReceiptOutlinedIcon />}
//                     selected={selected}
//                     setSelected={setSelected}
//                     />
//                 </Box> */}
//             </Menu>
//         </Sidebar>
//       </Box>
//     )
// }

let Sidebar_ = () => {
  return (
    <Sidebar className="sidebar">
      <h2 className="title">
        Inborto
      </h2>
      <Menu
        menuItemStyles={{
          button: {
            // the active class will be added automatically by react router
            // so we can use it to style the active menu item
            [`&.active`]: {
              backgroundColor: '#13395e',
              color: '#b6c8d9',
            },
          },
        }} >
        
        <MenuItem icon={<GridViewRounded />}  component={<Link to="/" />}> Dashboard</MenuItem>
        <MenuItem icon={<Mail />} component={<Link to="/inbox" />}> Inbox</MenuItem>
        <MenuItem icon={<Sort />} component={<Link to="/sort-rules" />}> Sort Rules</MenuItem>
        <MenuItem icon={<Folder />} component={<Link to="/folder" />}> Folder</MenuItem>
        <MenuItem icon={<Label />} component={<Link to="/labels" />}> Labels</MenuItem>
      </Menu>
    </Sidebar>
  )
}

export default Sidebar_;
