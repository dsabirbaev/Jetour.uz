

import  {FC} from 'react';
import arrow from "../../../assets/icons/arrow-vertical.svg";
interface PROPS {
    text: string, 
    link: string
}

const Card: FC<{ case: PROPS }> = ({case:{text, link}}) => {
    return (
        <div className='card flex justify-between w-full py-[24px] border-b-2'>
            <p className="w-[782px] text-[16px] text-[#333] leading-[24px] font-['PoppinsRegular']">{text}</p> 
            <span className="bg-[#E6E6E6] w-[44px] h-[44px] flex items-center justify-center rounded-[8px]"><a href={link}><img className="w-[20px] h-[20px]" src={arrow} alt="arrow"/></a></span>
        </div>
    );
};

export default Card;


