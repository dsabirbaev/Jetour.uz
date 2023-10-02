
import { service } from "../../db/db";
import Card from "../../components/UI/ServiceCard/Card";
import "./style.scss";
import salon from "../../assets/images/salon.png";
import logo from "../../assets/images/logo.png";
const Service = () => {
    return (
        <section id="service" className="pb-[90px]">
            <div className="container mx-auto px-5">
                <div>
                    <div className="flex gap-x-[140px] border-t-2 pt-5 pb-[80px] border-b-2 mb-[90px]">
                        <h2 className="uppercase">Service</h2>
                        <ul className="flex flex-col gap-y-2 w-full">
                            {
                                service?.map((item) => {
                                    return <li className="service-list"> <Card key={item.id} case={item} /> </li>
                                })
                            }
                        </ul>
                    </div>

                    <di className="flex justify-between">
                        <img src={salon} alt="salon" />
                        <div className="flex flex-col justify-around">
                            <img src={logo} alt="logo" className="mb-[67px]"/>

                            <form className="flex flex-col gap-y-[12px]">
                                <input type="text" placeholder="Name" className="text-[16px] rounded-[12px] py-[12px] px-[20px] bg-[#E6E6E6]"/>
                                <input type="number" placeholder="Phone" className="text-[16px] rounded-[12px] py-[12px] px-[20px] bg-[#E6E6E6]"/>
                                <button className="text-[16px] bg-black text-white rounded-[12px] py-[12px]">Yuborish</button>
                            </form>
                        </div>
                    </di>



                </div>
            </div>
        </section>
    );
};

export default Service;