import * as React from "react";
import { useEffect } from "react";
import "./jumpingText.css";

interface PropTypes {
    highlightOnLoad: boolean;
    text: string;
    textColor?: string | "white";
    background?: string | "black";
    position?:
    | "normal"
    | "start"
    | "end"
    | "center"
    | "between"
    | "around"
    | "evenly"
    | "stretch"
    | "";
    fontSize?: string;
    textShadow?: string;
    letterSpacing?: string;
}

const JumpingText = ({
    highlightOnLoad = false,
    text,
    textColor = "white",
    background = "white",
    position = "normal",
    fontSize = "40px",
    textShadow = "-20px 10px 10px rgba(0, 0, 0, 0.3), 0 20px 50px rgba(0, 0, 0, 0.3)",
    letterSpacing = "-2px"
}: PropTypes) => {
    useEffect(() => {
        const setupJumpingLetters = () => {
            const buzzwordsTrigger = document.querySelector(".jumpingText-words_trigger");
            if (buzzwordsTrigger) {
                buzzwordsTrigger.classList.add("is-ready");
            }
            const lineTriggers = document.querySelectorAll(".jumpingText_lineTrigger");
            lineTriggers.forEach((element, index) => {
                setTimeout(() => {
                    element.classList.add("is-ready");
                }, 1000 + 200 * (index + 1));
            });
            const charTriggers = document.querySelectorAll(".jt_charTrigger");
            charTriggers.forEach((element) => {
                element.addEventListener("mouseover", () => {
                    element.classList.add("jumpingLetter");
                });
                element.addEventListener("animationend", () => {
                    element.classList.remove("jumpingLetter");
                });
            });
        };
        setupJumpingLetters();
    }, []);

    const containerStyle = {
        '--text-color': textColor,
        '--background-color': background,
        '--font-size': fontSize,
        '--letter-spacing': letterSpacing,
        '--text-shadow': textShadow,
        display: 'flex',
        justifyContent: position
    };

    return (
        <div className={`jumpingText-container`} style={containerStyle}>
            <div className="jumpingText-buzzwords_container jumpingText-words jumpingText-words_trigger is-ready">
                <div className="jumpingText-words_line jumpingText_lineTrigger is-ready">
                    {highlightOnLoad && <div className="jumpingText-barBefore"></div>}
                    {!!text &&
                        Array.from(text).map((char, index) => (
                            <div
                                key={index}
                                className="jumpingText-charWrapper jt_charTrigger"
                            >
                                <div className="jumpingText-char">
                                    {char === ' ' ? '\u00A0' : char}
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export { JumpingText };
