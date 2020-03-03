import * as React from 'react';
import { useUserMedia } from './useUserMedia';

const { desktopCapturer } = require('electron')

export default function Desktop() {
    const videoRef = React.useRef<HTMLVideoElement>(null);

    console.log("==========before desktopCapturer.getSources")
    desktopCapturer.getSources({ types: ['window', 'screen'] }).then(async sources => {
        console.log("==========in desktopCapturer.getSources")
        for (const source of sources) {
            console.log(source)
            if (source.name === 'Electron') {
                const mediaStream = useUserMedia({
                    audio: false,
                    video: {
                        mandatory: {
                            chromeMediaSource: 'desktop',
                            chromeMediaSourceId: source.id,
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
        <div className="video-desktop">
            <video ref={videoRef} controls autoPlay playsInline muted />
        </div>
    )
}
