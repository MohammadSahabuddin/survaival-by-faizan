/** @jsxImportSource theme-ui */
import Image from "next/image";
import { Box, Container, Flex, Heading, Paragraph, Text } from "@theme-ui/components"

import Icons from "utils/Icons";


function Challenges({ challenge }) {
    return (
        <Container as="section" sx={styles.container} className="challenges">
            <Flex className="flex">
                <Box className="left" sx={styles.left}>
                    <Heading as="h2" sx={styles.heading}>{challenge.heading}</Heading>
                    <Box className="map">
                        {challenge.blocks &&
                            challenge.blocks.map((block, i) => (
                                <Flex className="flex2" key={i} sx={styles.cards}>
                                    <Box className="leftImage" sx={styles.leftImage}><Image src={block.image1} width={400} height={243} /></Box>
                                    <Box className="leftTextGroup" sx={styles.leftTextGroup}>
                                        <Heading as="h5" sx={styles.skills}>{block.text1st}</Heading>
                                        <Heading as="h3" sx={styles.groupHeader}>{block.heading2} </Heading>
                                        <Paragraph as="p" >{block.text2nd} </Paragraph>
                                        <Flex className="flex3" sx={{ cursor: "pointer" }}>
                                            <Box className="firstIcon" sx={styles.firstIcon}><Icons icon={block.icon} /></Box>
                                            <Box><Heading as="h5">{block.iconText} </Heading></Box>
                                        </Flex>
                                    </Box>
                                </Flex>
                            ))}
                    </Box>
                </Box>
                <Box className="right" sx={styles.right}>
                    <Box className="topTextGroup">
                        <Flex className="rightHeading" sx={styles.rightHeading}>
                            <Text>{challenge.num}</Text>
                            <Heading as="h1">
                                {challenge.backTextFIrst}<br />
                                {challenge.backTextMiddle}<br />
                                {challenge.backTextLast}
                            </Heading>
                        </Flex>
                        <Box className="rotate" sx={styles.rotate}><Heading as="h2">{challenge.rotatedText} </Heading> </Box>
                        <Box className="image2">
                            <Image src={challenge.image2} width={643} height={528} />
                        </Box>
                    </Box>
                    <Box className="bottom" sx={styles.bottom}>
                        <Heading as="h3">{challenge.heading3} </Heading>
                        <Heading as="h4">{challenge.heading4} </Heading>
                        <Paragraph as="p">{challenge.text2nd} </Paragraph>
                        <Flex className="flex4" sx={{ cursor: "pointer" }}>
                            <Box sx={styles.firstIcon}><Icons icon={challenge.icon2} /></Box>
                            <Heading as="h5">{challenge.text3rd}</Heading>
                        </Flex>
                    </Box>
                </Box>
            </Flex>
        </Container>
    )
}

export default Challenges

const styles = {
    container: {
        p: ["50px 24px", "25px 24px", "40px 24px", null, null, null, null, "100px"]
    },
    left: {
        flex: ["0 0 70%", null, null, null, "0 0 60%", null, null, "0 0 60%"],
        flexWrap: 'wrap',
    },
    heading: {
        fontSize: ["19px", null, "20px", null, "30px", null, null, "35px"],
        mb: ["30px", null, "25px", null, null, null, null, "30px"],
        fontWeight: "text"
    },
    cards: {
        m: ["0 0 10px 0", null, null, null, null, null, null, "0 0 20px 0"],
    },
    leftImage: {
        flex: ["0 0 52%", null, null, null, null, null, null, "0 0 52%"],
        flexWrap: 'wrap',
    },
    leftTextGroup: {
        flex: ["0 0 43%", null, null, null, null, null, null, "0 0 43%"],
        flexWrap: 'wrap',
        ml: ["6px", null, null, null, "10px", null, null, "26px"],
        mt: [0, null, null, null, "9px", null, "25px", "2px", "5px", "30px"],
        p: {
            fontSize: ["8px", "5px", "6px", null, "10px", null, "13px", "11px"],
            lineHeight: ["9px", null, null, null, "10px", null, "13px", "18px"],
            margin: ["5px 0", "2px 0", "3px 0", null, "8px 0", null, null, "15px 0"]
        },
        h5: {
            fontSize: ["8px", null, "10px", null, "10px", null, "13px", "13px"],
            lineHeight: ["10px", null, null, null, "19px", null, "25px", "24px"],
            fontWeight: "text",
            textTransform: "uppercase"
        },
    },
    groupHeader: {
        fontSize: ["10px", "8px", "9px", null, "15px", null, "20px", "25px"],
        lineHeight: ["11px", null, null, null, "20px", null, "22px", "24px"],
        fontWeight: "text",
        mt: ["5px", "2px", "5px", null, null, null, null, "5px"]
    },
    skills: {
        color: "primary"
    },
    firstIcon: {
        margin: ["1px 4px 0 0", null, null, null, "4px 4px 0 0", null, null, "2px 14px 0 0"],
        fontSize: ["12px", "8px", "12px", null, null, null, "17px", "20px"],

    },
    right: {
        flex: ["0 0 40%"],
        flexWrap: 'wrap',
        ml: ["4px", null, null, null, null, null, null, "50px"]
    },
    rightHeading: {
        position: "relative",
        span: {
            fontSize: ["25px", null, null, null, "40px", null, null, "50px"],
            color: "primary",
            mt: [0, null, "4px", "6px", 0, null, null, null, null, null, null]
        },
        h1: {
            position: "absolute",
            top: ["24%", null, null, null, null, null, null, 0],
            left: ["16%", null, null, null, "11%", null, null, "50px"],
            fontSize: ["30px", null, "40px", null, "60px", "65px", "100px", "116px"],
            lineHeight: ["23px", null, "33px", null, "50px", null, "71px", "100px"],
            fontWeight: "text",
            textTransform: "uppercase",
            color: "#fff",
            zIndex: -999,
        }
    },
    rotate: {
        position: "relative",
        h2: {
            position: "absolute",
            top: ["-5px", null, null, null, null, null, null, "10px"],
            left: ["23%"],
            fontSize: ["15px", null, "20px", null, "40px", null, "52px", "60px"],
            transform: "rotate(-20deg)",
            textTransform: "lowercase",
            fontWeight: "text",
            color: "primary",
            zIndex: -99,
        }
    },
    bottom: {
        mt: ["-40px"],
        width: ["90%"],
        h3: {
            fontSize: ["24px", null, "25px", null, "40px", null, "45px", "60px"],
            mb: ["5px", null, null, null, "12px", null, "15px", "28px"],
            fontWeight: "body"
        },
        h4: {
            fontSize: ["12px", null, "13px", null, "15px", null, "20px", "27px"],
            lineHeight: ["11px", null, "13px", null, "13px", null, "20px", "30px"],
            width: ["85%", null, null, null, null, null, null, "85%"],
            fontWeight: 400,
            mb: ["10px", null, null, null, null, null, "15px", "20px"],
        },
        p: {
            fontSize: ["8px", null, "9px", null, "10px", null, "13px", "15px"],
            width: ["86%", null, null, null, null, null, null, "86%"],
            mb: ["5px", null, null, null, null, null, null, "22px"],
            lineHeight: ["10px", null, null, null, null, null, "17px", "30px"],
        },
        h5: {
            fontSize: ["8px", null, "10px", null, "9px", null, "12px", "13px"],
            fontWeight: "text",
            textTransform: "uppercase",
            mt: ["-6px", null, "-4px", null, "-2px", null, 0,]
        },
    }
}