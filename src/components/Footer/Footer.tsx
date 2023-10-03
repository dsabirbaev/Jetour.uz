

const Footer = () => {
    return (
        <footer id="footer" className="pt-[40px] pb-[60px] bg-[#E6E6E6]">
            <div className="container mx-auto px-5">
                <div>
                    <div className="flex items-center justify-between mb-[40px]">
                        <h2 className="text-[#1A1A1A] text-[32px]">Uzbekistan</h2>
                        <div className="flex gap-x-[20px] font-['PoppinsMedium']">
                            <span className="bg-white p-[10px] rounded-[20px] font-medium text-[#666]">+(91) 033 30 03</span>
                            <span className="bg-white p-[10px] rounded-[20px] font-medium text-[#666]">Toshkent sh. Sergeli 2-mavze, 5-metro bekat</span>
                            <span className="bg-white p-[10px] rounded-[20px] font-medium text-[#666]">Jetour.uzbekistan@gmail.com</span>
                        </div>  

                    </div>
                    <div className="flex justify-between items-center gap-x-[20px] font-['PoppinsRegular']">
                        <span className="py-[5px] bg-[#333333] text-white text-[16px] grow rounded-full text-center"><a href="#">Facebook</a></span>
                        <span className="py-[5px] bg-[#333333] text-white text-[16px] grow rounded-full text-center"><a href="#">Instagram</a></span>
                        <span className="py-[5px] bg-[#333333] text-white text-[16px] grow rounded-full text-center"><a href="#">Telegram</a></span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;