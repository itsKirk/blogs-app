import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Avatar from '@mui/material/Avatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FiberNewOutlinedIcon from '@mui/icons-material/FiberNewOutlined';
import TocOutlinedIcon from '@mui/icons-material/TocOutlined';
import { useLocation, useNavigate } from 'react-router-dom';
import '../index.css'
const drawerWidth = 240;

const menuItems = [{
    text: "All Blogs",
    path: "/",
    icon: <TocOutlinedIcon />
}, {
    text: "Create Blog",
    path: "/create",
    icon: <FiberNewOutlinedIcon />
}]
export default function Layout({ children }) {
    const navigate = useNavigate()
    const location = useLocation()
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>

                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography component='div' variant="h5" noWrap >
                        JasNat Blog
                    </Typography>
                    <Avatar alt="Kirk" src='hero.jpg' />
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar />
                <Divider />
                <List>
                    {menuItems.map((item) => (
                        <ListItem key={item.text} disablePadding
                            className={location.pathname === item.path ? 'active' : null}
                        >
                            <ListItemButton
                                onClick={() => navigate(item.path)}>
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                <Toolbar />
                {children}
            </Box>
        </Box>
    );
}
