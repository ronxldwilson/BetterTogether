
import Image from 'next/image';

const Frame = ({path}) => {
    return (
        <div>
            <Image
                src={path || '/placeholder.jpg'}
                alt="Animated GIF"
                width={600}
                height={600}
                priority={true}
                unoptimized = {true}
            />
        </div>
    )
}

export default Frame;