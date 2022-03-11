/** @jsxImportSource theme-ui */
import { useState, useEffect, useCallback } from 'react'
import { useEmblaCarousel } from 'embla-carousel/react';
import { Container, Box, Embed } from 'theme-ui';

import { DotButton, PrevButton, NextButton } from 'utils/SliderButtons';

function Sliders({ slider }) {
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
                                <Box bg="#fff" className="seeNow">
                                    <Embed src={slides.video} />
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

export default Sliders;


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
        flex: ["0 0 100%"],
        width: ["100%"],
        m: "0 auto"
    },
    emblaDot: {
        position: "absolute",
        top: [0],
        right: ["-33%", null, null, "-25%", "-18%", "-21%", "-20%"],
        transform: "translateX(-50%)",
        button: {
            color: "text",
            display: "block",
            background: "none",
            borderRadius: "0",
            p: ["5px"],
            m: ["0 6px"],
            fontSize: ["10px", null, null, null, "15px", null, "16px"],
            position: "relative",
            transition: "0.5s",
            cursor: "pointer",
            "&:after": {
                content: "''",
                position: "absolute",
                background: "secondary",
                width: 0,
                height: 0,
                padding: 0,
                bottom: 0,
                left: ["2px", null, null, null, null, null, "-5px"],
                transition: "0.3s"
            },
            "&:hover": {
                "&:after": {
                    width: ["100%"],
                    padding: ["1px"],
                },
            }
        },
        ".embla__dot.is-selected": {
            fontSize: ["20px", null, null, null, "32px", "40px", "50px", null, "60px"],
            fontWeight: "text",
            "&:after": {
                width: ["74%"],
                padding: ["1px"],
            },
        }
    },
    buttons: {
        button: {
            display: "block",
            bg: "secondary",
            color: "text",
            position: "absolute",
            bottom: [0],
            right: [0],
            borderRadius: 0,
            cursor: "pointer"
        }
    },
    next: {
        button: {
            transform: "scaleX(-1)",
            bottom: ["34%", null, "30%", "26%", "13%", null, "10%", null, "7%"],
            bg: "primary",
            cursor: "pointer"
        }
    }

}