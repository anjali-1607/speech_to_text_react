import "regenerator-runtime/runtime";
import React, { useState } from "react";
import "./SpeechRecognition.css";
import SpeechRecognition, {
    useSpeechRecognition,
} from "react-speech-recognition";
import filledMic from "../assets/mp_filled.jpg";
import activeMic from "../assets/mp_active.jpg";

const SpeechRecognitionComponent = () => {
    const [active, setActive] = useState("filled");

    const {
        transcript,
        resetTranscript,
        listening,
        browserSupportsSpeechRecognition,
    } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return <p>Your browser does not support speech recognition.</p>;
    }

    const startListening = () => {
        SpeechRecognition.startListening({ continuous: true, language: "hi" });
        setActive("active");
    };

    const stopListening = () => {
        SpeechRecognition.stopListening();
        setActive("filled");
    };

    return (
        <div>
            <h1>Speech to Text Translation</h1>
            <div
                style={{
                    display: "flex",
                    margin: "2rem 0",
                    padding: "1rem",
                    alignItems: "center",
                }}>
                {active === "filled" && (
                    <img
                        src={filledMic}
                        alt="mp-filled"
                        className="mp-image"
                        onClick={startListening}
                    />
                )}

                {active === "active" && (
                    <img
                        src={activeMic}
                        alt="mp-filled"
                        className="mp-image2"
                        onClick={stopListening}
                    />
                )}
                <button onClick={resetTranscript}>Reset</button>
            </div>

            <p>{listening ? " Listening..." : "Not listening"}</p>
            <p>Transcript: {transcript}</p>
        </div>
    );
};

export default SpeechRecognitionComponent;
