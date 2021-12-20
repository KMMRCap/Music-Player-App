import React, { useContext } from "react";

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Contexts } from './../../context/Context';

const SideMenu = () => {

    const { songs, menuToggle, setMenuToggle, setActiveSong } = useContext(Contexts);

    const handleDrawerClose = () => {
        setMenuToggle(false)
    }

    const handleActiveSong = (id) => {
        const activeSong = songs.filter(song => song.id === id);
        setActiveSong(activeSong[0]);
        setMenuToggle(false)
    }

    return (
        <Drawer
            sx={{
                width: 'auto', flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: 'auto',
                    boxSizing: 'border-box',
                },
            }}
            variant="persistent"
            anchor="left"
            open={menuToggle}
        >
            <IconButton onClick={handleDrawerClose}>
                <ChevronLeftIcon />
                {/* {theme.direction === 'ltr' ?  : <ChevronRightIcon />} */}
            </IconButton>
            <Divider />
            <List>
                {songs.map((song) => (
                    <ListItem button key={song.id} onClick={() => handleActiveSong(song.id)}>
                        <ListItemAvatar component="li">
                            <Avatar
                                alt={song.name + '-' + song.artist}
                                src={song.cover}
                                sx={{ width: '4rem ', height: '4rem', marginRight: '1.5rem' }} />
                        </ListItemAvatar>
                        <ListItemText primary={song.name} secondary={song.artist} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
}

export default SideMenu;