
import { service } from "../../db/db";
import Card from "../../components/UI/ServiceCard/Card";
import "./style.scss";
const Service = () => {
    return (
        <sectio className="">
            <div className="container mx-auto px-5">
                <div>
                    <div className="flex gap-x-[140px] border-t-2 pt-5 pb-[80px] border-b-2">
                        <h2 className="uppercase">Service</h2>
                        <ul className="flex flex-col gap-y-2 w-full">
                            {
                                service?.map((item) => {
                                    return <li className="service-list"> <Card key={item.id} case={item} /> </li>
                                })
                            }
                        </ul>
                    </div>



                </div>
            </div>
        </sectio>
    );
};

export default Service;