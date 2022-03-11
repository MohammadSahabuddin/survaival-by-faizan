/** @jsxImportSource theme-ui */
import Icons from "./Icons";
import { Button, Text } from "@theme-ui/components";



export const DotButton = ({ selected, onClick, value }) => (
    <Button
        className={`embla__dot ${selected ? "is-selected" : ""}`}
        type="button"
        onClick={onClick}
    >
        <Text>0{value + 1}</Text>
    </Button>
);

export const PrevButton = ({ enabled, onClick }) => (
    <Button
        className={`carousel-button carousel-button--prev ${enabled ? '' : 'hide'}`}
        onClick={onClick}
        disabled={!enabled}
        sx={{ display: `${enabled ? '' : 'none'}` }}
    >
        <Icons icon="fluent:arrow-reply-all-16-filled" className="carousel-button__svg" />
    </Button>
);

export const NextButton = ({ enabled, onClick }) => (
    <Button
        className={`carousel-button carousel-button--next ${enabled} ? '' : 'hide' `}
        onClick={onClick}
        disabled={!enabled}
        sx={{ display: `${enabled ? '' : 'none'}` }}
    >
        <Icons icon="fluent:arrow-reply-all-16-filled" className="carousel-button__svg" />
    </Button>
);

const style = {
    hide: {
        visibility: "hidden",
    }
}
