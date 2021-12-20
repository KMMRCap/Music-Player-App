import React from "react";

import { Box } from '@mui/system';
import HeaderTitle from "./HeaderTitle";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
    return (
        <>
            <Box
                component="header"
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="100%"
                height="5rem"
                position="fixed"
                color="white"
                top="0"
                p={2}
                backgroundColor="#212121"
            >
                <HeaderMenu />
                <HeaderTitle />
            </Box>
        </>
    );
}

export default Header;