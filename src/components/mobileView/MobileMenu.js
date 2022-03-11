/** @jsxImportSource theme-ui */
import { Box, Button, NavLink } from 'theme-ui';
import Image from 'next/image';

import Icons from 'utils/Icons';

function MobileMenu({ navs }) {
    return (
        <Box className="navs" sx={styles.navs}>
            <Box className="logo">
                <NavLink href={navs.logoUrl} className="logoLink">
                    <Image src={navs.logo} width={223.59} height={103.96} className="logoImg" />
                </NavLink>
            </Box>
            <hr sx={{ color: "white" }} />
            {navs.navs.map((nav, i) => (
                <Box className="hello2" sx={styles.navigation}>
                    <NavLink
                        href={nav.url}
                        key={i}
                        className="hello3"
                    >
                        {nav.name}
                    </NavLink>
                </Box>
            ))}
        </Box>
    )
}

export default MobileMenu;

const styles = {
    navs: {
        display: ["block", null, null, null, null, null, null, "none"],
        background: "secondary",
        color: "white",
        position: "fixed",
        left: "0",
        top: "0",
        padding: "7px 16px",
        height: "100%",
        transition: "0.3s",
        textAlign: "start",
        width: "50%",
        zIndex: "9999"
    },
    navigation: {
        a: {
            transition: "0.3s",
            textTransform: "capitalize",
            fontSize: "20px",
            lineHeight: "40px",
            "&:hover": {
                color: "text"
            }
        }
    }
}
