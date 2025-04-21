
const HorizontalList = ({ data, setCurrentSlide, currentSlide }) => {
    const handleItemClick = (index) => {
        if (index >= 0 && index < data.length) {
            setCurrentSlide(index);
        }
    };

    return (
        <div className="flex items-center justify-center ">
            <ul className="flex flex-wrap space-x-2 sm:space-x-4 mb-2" style={{ fontFamily: 'var(--font-montserrat)' }}>
                {data.map((item, index) => (
                    <li
                        key={item}
                        onClick={() => handleItemClick(index)}
                        className={`mb-2 sm:mb-0 px-24 text-center mx-auto text-white hover:text-black hover:bg-white text-md xl:text-2xl cursor-pointer border ${index === currentSlide ? "text-white font-bold text-md underline xl:text-2xl" : "text-md xl:text-2xl"}`}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HorizontalList;