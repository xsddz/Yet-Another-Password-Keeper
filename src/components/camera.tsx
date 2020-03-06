import * as React from 'react';

export default function Camera() {
    const videoRef = React.useRef<HTMLVideoElement>(null);
    const mediaStream = useUserMedia({
        audio: false,
        video: { facingMode: "environment" },
    });

    if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
        videoRef.current.srcObject = mediaStream;
    }

    function useUserMedia(requestedMedia) {
        const [mediaStream, setMediaStream] = React.useState(null);

        React.useEffect(() => {
            async function enableStream() {
                try {
                    const stream = await navigator.mediaDevices.getUserMedia(requestedMedia);
                    setMediaStream(stream);
                } catch (err) {
                    // Removed for brevity
                }
            }

            if (!mediaStream) {
                enableStream();
            } else {
                return function cleanup() {
                    mediaStream.getTracks().forEach(track => {
                        track.stop();
                    });
                }
            }
        }, [mediaStream, requestedMedia]);

        return mediaStream;
    }

    function handleCanPlay() {
        videoRef.current.play();
    }

    return (
        <div className="video-camera">
            <hr/>
            <video ref={videoRef} onCanPlay={handleCanPlay} autoPlay playsInline muted />
            <div className="small">摄像头视频采集</div>
            <hr/>
        </div>
    );
}