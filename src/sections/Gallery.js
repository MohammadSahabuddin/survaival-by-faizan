/** @jsxImportSource theme-ui */
import { Box, Container, Flex, Paragraph, Heading } from "@theme-ui/components";
import Image from "next/image";

import Icons from "utils/Icons";
import Back from "assets/gallery/icon.png"

function Gallery({ galleries }) {
    return (
        <Container as="section" sx={styles.container} className="galleries">
            <Flex>
                <Box className="youtubeContainer" sx={styles.youtube}>
                    <Box>
                        <Image src={galleries.youtube.image} width={360} height={300} />
                    </Box>
                    <Box className="youtubeContent" sx={styles.youtubeContent}>
                        <Box><Icons icon={galleries.youtube.icon} /></Box>
                        <Flex sx={styles.headings}>
                            <Heading as="h6">{galleries.youtube.date}</Heading>
                            <hr sx={styles.hr} />
                            <Heading as="h6">{galleries.youtube.title}</Heading>
                        </Flex>
                        <Paragraph as="p">{galleries.youtube.description}</Paragraph>
                    </Box>
                </Box>
                <Box className="photoContainer" sx={styles.photo}>
                    <Box>
                        <Image src={galleries.photo.image} width={360} height={300} />
                    </Box>
                    <Box className="photoContent" sx={styles.photoContent}>
                        <Box><Icons icon={galleries.photo.icon} /></Box>
                        <Flex sx={styles.headings}>
                            <Heading as="h6">{galleries.photo.date}</Heading>
                            <hr sx={styles.hr} />
                            <Heading as="h6">{galleries.photo.title}</Heading>
                        </Flex>
                        <Paragraph as="p">{galleries.photo.description}</Paragraph>
                    </Box>
                </Box>
                <Box className="contents" sx={styles.info}>
                    <Heading as="h1">{galleries.info.heading}</Heading>
                    <Heading as="h2">{galleries.info.rotate}</Heading>
                    <Paragraph as="p">{galleries.info.description}</Paragraph>
                    <Flex>
                        <Icons icon={galleries.info.icon} />
                        <Heading as="h3">{galleries.info.iconText}</Heading>
                    </Flex>
                    <Box className="infoImage" sx={styles.infoImage}>
                        <Image src={Back} width={126.75} height={151.17} />
                    </Box>
                </Box>
            </Flex>
        </Container>
    )
}

export default Gallery;

const styles = {
    container: {
        p: ["20px 10px", null, null, null, null, null, null, null, "50px"]
    },
    youtube: {
        flex: ["0 0 33%", null, null, null, null, null, null, null, "0 0 33%"],
        flexWrap: 'wrap',
        position: "relative",
        m: ["0 4px", null, null, null, null, null, null, null, 0],
    },
    youtubeContent: {
        position: "absolute",
        top: ["1%", null, null, null, null, null, null, null, "11%"],
        left: ["7%", null, null, null, null, null, null, null, "7%"],
        color: "secondary",
        width: ["75%", null, null, null, null, null, null, null, "75%"],
        svg: {
            fontSize: ["12px", null, null, null, null, null, null, null, "22px"],
            mb: ["2px", null, null, null, null, null, null, null, "100px"]
        },
        p: {
            fontSize: ["9px", null, null, null, null, null, null, null, "24px"],
            lineHeight: ["8px", null, null, null, null, null, null, null, "24px"],
        }
    },
    photo: {
        flex: ["0 0 33%", null, null, null, null, null, null, null, "0 0 33%"],
        flexWrap: 'wrap',
        position: "relative",
        m: ["0 4px", null, null, null, null, null, null, null, 0],
    },
    photoContent: {
        position: "absolute",
        top: ["1%", null, null, null, null, null, null, null, "11%"],
        left: ["7%", null, null, null, null, null, null, null, "7%"],
        color: "secondary",
        width: ["75%", null, null, null, null, null, null, null, "75%"],
        svg: {
            fontSize: ["12px", null, null, null, null, null, null, null, "22px"],
            mb: ["2px", null, null, null, null, null, null, null, "100px"]
        },
        p: {
            fontSize: ["9px", null, null, null, null, null, null, null, "24px"],
            lineHeight: ["8px", null, null, null, null, null, null, null, "24px"],
        }
    },
    hr: {
        m: ["8px 5px 0", null, null, null, null, null, null, null, "6px 5px 0"],
        p: 0,
        color: "white",
        height: ["8px", null, null, null, null, null, null, null, "13px"],
    },
    headings: {
        mb: ["5px", null, null, null, null, null, null, null, "10px"],
        h6: {
            fontSize: ["6px", null, null, null, null, null, null, null, "14px"]
        }
    },
    info: {
        flex: ["0 0 33%", null, null, null, null, null, null, null, "0 0 33%"],
        flexWrap: 'wrap',
        position: "relative",
        m: ["0 4px", null, null, null, null, null, null, null, 0],
        h1: {
            fontSize: ["20px", null, null, null, null, null, null, null, "70px"],
            textTransform: "uppercase",
            m: [0, null, null, null, null, null, null, null, "60px 0 50px"],
            fontWeight: "text",
        },
        h2: {
            zIndex: 9999,
            position: "absolute",
            transform: "rotate(-10deg)",
            color: "primary",
            fontSize: ["14px", null, null, null, null, null, null, null, "50px"],
            top: ["14%", null, null, null, null, null, null, null, "38%"],
            left: ["2%", null, null, null, null, null, null, null, "2%"],
        },
        p: {
            fontSize: ["8px", null, null, null, null, null, null, null, "14px"],
            mt: ["10px", null, null, null, null, null, null, null, "78px"],
            lineHeight: ["8px", null, null, null, null, null, null, null, "24px"],
            width: ["90%", null, null, null, null, null, null, null, "100%"],
        },
        svg: {
            fontSize: ["10px", null, null, null, null, null, null, null, "20px"],
            mt: ["6px", null, null, null, null, null, null, null, "16px"]
        },
        h3: {
            m: ["0 0 0 6px", null, null, null, null, null, null, null, "15px 0 0 13px"],
            textTransform: "uppercase",
            fontWeight: "text",
            fontSize: ["8px", null, null, null, null, null, null, null, "14px"]
        }
    },
    infoImage: {
        position: "absolute",
        bottom: ["-24%", null, null, null, null, null, null, null, "-10%"],
        right: ["0%", null, null, null, null, null, null, null, "-16%"],
        width: ["28%", null, null, null, null, null, null, null, "100%"],
    }
}
