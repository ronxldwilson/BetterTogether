import Image from 'next/image'

const BAYCard = ({ title, content, path, order }) => {
    return (
        <div className="flex flex-col items-center px-4 py-2">
            <div
                className="flex flex-col xl:flex-row items-center justify-between w-full xl:w-[75%] gap-6"
            >
                {/* For smaller layouts, always render imagesection first */}
                <div className="flex flex-col xl:hidden">
                    {imageSection({ path })}
                    {textSection({ title, content, order })}
                </div>

                {/* For larger layouts, follow the `order` condition */}
                <div className="hidden xl:flex xl:items-center xl:justify-between xl:w-full">
                    {order ? (
                        <>
                            {textSection({ title, content, order })}
                            {imageSection({ path })}
                        </>
                    ) : (
                        <>
                            {imageSection({ path })}
                            {textSection({ title, content, order })}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};


function imageSection({ path }) {
    return (
        <div className="flex-shrink-0">
            <Image
                src={path}
                alt="Illustration"
                className="w-full max-w-[200px] md:max-w-[400px] h-auto mx-auto"
                width={150}
                height={200}
            />
        </div>
    );
}


function textSection({ title, content, order }) {
    return (
        <div
            className={`space-y-4 md:space-y-6 text-center xl:w-[50%] ${order ? "xl:text-left" : "xl:text-right"
                }`}
        >
            <div className="text-xl  font-medium">
                <p className="text-2xl text-balance md:text-3xl">{title}</p>
            </div>
            <div className="leading-relaxed text-base md:text-lg">
                <p>{content}</p>
            </div>
        </div>
    );
}

export default BAYCard;
