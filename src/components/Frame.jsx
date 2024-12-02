
import Image from 'next/image';

const Frame = ({path}) => {
    return (
        <div>
            <Image
                src={path || '/placeholder.jpg'}
                alt="Animated GIF"
                width={500}
                height={500}
                priority={true}
                unoptimized = {true}
            />
        </div>
    )
}

export default Frame;