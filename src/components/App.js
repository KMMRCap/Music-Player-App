import React, { useEffect, useRef, useContext } from "react";

import Header from "./Header/Header";
import MusicPlayer from "./Main/MusicPlayer";
import SideMenu from './SideMenu/SideMenu';
import { Contexts } from './../context/Context';

const App = () => {

  const { activeSong, setIsPlaying } = useContext(Contexts)

  const audioRef = useRef();

  useEffect(() => {
    if (audioRef.current) {
      audioRef?.current?.play().then(_ => {
        setIsPlaying(true);
      }).catch(err => { });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSong]);

  return (
    <>
      <Header />
      <MusicPlayer audioRef={audioRef} />
      <SideMenu />
    </>
  );
}

export default App;