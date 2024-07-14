import "regenerator-runtime/runtime";
import React, { useState } from "react";
import "./SpeechRecognition.css";
import SpeechRecognition, {
    useSpeechRecognition,
} from "react-speech-recognition";
import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";

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
        SpeechRecognition.startListening({ continuous: true });
        setActive("active");
    };

    const stopListening = () => {
        SpeechRecognition.stopListening();
        setActive("filled");
    };

    return (
        <>
            <div className="container">
                <div className="grand-parent">
                    <h2>Speech to Text Translation</h2>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            // margin: "2rem 0",
                            // padding: "1rem",
                            alignItems: "center",
                            width: "100%",
                            height: "3rem",
                        }}>
                        {active === "filled" && (
                            <FaMicrophoneSlash
                                size={50}
                                style={{ cursor: "pointer" }}
                                onClick={startListening}
                            />
                        )}

                        {active === "active" && (
                            <FaMicrophone
                                size={40}
                                style={{ cursor: "pointer" }}
                                onClick={stopListening}
                            />
                        )}
                    </div>

                    <p>{listening ? " Listening..." : "Not listening"}</p>
                    <div className="transcript-div">{transcript}</div>
                    {/* <p>Transcript: {transcript}</p> */}
                    <button
                        onClick={resetTranscript}
                        style={{ marginBottom: "2rem", padding: "5px 10px" }}>
                        Reset
                    </button>
                </div>
            </div>
        </>
    );
};

export default SpeechRecognitionComponent;
