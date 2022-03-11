/** @jsxImportSource theme-ui */
import { useState, useEffect, useCallback } from 'react'
import { useEmblaCarousel } from 'embla-carousel/react';
import { Container, Box, Embed } from 'theme-ui';
import Image from 'next/image';

import { DotButton, PrevButton, NextButton } from 'utils/SliderButtons';

function AdviceSliders({ slider }) {
    const [emblaRef, embla] = useEmblaCarousel({ speed: 20, draggable: false, loop: true });
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);

    const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
    const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
    const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [
        embla
    ]);




    const onSelect = useCallback(() => {
        if (!embla) return;
        setSelectedIndex(embla.selectedScrollSnap());
        setPrevBtnEnabled(embla.canScrollPrev());
        setNextBtnEnabled(embla.canScrollNext());
    }, [embla]);

    useEffect(() => {
        if (!embla) return;
        onSelect();
        setScrollSnaps(embla.scrollSnapList());
        embla.on("select", onSelect);
    }, [embla, setScrollSnaps, onSelect]);

    return (
        <Container sx={styles.container}>
            <div className="embla" sx={styles.embla} ref={emblaRef}>
                <div className="embla__container" sx={styles.emblaContainer}>
                    {slider &&
                        slider.map((slides, i) => (
                            <div className="embla__slide" key={i} sx={styles.emblaSlide}>
                                <Box bg="#fff" className="seeNow" sx={{ bg: "back" }}>
                                    <Image src={slides.img} width={1383} height={612} />
                                </Box>
                            </div>
                        ))}
                </div>
                <Box className="buttonFlex" sx={styles.buttons}>
                    <Box className="prev"><PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} /></Box>
                    <Box className="next" sx={styles.next}><NextButton onClick={scrollNext} enabled={nextBtnEnabled} /></Box>
                </Box>
                <div className="embla__dots" sx={styles.emblaDot}>
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            selected={index === selectedIndex}
                            onClick={() => scrollTo(index)}
                            value={index}
                        />
                    ))}
                </div>
            </div>
        </Container>
    )
}

export default AdviceSliders;


const styles = {
    container: {
        position: "relative",
    },
    embla: {
        overflow: "hidden",
        width: "100%"
    },
    emblaContainer: {
        display: "flex",
    },
    emblaSlide: {
        position: "relative",
        flex: ["0 0 100%", null, null, null, null, null, null, null, "0 0 100%"],
        width: ["100%", null, null, null, null, null, null, null, "100%"],
        m: "0 auto",
        bg: "back"
    },
    emblaDot: {
        bg: "back",
        position: "absolute",
        top: "0",
        right: ["-9.4%", null, null, null, null, null, null, null, "-6.4%"],
        p: ["2px", null, null, null, null, null, null, null, "15px 33px"],
        transform: "translateX(-50%)",
        button: {
            fontSize: ["10px", null, null, null, null, null, null, null, "20px"],
            color: "text",
            display: "block",
            background: "none",
            borderRadius: "0",
            p: ["5px", null, null, null, null, null, null, null, "5px"],
            m: ["0 6px", null, null, null, null, null, null, null, "0 6px"],
            position: "relative",
            cursor: "pointer",
            "&:after": {
                content: "''",
                position: "absolute",
                background: "secondary",
                width: 0,
                height: 0,
                padding: 0,
                bottom: 0,
                left: ["-5px", null, null, null, null, null, null, null, "-5px"],
                transition: ["0.3s", null, null, null, null, null, null, null, "0.3s"]
            },
            "&:hover": {
                "&:after": {
                    width: ["100%", null, null, null, null, null, null, null, "100%"],
                    padding: "1px",
                },
            }
        },
        ".embla__dot.is-selected": {
            fontSize: ["16px", null, null, null, null, null, null, null, "40px"],
            fontWeight: "text",
            "&:after": {
                width: ["74%", null, null, null, null, null, null, null, "74%"],
                padding: "1px",
            },
        }
    },
    buttons: {
        button: {
            display: "block",
            bg: "secondary",
            color: "text",
            position: "absolute",
            bottom: ["3px", null, null, null, null, null, null, null, 0],
            right: ["8%", null, null, null, null, null, null, null, 0],
            borderRadius: 0,
            cursor: "pointer",
            p: ["3px", null, null, null, null, null, null, null, "8px 16px"],
            svg: {
                fontSize: ["16px", null, null, null, null, null, null, null, "16px"]
            }
        }
    },
    next: {
        button: {
            transform: "scaleX(-1)",
            bottom: ["3px", null, null, null, null, null, null, null, "7%"],
            right: [0, null, null, null, null, null, null, null, 0],
            bg: "primary",
            cursor: "pointer"
        }
    }

}
