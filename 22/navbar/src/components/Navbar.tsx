import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import { Menu } from '@mui/material';
import { Menu } from 'lucide-react';

export default function Navbar({ isResponsive = false, isVertical = false }: { isResponsive: boolean, isVertical: boolean }) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ width: isVertical ? 100 : 1000, height: isVertical ? 1000 : 100 }}>
                <Toolbar sx={{
                    osition: isVertical ? 'sticky' : '',
                    flexDirection: isVertical ? 'column' : ''
                }}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        {isResponsive ? <Menu /> : <></>}
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
