
import { models } from "../../db/db";
import Card from "../../components/UI/Card/Card";
import arrow from "../../assets/icons/discover.svg";
const Models = () => {
    return (
        <section id="models" className="pb-[120px]">
            <div className="container mx-auto px-5">
                <h2 className="uppercase text-[#666] font-bold mb-[61px] border-b-2 pb-[20px]">Models</h2>

                <div className="flex flex-col mb-[40px]">
                    {
                        models.map((item) => {
                            return <Card key={item.id} case={item} />
                        })
                    }
                </div>

                <div className="flex justify-end mr-[250px]">
                    <div className="w-[200px] h-[200px] bg-[#F0F0F0] rounded-full flex items-center justify-center flex-col">
                        <p className="text-[#666666] text-[20px] capitalize font-medium border-b pb-[5px] font-['PoppinsMedium']">Discover</p>
                        <img src={arrow} alt="arrow" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Models;