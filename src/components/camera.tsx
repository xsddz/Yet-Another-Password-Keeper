import * as React from 'react';
import { useRef, useState } from 'react';
import { useUserMedia } from './useUserMedia';

const CAPTURE_OPTIONS = {
    audio: false,
    video: { facingMode: "environment" },
};

export default function Camera() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const mediaStream = useUserMedia(CAPTURE_OPTIONS);

    if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
        videoRef.current.srcObject = mediaStream;
    }

    function handleCanPlay() {
        videoRef.current.play();
    }

    return (
        <div className="camera">
            <video ref={videoRef} onCanPlay={handleCanPlay} autoPlay playsInline muted />
        </div>
    );
}