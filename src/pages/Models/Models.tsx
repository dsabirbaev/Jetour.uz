
import {models} from "../../db/db";
import Card from "../../components/UI/Card/Card";
const Models = () => {
    return (
        <section>
            <div className="container mx-auto px-5">
                <h2 className="uppercase text-[#666] font-bold mb-[61px] border-b-2 pb-[20px]">Models</h2>

                <div className="flex flex-col ">
                    {
                        models.map((item) => {
                            return <Card key={item.id} case={item}/>
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default Models;