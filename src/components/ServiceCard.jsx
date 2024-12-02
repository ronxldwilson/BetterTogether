import Link from "next/link";

const ServiceCard = ({ title, description, onClick, buttonText, className = "" }) => {
    return (
        <div
            className={`flex flex-col md:flex-row justify-between items-start md:items-center rounded-lg m-1 p-6 bg-custom-misty-rose shadow-lg ${className}`}
        >
            <div className="text-left md:flex-1">
                <p className="text-lg font-medium mb-2">{title}</p>
                <p className="text-sm text-gray-600">{description}</p>
            </div>
            <Link href={onClick || "#"}>
                <button
                    className="mt-4 md:mt-0 md:ml-6 px-4 py-2 text-white rounded-lg transition-all whitespace-nowrap"
                    aria-label={buttonText}
                >
                    {buttonText}
                </button>
            </Link>
        </div>
    );
};

export default ServiceCard;
