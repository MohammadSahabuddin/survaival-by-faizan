/** @jsxImportSource theme-ui */
import { useState } from 'react';
import Image from 'next/image';
import { Container, Flex, Box, NavLink, Select } from 'theme-ui';

import Icons from 'utils/Icons';
import MobileMenu from 'components/mobileView/MobileMenu';

function Nav({ nav }) {

    const [menu, setMenu] = useState(false);
    const toggleMenu = () => {
        setMenu(!menu)
    }

    return (
        <Container as="section" className="container" sx={styles.container}>
            <Flex className="mainFlex">
                <Box sx={styles.logo} className="logo">
                    <NavLink href={nav.logoUrl} className="logoLink">
                        <Image src={nav.img} width={223.59} height={103.96} className="logoImg" />
                    </NavLink>
                </Box>
                <Box sx={styles.rightContent} className="rightContent">
                    <Flex className="flex1st">
                        <Box className="box1st">
                            <Flex className="navLink" sx={styles.navLink}>
                                {nav.navs.map((nav, i) => (
                                    <NavLink href={nav.url} key={i} className="mapLink">
                                        {nav.name}
                                    </NavLink>
                                ))}
                            </Flex>
                        </Box>
                        <hr className="hrTag" sx={styles.hr} />
                        <Box className="box2nd">
                            <Flex className="flex2nd">
                                <Box className="selected" sx={styles.selected}>
                                    <Select
                                        sx={styles.select}
                                        arrow={
                                            <Box
                                                className="selectBox"
                                                as="svg"
                                                width="50"
                                                height="14"
                                                viewBox="0 0 24 24"
                                                fill="currentcolor"
                                                sx={{
                                                    ml: -10,
                                                    alignSelf: 'center',
                                                    pointerEvents: 'none',
                                                }}>
                                            </Box>
                                        }
                                        defaultValue="ENG">
                                        {nav.languages.map((language, i) => (
                                            <option key={i} className="option">{language.name}</option>
                                        ))}
                                    </Select>
                                </Box>
                                <Box className="firstIcon" sx={styles.firstIcon}>
                                    <Icons icon={nav.firstIcon} />
                                </Box>
                                <Box className="secondIcon" sx={styles.secondIcon}>
                                    <Icons icon={nav.secondIcon} />
                                </Box>
                            </Flex>
                        </Box>
                    </Flex>
                </Box>
                <Box onClick={toggleMenu} sx={styles.navs}>
                    <Icons icon="ci:menu-alt-04" />
                    <Box className={menu ? 'toggle' : 'hidden'} sx={styles.mobile}>
                        <MobileMenu navs={nav} />
                    </Box>
                </Box>
            </Flex>
        </Container>
    )
}

export default Nav;

const styles = {
    container: {
        p: ["24px", null, null, null, null, null, null, null, null, "50px 50px 30px 120px"],
    },
    logo: {
        flex: ["0 0 55%"],
        flexWrap: 'wrap',
        a: {
            width: ["40%", null, null, null, null, "30%", null, null, "25%"],
            mt: ["-9px", null, null, null, "-18px"]
        }
    },
    rightContent: {
        flex: ["0 0 45%"],
        flexWrap: 'wrap',
        display: ["none", null, null, null, null, null, null, "block"],
        p: [0, null, null, null, null, null, null, null, "30px 0 0 0", "10px 0 0 0"]
    },
    navLink: {
        a: {
            mr: "15px",
            fontSize: ["16px", null, null, null, null, null, "12px", null, "16px"],
            fontWeight: 400,
            textTransform: "uppercase",
            fontFamily: "body"
        }
    },
    hr: {
        m: ["-4px 13px 0", null, null, null, null, null, "1px 8px 0 0", null, null, "-4px 13px 0"],
        height: ["15px", null, null, null, null, null, null, null, null, "30px"],
        color: "#0006"
    },
    selected: {
        flex: ["0 0 50%"],
        flexWrap: 'wrap',
    },
    select: {
        transition: "left 0.7s cubic-bezier(0.545, 0, 0.05, 1)",
        bg: "transparent",
        border: "none",
        p: "0",
        m: "0",
        cursor: "pointer",
        fontSize: ["12px", null, null, null, null, null, null, null, "15px", "16px"],
    },
    firstIcon: {
        flex: ["0 0 33%"],
        flexWrap: 'wrap',
        svg: {
            fontSize: ["15px", null, null, null, null, null, null, null, "19px", "19px"],
            cursor: "pointer"
        }
    },
    secondIcon: {
        flex: ["0 0 33%"],
        flexWrap: 'wrap',
        svg: {
            fontSize: ["19px"],
            fontSize: ["35px", null, null, null, null, null, "30px", null, null, "35px"],
            background: "secondary",
            borderRadius: "50%",
            padding: ["7px"],
            margin: ["-7px 0 0"],
            color: "secondary",
            cursor: "pointer",
        }
    },
    navs: {
        display: ["block", null, null, null, null, null, null, "none"],
        flex: ["0 0 45%"],
        flexWrap: 'wrap',
        textAlign: "end",
        svg: {
            fontSize: ["16px", null, "24px", null, "25px"],
        }
    },
    mobile: {
        fontSize: "20px",
        "&.toggle": {
            div: {
                left: 0
            }
        },
        "&.hidden": {
            div: {
                left: ["-35rem"]
            }
        }
    },
}
