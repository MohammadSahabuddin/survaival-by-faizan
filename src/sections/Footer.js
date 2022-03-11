/** @jsxImportSource theme-ui */
import { Box, Container, Flex, Heading } from "@theme-ui/components";
import Image from "next/image";
import Link from "next/link";

import Icons from "utils/Icons";

function Footer({ footers }) {
    return (
        <Container as="section"
            sx={{
                backgroundImage: `url('${footers.backImage}')`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                p: "20px"
            }}
            className="footers"
        >
            <Flex>
                <Box sx={styles.logoArea}>
                    <Image src={footers.logo} width={223.59} height={103.96} />
                </Box>
                <Box sx={styles.challengeArea}>
                    <Heading as="h1">{footers.firstHeading}</Heading>
                    <Box>
                        {footers.challenges &&
                            footers.challenges.map((challenge, i) => (
                                <Link href={challenge.url} key={i}>
                                    <Heading as="h4">{challenge.name}</Heading>
                                </Link>
                            ))}
                    </Box>
                    <Flex sx={styles.icons}>
                        <Link href="/">
                            <Box><Icons icon={footers.social1st} /></Box>
                        </Link>
                        <Link href="/">
                            <Box><Icons icon={footers.social2nd} /></Box>
                        </Link>
                        <Link href="/">
                            <Box><Icons icon={footers.social3rd} /></Box>
                        </Link>
                    </Flex>
                </Box>
                <Box sx={styles.adviceArea}>
                    <Heading as="h1">{footers.secondHeading}</Heading>
                    <Box>
                        {footers.advices &&
                            footers.advices.map((advice, i) => (
                                <Link href={advice.url} key={i}>
                                    <Heading as="h4">{advice.name}</Heading>
                                </Link>
                            ))}
                    </Box>
                </Box>
                <Box sx={styles.galleryArea}>
                    <Heading as="h1">{footers.lastHeading}</Heading>
                    <Box>
                        {footers.galleries &&
                            footers.galleries.map((gallery, i) => (
                                <Link href={gallery.url} key={i}>
                                    <Heading as="h4">{gallery.name}</Heading>
                                </Link>
                            ))}
                    </Box>
                </Box>
            </Flex>
        </Container>
    )
}

export default Footer;

const styles = {
    logoArea: {
        flex: ["0 0 20%", null, null, null, null, null, null, null, "0 0 20%"],
        mt: ["4rem", null, null, null, null, null, null, null, "5rem"],
        mr: ["14px", null, null, null, null, null, null, null, 0]
    },
    challengeArea: {
        flex: ["0 0 20%", null, null, null, null, null, null, null, "0 0 20%"],
        flexWrap: 'wrap',
        h1: {
            fontSize: ["8px", null, null, null, null, null, null, null, "25px"],
            fontWeight: "text",
            textTransform: "uppercase",
            color: "primary"
        },
        h4: {
            fontSize: ["8px", null, null, null, null, null, null, null, "14px"],
            fontWeight: "text",
            color: "secondary",
            lineHeight: ["15px", null, null, null, null, null, null, null, "26px"],
            cursor: "pointer",
            "&:hover": {
                color: "back",
                textDecoration: "underline"
            }
        }
    },
    adviceArea: {
        flex: ["0 0 20%", null, null, null, null, null, null, null, "0 0 20%"],
        flexWrap: 'wrap',
        h1: {
            fontSize: ["8px", null, null, null, null, null, null, null, "25px"],
            fontWeight: "text",
            textTransform: "uppercase",
            color: "primary"
        },
        h4: {
            fontSize: ["8px", null, null, null, null, null, null, null, "14px"],
            fontWeight: "text",
            color: "secondary",
            lineHeight: ["15px", null, null, null, null, null, null, null, "26px"],
            cursor: "pointer",
            "&:hover": {
                color: "back",
                textDecoration: "underline"
            }
        }
    },
    galleryArea: {
        flex: ["0 0 20%", null, null, null, null, null, null, null, "0 0 20%"],
        flexWrap: 'wrap',
        h1: {
            fontSize: ["8px", null, null, null, null, null, null, null, "25px"],
            fontWeight: "text",
            textTransform: "uppercase",
            color: "primary",
            lineHeight: ["22px", null, null, null, null, null, null, null, "25px"]
        },
        h4: {
            fontSize: ["8px", null, null, null, null, null, null, null, "14px"],
            fontWeight: "text",
            color: "secondary",
            lineHeight: ["15px", null, null, null, null, null, null, null, "26px"],
            cursor: "pointer",
            "&:hover": {
                color: "back",
                textDecoration: "underline"
            }
        }
    },
    icons: {
        color: "secondary",
        mt: ["8px", null, null, null, null, null, null, null, "26px"],
        svg: {
            m: ["0 4px 0 0", null, null, null, null, null, null, null, "0 10px 0 0"],
            fontSize: ["10px", null, null, null, null, null, null, null, "20px"],
            cursor: "pointer",
            transition: "0.3s",
            "&:hover": {
                color: "heading"
            }
        }
    }
}
