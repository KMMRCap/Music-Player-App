import { createContext, useState } from "react";
import MusicList from './../components/Main/Music/MusicLists';

export const Contexts = createContext({
    songs: [], setSongs: () => { },
    menuToggle: false, setMenuToggle: () => { },
    activeSong: {}, setActiveSong: () => { },
    isPlaying: false, setIsPlaying: () => { },
    currentTime: 0, setCurrentTime: () => { },
    timeDisplay: false, setTimeDisplay: () => { },
})

export const Context = (props) => {

    const initialSongs = MusicList()
    const [songs, setSongs] = useState(initialSongs);
    const [menuToggle, setMenuToggle] = useState(false);
    const [activeSong, setActiveSong] = useState();
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [timeDisplay, setTimeDisplay] = useState(false);

    return (
        <Contexts.Provider value={
            {
                songs, setSongs,
                menuToggle, setMenuToggle,
                activeSong, setActiveSong,
                isPlaying, setIsPlaying,
                currentTime, setCurrentTime,
                timeDisplay, setTimeDisplay,
            }
        }>
            {props.children}
        </Contexts.Provider>
    )
}