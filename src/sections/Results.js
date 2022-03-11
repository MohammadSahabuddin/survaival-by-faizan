/** @jsxImportSource theme-ui */

import { Box, Container, Flex, Heading, Paragraph, Text } from "@theme-ui/components";
import Image from "next/image";

import Icons from "utils/Icons";

function Results({ results }) {
    return (
        <Container as="section" sx={styles.container} className="results">
            <Flex>
                <Box className="left" sx={styles.left}>
                    <Paragraph>{results.firstText}</Paragraph>
                    <Text sx={styles.left1stNum}>{results.num}</Text>
                    <Box className="heading" sx={styles.leftHeading}>
                        <Heading as="h1">{results.firstHeading}</Heading>
                        <Heading as="h1" sx={styles.middleHead}>{results.percent}</Heading>
                        <Heading as="h1" sx={styles.lastHead}>{results.lastHeading}</Heading>
                    </Box>
                    <Heading as="h2" sx={styles.rotate}>
                        {results.rotate}
                    </Heading>
                    <Flex className="flex4" sx={styles.button}>
                        <Box><Icons icon={results.icon} /></Box>
                        <Heading as="h5">{results.iconText}</Heading>
                    </Flex>
                    <Box className="img" sx={styles.leftImage}>
                        <Image src={results.img} width={226.75} height={151.17} />
                    </Box>
                </Box>
                <Box sx={styles.right}>
                    <Box sx={styles.rightImage}>
                        <Image src={results.img2} width={672} height={652} />
                    </Box>
                    <Box className="rightContent" sx={styles.rightContent}>
                        <Heading as="h1">{results.rightHead}</Heading>
                        <Heading as="h3">{results.rightText}</Heading>
                        <Flex className="flex4" sx={styles.icons}>
                            <Box><Icons icon={results.icon} /></Box>
                            <Heading as="h5">{results.iconText1}</Heading>
                        </Flex>
                    </Box>
                </Box>
            </Flex >
        </Container >
    )
}

export default Results;

const styles = {
    container: {
        p: ["0 50px 20px 9px", null, null, null, null, null, null, null, "100px"],
    },
    right: {
        flex: ["0 0 60%", null, null, null, null, null, null, null, "0 0 70%"],
        position: "relative",
    },
    left: {
        flex: ["0 0 40%", null, null, null, null, null, null, null, "0 0 40%"],
        position: "relative",
        mt: ["60px", null, null, null, null, null, null, null, "165px"],
        p: {
            textTransform: "uppercase",
            fontSize: ["6px", null, null, null, null, null, null, null, "12px"],
            mb: ["-12px", null, null, null, null, null, null, null, "-25px"]
        },
        span: {
            fontFamily: "roboto"
        }
    },
    left1stNum: {
        fontSize: ["40px", null, null, null, null, null, null, null, "170px"],
        color: "primary",
        ml: ["10px", null, null, null, null, null, null, null, "60px"]
    },
    rightImage: {
        fontSize: ["10px", null, null, null, null, null, null, null, "16px"]
    },
    rightContent: {
        border: ["3px solid #E4003B", null, null, null, null, null, null, null, "13px solid #E4003B"],
        width: ["50%", null, null, null, null, null, null, null, "50%"],
        position: "absolute",
        top: ["9%", null, null, null, null, null, null, null, "10%"],
        left: ["27%", null, null, null, null, null, null, null, "18%"],
        color: "secondary",
        p: ["58px 0 5px 8px", null, null, null, null, null, null, null, "15px 0 15px 83px"],
        h1: {
            fontSize: ["13px", null, null, null, null, null, null, null, "41px"],
            fontWeight: "text",
            textTransform: "uppercase",
            lineHeight: ["13px", null, null, null, null, null, null, null, "36px"],
            mt: [0, null, null, null, null, null, null, null, "187px"]
        },
        h3: {
            fontSize: ["8px", null, null, null, null, null, null, null, "26px"],
            lineHeight: ["8px", null, null, null, null, null, null, null, "24px"],
            fontWeight: "text",
            mt: [0, null, null, null, null, null, null, null, "26px"]
        },
    },
    icons: {
        cursor: "pointer",
        mt: [0, null, null, null, null, null, null, null, "43px"],
        svg: {
            fontSize: ["10px", null, null, null, null, null, null, null, "25px"]
        },
        h5: {
            fontSize: ["4px", null, null, null, null, null, null, null, "11px"],
            textTransform: "uppercase",
        }
    },
    leftImage: {
        position: "absolute",
        bottom: ["8%", null, null, null, null, null, null, null, "8%"],
        right: ["-20%", null, null, null, null, null, null, null, "-20%"],
        zIndex: 9999,
        width: ["30%", null, null, null, null, null, null, null, "30%"]
    },
    leftHeading: {
        mt: [0, null, null, null, null, null, null, null, "-40px"],
        h1: {
            fontSize: ["16px", null, null, null, null, null, null, null, "60px"],
            lineHeight: ["13px", null, null, null, null, null, null, null, "60px"],
            fontWeight: "text"
        }
    },
    middleHead: {
        color: "primary",
        fontFamily: "roboto"
    },
    lastHead: {
        mt: [0, null, null, null, null, null, null, null, "-9px"]
    },
    rotate: {
        position: "absolute",
        top: ["-27%", null, null, null, null, null, null, null, "-18%"],
        left: ["-33%", null, null, null, null, null, null, null, "-40%"],
        transform: "rotate(-90deg)",
        textTransform: "uppercase",
        fontSize: ["20px", null, null, null, null, null, null, null, "109px"],
        color: "white",
        width: ["241%", null, null, null, null, null, null, null, "241%"],
        fontWeight: 400,
        zIndex: 9999,
        letterSpacing: [0, null, null, null, null, null, null, null, "9px"]
    },
    button: {
        mt: ["8px", null, null, null, null, null, null, null, "20px"],
        fontSize: ["10px", null, null, null, null, null, null, null, "22px"],
        textTransform: "uppercase",
        cursor: "pointer",
        h5: {
            fontSize: ["8px", null, null, null, null, null, null, null, "13px"],
            lineHeight: ["9px", null, null, null, null, null, null, null, "24px"],
            ml: ["6px", null, null, null, null, null, null, null, "6px"]
        }
    }
}
