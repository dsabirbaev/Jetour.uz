import  {FC} from 'react';
import arrow from "../../../assets/icons/arrow.svg";
interface PROPS {
    title: string,
    description: string,
    image: string, 
    link: string, 
    speed:string,
    id: number
}

const Card: FC<{ case: PROPS }> = ({case:{title , description , img , link , speed}}) => {
    return (
        <div className='card flex gap-x-[132px] border-b-2  py-[40px]'>
            <div className="bg-[#E6E6E6] px-[55px] pt-[30px] pb-[10px] rounded-[12px] w-[650px]">
                <img src={img} alt="car" />
            </div>

            <div className="flex flex-col justify-between">
                <p className="text-[#999] text-[18px] uppercase">{speed}</p>
                <div>
                    <h2 className="uppercase text-[24px] mb-5 text-[#1A1A1A] w-[400px]">{title}</h2>
                    <p className="text-[16px] text-[#2e2525] flex">{description} <span className="bg-[#E6E6E6] w-[56px] h-[44px] flex items-center justify-center rounded-[8px]"><a href={link}><img src={arrow} alt="arrow"/></a></span></p>
                </div>
            </div>
        </div>
    );
};

export default Card;


