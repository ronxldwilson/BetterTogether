import Link from "next/link";

const ServiceCard = ({ title, description, onClick, buttonText, className = "" }) => {
    return (
        <div
            className={`flex flex-col md:flex-row justify-between items-start md:items-center rounded-lg m-1 p-6 bg-custom-light-pink border border-white/40 shadow-lg transition-transform duration-300 hover:scale-[1.02] ${className}`}
        >
            <div className="md:text-left text-center md:flex-1">
                <p className="text-lg font-medium mb-2  drop-shadow-md">{title}</p>
                <p className="text-sm  drop-shadow-sm">{description}</p>
            </div>
            <div className="flex flex-col items-center w-full md:w-20 md:m-10">
                <div className="">

                    <Link href={onClick || "#"}>
                        <button
                            className="mt-4 md:mt-0 md:ml-6 px-4 py-2 shadow-lg hover:from-pink-600 hover:to-red-600 focus:ring-4 focus:ring-pink-200 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
                            aria-label={buttonText}
                        >
                            {buttonText}
                        </button>
                    </Link>
                </div>
            </div>
        </div>


    );
};

export default ServiceCard;
