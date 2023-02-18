import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Apartment from '@mui/icons-material/Apartment';
import { Link } from 'react-router-dom';


const drawerWidth = 240;
const navItems = [
    {
        "link": "Home",
        "path": "/samuelsastoqueg"
    },
    {
        "link": "About",
        "path": "/samuelsastoqueg/about"
    },
    {
        "link": "Team",
        "path": "/samuelsastoqueg/team"
    },
    {   
        "link": "SOP",
        "path": "/samuelsastoqueg/sop"
    },
    {   
        "link": "Channels",
        "path": "/samuelsastoqueg/channels"
    },
    {   
        "link": "Gantt",
        "path": "/samuelsastoqueg/gantt"
    }
]

function Navbar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);


    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Apartment/>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.link} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }} >
                            <Link to={item.path}
                                style={{  color:"black", textDecoration:"none" }}
                            >{item.link}</Link>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" >
                <Toolbar position='sticky'>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        ESTANCIAS ÚNICAS    
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button key={item.link} sx={{ color: '#fff' }} component="a" href={item.path}>
                                <Link to={item.path}
                                    style={{ color:"white", textDecoration:"none" }}
                                >{item.link}</Link>
                            </Button>
                            ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}

export default Navbar;

/*

     {navItems.map((item) => (
                            <Button key={item} sx={{ color: '#fff' }}>
                                {item}
                            </Button>
                        ))}

*/

/*

                        <Button sx={{ color: '#fff' }} href="/">Home</Button>
                        <Button sx={{ color: '#fff' }} href="/about">About</Button>
                        <Button sx={{ color: '#fff' }} href="/team">Team</Button>
                        <Button sx={{ color: '#fff' }} href="/sop">SOP</Button>

*/