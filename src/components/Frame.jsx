import Image from 'next/image';

const Frame = ({ path }) => {
    return (
        <div className="flex justify-center items-center p-4">
            <Image
                src={path || '/placeholder.jpg'}
                alt="Animated GIF"
                width={600}
                height={600}
                priority={true}
                unoptimized={true}
                className="rounded-3xl object-cover"
            />
        </div>
    );
};

export default Frame;
