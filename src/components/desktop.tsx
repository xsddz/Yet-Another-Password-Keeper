import * as React from 'react';
import { useRef, useEffect } from 'react';
import { useUserMedia } from './useUserMedia';


export default function Desktop() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const { desktopCapturer } = require('electron')

    console.log("==========before")
    desktopCapturer.getSources({ types: ['screen'] }, (error, sources) => {
        console.log("==========in")
        if (error) throw error
        for (let i = 0; i < sources.length; ++i) {
            console.log(sources[i].name)
            if (sources[i].name === 'Electron') {
                const mediaStream = useUserMedia({
                    audio: false,
                    video: {
                        mandatory: {
                            chromeMediaSource: 'desktop',
                            chromeMediaSourceId: sources[i].id,
                            minWidth: 1280,
                            maxWidth: 1280,
                            minHeight: 720,
                            maxHeight: 720
                        }
                    }
                });
                if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
                    videoRef.current.srcObject = mediaStream;
                }

                return
            }
        }
    })

    return (
        <div className="desktop">
            <video ref={videoRef} controls autoPlay playsInline muted />
        </div>
    )
}
