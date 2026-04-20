import ReactPlayer from 'react-player';
import { Link } from '@inertiajs/react';
export default function Show() {
    return (
        <section
            className="watching-page relative mx-auto h-screen w-screen bg-form-bg font-poppins"
            id="stream"
        >
            {/* <video-js id="stream-video" className="w-screen h-screen overflow-hidden">
            <source src="https://d33kv075lir7n3.cloudfront.net/Details+Screen+Part+Final.mp4" type="video/mp4" />
            <p className="vjs-no-js text-twmdark">
                To view this video please enable JavaScript, and consider upgrading to a
                web browser that
                <a href="https://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
            </p>
        </video-js> */}
            <div className="pt-25">
                <ReactPlayer
                    src="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                    controls
                    width="100%"
                    height="100vh"
                />
            </div>

            <div className="absolute top-5 left-5 z-20">
                <Link href="/">
                    <img
                        src="/icons/ic_arrow-left.svg"
                        className="btn-back w-11.5 transition-all"
                        alt="stream"
                    />
                </Link>
            </div>

            <div className="title-video absolute top-7 left-1/2 max-w-77.5 -translate-x-1/2 text-center md:max-w-155">
                <span className="text-2xl font-medium text-white drop-shadow-md transition-all select-none">
                    Details Screen Part Final
                </span>
            </div>
        </section>
    );
}
