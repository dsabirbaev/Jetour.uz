
import { service } from "../../db/db";
import Card from "../../components/UI/ServiceCard/Card";
const Service = () => {
    return (
        <section>
            <div className="container mx-auto px-5">
                <div>
                    <div>
                        <h2 className="uppercase">Service</h2>
                        <div>
                            {
                                service?.map((item) => {
                                    return <Card key={item.id} case={item}/>
                                })
                            }
                        </div>
                    </div>



                </div>
            </div>
        </section>
    );
};

export default Service;