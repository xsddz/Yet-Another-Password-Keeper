import * as React from 'react';

export default function Desktop() {
    const videoRef = React.useRef<HTMLVideoElement>(null);

    const { desktopCapturer } = require('electron')
    desktopCapturer.getSources({ types: ['window', 'screen'] }).then(async sources => {
        userMedia({
            mandatory: {
                chromeMediaSource: 'desktop',
                chromeMediaSourceId: sources[0].id,
            }
        })
        return

        // loop screen logic
        // for (const source of sources) {
        //     console.log(source)
        //     if (source.name === 'Screen 1') {
        //         userMedia({
        //             mandatory: {
        //                 chromeMediaSource: 'desktop',
        //                 chromeMediaSourceId: source.id,
        //                 minWidth: 1280,
        //                 maxWidth: 1280,
        //                 minHeight: 720,
        //                 maxHeight: 720
        //             }
        //         })

        //         return
        //     }
        // }
    })

    async function userMedia(requestedMedia) {
        try {
            const mediaStream = await navigator.mediaDevices.getUserMedia({
                audio: false,
                video: requestedMedia
            })
            
            if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
                videoRef.current.srcObject = mediaStream;
            }
        } catch (e) {
            console.log(e)
        }
    }

    function handleCanPlay() {
        videoRef.current.play();
    }

    return (
        <div className="video-desktop">
            <hr/>
            <video ref={videoRef} onCanPlay={handleCanPlay} autoPlay playsInline muted />
            <div className="small">音频、共享桌面采集</div>
            <hr/>
        </div>
    )
}
