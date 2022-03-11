/** @jsxImportSource theme-ui */
import { Container, Flex, Box, Paragraph, Heading, Link } from 'theme-ui';
import Image from 'next/image';

import Icons from 'utils/Icons';
import Img from 'assets/hero/ico.png'
import HeroSlider from 'components/HeroSlider';

function Hero({ heros }) {
    return (
        <Container as="section" className="hero">
            <Flex className="1stFlex">
                <Box className="leftContents" sx={styles.leftContent} >
                    <Flex className="2ndFlex">
                        <Box className="inner">
                            <Box className="rotate" sx={styles.rotate}>
                                <Heading as="h3">{heros.rotated}</Heading>
                            </Box>
                            <Box className="icons" sx={styles.icon}>
                                <Link href="/">
                                    <Icons icon={heros.firstIcon} />
                                </Link>
                                <Link href="/">
                                    <Icons icon={heros.secondIcon} />
                                </Link>
                                <Link href="/">
                                    <Icons icon={heros.thirdIcon} />
                                </Link>
                            </Box>
                        </Box>
                        <Box className="main_heading" sx={styles.heading}>
                            <Box className="heading">
                                <Heading as="h1">{heros.firstHeading}</Heading><br />
                                <Heading as="h1">{heros.secondHeading}</Heading><br />
                                <Heading as="h1">{heros.thirdHeading}</Heading>
                            </Box>
                            <Box className="Paragraph" sx={styles.paragraph}>
                                <Paragraph as="p">{heros.text}</Paragraph>
                            </Box>
                            <Box className="back_image" sx={styles.back}>
                                <Image src={Img} height={226.75} width={151.17} />
                            </Box>
                        </Box>
                    </Flex>
                </Box>
                <Box className="rightContents" sx={styles.rightContent} >
                    <HeroSlider slider={heros.slides} />
                </Box>
            </Flex>
        </Container>
    )
}

export default Hero;

const styles = {
    rightContent: {
        flex: ["0 0 50%", null, null, null, "0 0 57%", "0 0 55%", null, null, "0 0 58%"],
        flexWrap: 'wrap',
    },
    leftContent: {
        flex: ["0 0 57%", null, null, "0 0 55% ", "0 0 45%", null, "0 0 42%", null, "0 0 32%"],
        flexWrap: 'wrap',
        ml: "-4rem",
    },
    rotate: {
        height: "100%",
        h3: {
            transform: "rotate(-90deg)",
            fontSize: ["15px", null, null, null, "20px", null, "25px", null, "35px"],
            width: ["13rem", null, null, null, null, null, null, null, "18rem"],
            margin: ["-0.5rem 0 0 -1rem", null, null, null, "3.5rem 0 0 0", null, "6.5rem 0 0 0", null, "9.2rem 0 0 23px"],
            fontWeight: "400"
        }
    },
    icon: {
        m: ["-2rem 0 0 76px", null, "-1rem 0 0 76px", "-1rem 0 0 63px", "-5.5rem 0 0 69px", null, "-11.5rem 0 0 50px", null, "-140px 0 0 129px"],
        textAlign: "center",
        svg: {
            fontSize: ["10px", null, null, null, "14px", null, "20px"],
            m: [0, null, null, null, null, null, null, null, "5px 0"],
            color: "black",
        }
    },
    heading: {
        position: "relative",
        width: ["100%", null, null, null, "83%"],
        mt: ["4px", null, null, null, "25px", null, null, null, "42px"],
        h1: {
            fontSize: ["50px", null, null, null, "70px", null, "100px"],
            color: "heading",
            lineHeight: ["20px", null, null, null, "32px", null, "59px"],
            fontWeight: "text"
        }
    },
    paragraph: {
        fontSize: ["8px", null, null, null, "10px", null, "12px"],
        mt: ["10px", null, null, null, "17px", null, "10px"],
        width: ["100%", null, null, null, "90%", null, null, null, "83%"],
        p: {
            lineHeight: ["10px", null, null, null, "11px", null, "24px"],
        }
    },
    back: {
        position: "absolute",
        top: ["75%", null, null, null, "80%", null, "72%", null, "69%"],
        right: ["10%", null, null, null, "4%", null, "2%", null, "7%"],
        zIndex: -99,
        width: ["35%", null, null, null, null, null, "40%", null, "100%"]
    }
}
