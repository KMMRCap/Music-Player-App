import React from "react";

import { Box } from '@mui/system';
import MusicCover from "./Music/MusicCover";
import MusicDetails from "./Music/MusicDetails";
import MusicControls from "./Music/MusicControls";

const MusicPlayer = (props) => {
    return (
        <Box
            component="main"
            position="fixed"
            top="5rem"
            width="100%"
            height="calc(100vh - 5rem)"
            backgroundColor="lavender"
            display="flex"
            flexDirection="column"
            alignItems="center"
        >
            <MusicCover />
            <MusicDetails />
            <MusicControls audioRef={props.audioRef} />
        </Box>
    );
}

export default MusicPlayer;