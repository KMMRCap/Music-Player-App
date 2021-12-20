import React, { useEffect, useContext } from "react";

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { Button, Typography } from "@mui/material";
import { Contexts } from './../../../context/Context';


const MusicControls = (props) => {

    const { songs,
        activeSong, setActiveSong,
        timeDisplay, setTimeDisplay,
        currentTime, setCurrentTime,
        isPlaying, setIsPlaying } = useContext(Contexts);

    useEffect(() => {
        if (props.audioRef.current) {
            if (isPlaying) {
                props.audioRef?.current?.play().then(_ => { }).catch(err => { });
            } else {
                props.audioRef?.current?.pause();
            }
        }
    }, [isPlaying, props.audioRef]);

    const handleNextSong = () => {
        let active = songs.findIndex((song) => song === activeSong);
        if (active === songs.length - 1) {
            setActiveSong(songs[0])
        } else {
            setActiveSong(songs[active + 1])
        }
    }
    const handlePrevSong = () => {
        let active = songs.findIndex((song) => song === activeSong);
        if (active === 0) {
            setActiveSong(songs[songs.length - 1])
        } else {
            setActiveSong(songs[active - 1])
        }
    }

    const timeFormatter = (time) => {
        var s = parseInt(time % 60);
        var m = parseInt((time / 60) % 60);
        return (m + ':' + s);
    }

    const handleMusicTimeDisplay = () => {
        setTimeDisplay(!timeDisplay)
    }


    return (
        <>
            <Box pt={3} className='box-slider' sx={{ width: '60%' }}>
                <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                    <Typography variant="h6" component="h6" mr={4}>
                        {timeFormatter(currentTime)}
                    </Typography>
                    <Slider
                        min={0}
                        max={props.audioRef?.current?.duration || 0}
                        value={currentTime || 0}
                        onChange={(e) => {
                            setCurrentTime(e.target.value);
                            props.audioRef.current.currentTime = e.target.value;
                        }}
                        aria-label="Audio"
                        sx={{ color: 'red' }} />
                    <Button onClick={handleMusicTimeDisplay} sx={{ color: 'black' }}>
                        {!timeDisplay ?
                            <Typography variant="h6" component="h6" ml={2}>
                                {props.audioRef?.current?.duration ?
                                    timeFormatter(props.audioRef.current.duration) : '0:0'}
                            </Typography>
                            :
                            <Typography variant="h6" component="h6" ml={2}>
                                {props.audioRef?.current?.duration ?
                                    timeFormatter(props.audioRef.current.duration - currentTime) : '0:0'}
                            </Typography>}
                    </Button>
                    <audio
                        onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
                        ref={props.audioRef}
                        src={activeSong?.audio}></audio>
                </Stack>
            </Box>
            <Box>
                <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                    <Button sx={{ color: 'black' }} onClick={handlePrevSong}>
                        <KeyboardArrowLeftIcon fontSize="large" sx={{ cursor: 'pointer' }} />
                    </Button>
                    <Button sx={{ color: 'black' }} onClick={() => setIsPlaying(!isPlaying)}>
                        {isPlaying ?
                            <PauseIcon fontSize="large" sx={{ cursor: 'pointer' }} />
                            :
                            <PlayArrowIcon fontSize="large" sx={{ cursor: 'pointer' }} />
                        }
                    </Button>
                    <Button sx={{ color: 'black' }} onClick={handleNextSong}>
                        <ChevronRightIcon fontSize="large" sx={{ cursor: 'pointer' }} />
                    </Button>
                </Stack>
            </Box>
        </>
    );
}

export default MusicControls;