import React, { useContext } from "react";

import MenuIcon from '@mui/icons-material/Menu';
import { Contexts } from './../../context/Context';

const HeaderMenu = () => {

    const { setMenuToggle } = useContext(Contexts)

    const handleDrawerOpen = () => {
        setMenuToggle(true)
    }

    return (
        <MenuIcon
            fontSize="large"
            sx={{
                position: 'absolute',
                left: '2rem',
                top: '50%',
                transform: 'translateY(-50%)',
                cursor: 'pointer'
            }}
            onClick={handleDrawerOpen}
        />
    );
}

export default HeaderMenu;