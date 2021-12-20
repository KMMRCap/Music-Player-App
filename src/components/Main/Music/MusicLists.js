import { v4 as uuidv4 } from 'uuid';

export default function MusicList() {
    return [
        {
            id: uuidv4(),
            name: 'Asemane Abri',
            artist: 'Homayoun Shajaryan',
            cover: "https://i1.sndcdn.com/artworks-2so9JqqVQAlojaVv-vOTUkQ-t500x500.jpg",
            active: true,
            audio: 'https://dl.joyamusic.ir/Album%20Irani/1399/12/Homayoun%20Shajarian%20-%20Asemane%20Abri-joyamusic-128.mp3',
        },
        {
            id: uuidv4(),
            name: 'Ghalbamo Dozdidi',
            artist: 'Farzad Farrokh',
            cover: "https://nex1.ir/public/upload/storge/upload/files/img/2/2281.jpg",
            active: false,
            audio: 'http://dl.musicya.ir/1398/12/28/farzad_farokh_ghalbamo_dozdidi_128.mp3',
        },
        {
            id: uuidv4(),
            name: 'Saghi Bia',
            artist: 'MohammadReza Shajaryan',
            cover: "https://music-fa.com/wp-content/uploads/2020/04/MohammadReza-Shajaryan-Saghi-Bia-Music-fa.com_.jpg",
            active: false,
            audio: 'https://dls.music-fa.com/tagdl/99/MohammadReza%20Shajaryan%20-%20Saghi%20Bia%20(128).mp3',
        },
        {
            id: uuidv4(),
            name: 'Senorita',
            artist: ' Shawn Mendes & Camila',
            cover: "https://i1.sndcdn.com/artworks-htQWzYh0v8p0-0-t500x500.jpg",
            active: false,
            audio: 'https://dls.music-fa.com/tagdl/downloads/Shawn%20Mendes%20&%20Camila%20Cabello%20-%20Senorita%20(320).mp3',
        },
        {
            id: uuidv4(),
            name: 'Khod Khah',
            artist: 'Mohsen Yegane',
            cover: "http://sakhamusic.ir/wp-content/uploads/2020/03/%D8%AF%D8%A7%D9%86%D9%84%D9%88%D8%AF-%D8%A2%D9%87%D9%86%DA%AF-%D9%85%D8%AD%D8%B3%D9%86-%DB%8C%DA%AF%D8%A7%D9%86%D9%87-%D8%AE%D9%88%D8%AF%D8%AE%D9%88%D8%A7%D9%87.jpg",
            active: false,
            audio: 'http://dl.sakhamusic.ir/99/far/02/Mohsen%20Yeganeh%20-%20KhodKhah%20(128).mp3',
        },
        {
            id: uuidv4(),
            name: 'Ahd Kardam',
            artist: 'Evan Band',
            cover: "http://sakhamusic.ir/wp-content/uploads/2018/07/%D8%AF%D8%A7%D9%86%D9%84%D9%88%D8%AF-%D8%A2%D9%87%D9%86%DA%AF-%D8%A7%DB%8C%D9%88%D8%A7%D9%86-%D8%A8%D8%A7%D9%86%D8%AF-%D8%B9%D9%87%D8%AF-%DA%A9%D8%B1%D8%AF%D9%85.jpg",
            active: false,
            audio: 'http://dl.sakhamusic.ir/97/tir/02/Evan%20Band%20-%20Ahd%20Kardam%20(128).mp3',
        },
        {
            id: uuidv4(),
            name: 'Be Raghs A',
            artist: 'Mohsen Chavooshi',
            cover: "https://upmusics.com/wp-content/uploads/2017/10/Mohsen-Chavoshi-Beraghsa.jpg",
            active: false,
            audio: 'https://irsv.upmusics.com/Downloads/Musics/Mohsen%20Chavoshi%20-%20Be%20Raghs%20Aa%20(128).mp3?_=1',
        },
        {
            id: uuidv4(),
            name: 'Ahd Kardam',
            artist: 'Evan Band',
            cover: "http://sakhamusic.ir/wp-content/uploads/2018/07/%D8%AF%D8%A7%D9%86%D9%84%D9%88%D8%AF-%D8%A2%D9%87%D9%86%DA%AF-%D8%A7%DB%8C%D9%88%D8%A7%D9%86-%D8%A8%D8%A7%D9%86%D8%AF-%D8%B9%D9%87%D8%AF-%DA%A9%D8%B1%D8%AF%D9%85.jpg",
            active: false,
            audio: 'http://dl.sakhamusic.ir/97/tir/02/Evan%20Band%20-%20Ahd%20Kardam%20(128).mp3',
        },

    ]
}