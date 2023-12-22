import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';

// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import React from 'react';
// import Button from '@mui/material/Button';

function Topbar(props: { title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='transparent'>
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {props.title}
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Topbar;