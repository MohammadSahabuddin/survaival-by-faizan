/** @jsxImportSource theme-ui */
import { Container, Flex, Box, Paragraph, Heading } from 'theme-ui';

import Icons from 'utils/Icons';
import AdviceSliders from 'components/AdviceSlider';

function Advices({ advice }) {
    return (
        <Container as="section" sx={styles.container} className="advice">
            <Flex className="1stFlex">
                <Box className="leftContents" sx={styles.leftContent}>
                    <Flex className="2ndFlex">
                        <Box className="inner">
                            <Box className="rotate" sx={styles.rotate}>
                                <Heading as="h3">{advice.rotated}</Heading>
                            </Box>
                        </Box>
                        <Box className="main_heading" sx={styles.heading}>
                            <Box><Heading as="h2">{advice.heading}</Heading></Box>
                            <Box className="Paragraph" sx={styles.paragraph}>
                                <Paragraph as="p">{advice.text}</Paragraph>
                            </Box>
                            <Flex sx={styles.icons}>
                                <Icons icon={advice.icon} />
                                <Heading as="h3">{advice.iconText}</Heading>
                            </Flex>
                        </Box>
                    </Flex>
                </Box>
                <Box className="middleContents" sx={styles.middleContent} >
                    <AdviceSliders slider={advice.slides} />
                </Box>
            </Flex>
        </Container>
    )
}

export default Advices;

const styles = {
    container: {
        p: ["30px 10px 30px 50px", null, null, null, null, null, null, null, "100px 0 100px 200px"],
        position: "relative"
    },
    middleContent: {
        flex: ["0 0 90%", null, null, null, null, null, null, null, "0 0 90%"],
        flexWrap: 'wrap',
    },
    leftContent: {
        flex: ["0 0 10%", null, null, null, null, null, null, null, "0 0 10%"],
        flexWrap: 'wrap',
        position: "absolute",
        bg: "back",
        zIndex: 999,
        width: ["30%", null, null, null, null, null, null, null, "30%"],
        p: [0, null, null, null, null, null, null, null, 0],
        m: [0, null, null, null, null, null, null, null, 0],
        bottom: ["15.6%", null, null, null, null, null, null, null, "15.6%"],
        left: ["14%", null, null, null, null, null, null, null, "14.8%"]
    },
    rotate: {
        height: "100%",
        position: "absolute",
        top: ["12%", null, null, null, null, null, null, null, "-96%"],
        left: ["-70%", null, null, null, null, null, null, null, "-73%"],
        h3: {
            transform: "rotate(-90deg)",
            fontSize: ["30px", null, null, null, null, null, null, null, "130px"],
            fontWeight: "text",
            textTransform: "uppercase",
            fontFamily: "open",
            color: "primary"
        }
    },
    heading: {
        position: "relative",
        mt: [0, null, null, null, null, null, null, null, "22px"],
        ml: [0, null, null, null, null, null, null, null, "39px"],
        h2: {
            fontSize: ["12px", null, null, null, null, null, null, null, "45px"],
            textTransform: "uppercase",
            fontWeight: "text"
        }
    },
    paragraph: {
        p: {
            fontSize: ["7px", null, null, null, null, null, null, null, "11px"],
            lineHeight: ["7px", null, null, null, null, null, null, null, "20px"],
            width: ["88%", null, null, null, null, null, null, null, "88%"]
        }
    },
    icons: {
        fontSize: ["8px", null, null, null, null, null, null, null, "20px"],
        mt: ["5px", null, null, null, null, null, null, null, "10px"],
        h3: {
            fontSize: ["8px", null, null, null, null, null, null, null, "12px"],
            margin: ["-7px 0 0 7px", null, null, null, null, null, null, null, "-2px 0 0 12px"],
            textTransform: "uppercase",
            fontFamily: "open",
        }
    }
}
