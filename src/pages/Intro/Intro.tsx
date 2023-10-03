import Logo from "../../components/UI/Icons/Logo";
import Play from "../../components/UI/Icons/Play";
import arrow from "../../assets/icons/arrow-vertical.svg";
import usePlayStore from "../../store/usePlaystore";
import {useRef} from "react";
const Intro = () => {

    const {play} = usePlayStore();
    const playRef = useRef<HTMLVideoElement | null>(null);

    function setVideo(): void{
        if (play) {
            playRef.current?.play();
        } else {
            playRef.current?.pause();
        }
    }
    return (
        <section className="pt-[224px] pb-[192px]">
            <div className="container mx-auto px-5">
                <div className="flex gap-x-[110px]">
                    <Logo />
                    <Play setVideo={setVideo} />
                </div>
                <div className="p-4 mt-[80px] mb-[119px]">
                    <video
                        className="yt-bg-video d-sm-block d-none rounded-[12px]"
                        preload="auto"
                        width="1320"
                        height="740"
                        autoPlay={play}
                        loop={true}
                        muted={true}
                        ref={playRef}
                        controls
                    >
                        <source src="https://cms.jetour-ru.com/file/video/1672814240_dashing_pc.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="flex items-center justify-around  text-[48px] text-[#999]">
                    <h2 className="w-[627px]"><span className="text-[#1A1A1A]">JETOUR</span> Yuqori Didli Insonlar Uchun</h2>
                    <img src={arrow} alt="arrow" />
                </div>
            </div>
        </section>
    );
};

export default Intro;
