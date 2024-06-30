import "regenerator-runtime/runtime";
import React from "react";
import SpeechRecognition, {
    useSpeechRecognition,
} from "react-speech-recognition";

const SpeechRecognitionComponent = () => {
    const {
        transcript,
        resetTranscript,
        listening,
        browserSupportsSpeechRecognition,
    } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return <p>Your browser does not support speech recognition.</p>;
    }

    const startListening = () =>
        SpeechRecognition.startListening({ continuous: true });

    const stopListening = () => SpeechRecognition.stopListening();

    return (
        <div>
            <h1>Speech to Text Translation</h1>
            <button onClick={startListening}>Start listening</button>
            <button onClick={stopListening}>Stop listening</button>
            <button onClick={resetTranscript}>Reset</button>
            <p>{listening ? "Listening..." : "Not listening"}</p>
            <p>Transcript: {transcript}</p>
        </div>
    );
};

export default SpeechRecognitionComponent;
