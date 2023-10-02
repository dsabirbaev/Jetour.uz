import img1 from "../../assets/images/about1.png";
import img2 from "../../assets/images/about2.png";
import img3 from "../../assets/icons/arrow-ver-white.svg";
import "./style.scss";
const About = () => {
    return (
        <section id="about" className="pb-[160px]">
            <div className="container mx-auto px-5">
                <h2 className="uppercase text-[#666] font-bold mb-[24px] border-b-2 pb-[20px]">About us</h2>

                <div>
                    <div className="flex gap-x-[20px] mb-5">
                        <img src={img1} alt="car" />
                        <div className="about-bg rounded-[12px] w-full p-10 flex flex-col justify-between">
                            <img src={img3} alt="arrow" className="self-end"/>
                            <p className="text-white text-[32px] uppercase">shinam salon xavfsiz sayohat</p>
                        </div>
                    </div>
                    <img src={img2} alt="car" />
                </div>
            </div>
        </section>
    );
};

export default About;