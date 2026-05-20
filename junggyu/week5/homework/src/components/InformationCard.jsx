const InfoCard = ({ image, title, desc }) => {
    return (
        <div className="w-[360px] ">
            <img src={image} alt="아이콘" className="w-[24px] h-[24px] mb-[px]" />
            <h3 className="text-[22px] mb-[12px]">{title}</h3>
            <p className="text-[14px] mb-[12px]">{desc}</p>
        </div>

    );
};

export default InfoCard;

