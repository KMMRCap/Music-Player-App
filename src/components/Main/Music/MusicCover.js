import React, { useContext } from "react";
import { Avatar } from "@mui/material";
import { Box } from '@mui/system';
import { Contexts } from './../../../context/Context';

const MusicCover = (props) => {

    const {activeSong} = useContext(Contexts)

    return (
        <Box
            component="div"
            width="100%"
            display="flex"
            justifyContent="center"
            my={5}
        >
            <Avatar
                alt={activeSong?.name + '-' + activeSong?.artist}
                src={activeSong?.cover}
                sx={{ width: '13rem', height: '13rem' }}
            />
        </Box>
    );
}

export default MusicCover;