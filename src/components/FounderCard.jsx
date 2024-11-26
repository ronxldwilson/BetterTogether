import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const ProfileCard = ({ image, name, title, icons }) => {
  return (
    <div className="max-w-[20rem] bg-white rounded-xl shadow-lg p-6 m text-center border-2 ">
      {/* Profile Image */}
      <div className="flex justify-center">
        <img
          className="w-64 h-64 rounded-full object-cover border-4 border-white shadow-md"
          src={image}
          alt={name}
        />
      </div>

      {/* Name and Title */}
      <div className="mt-4">
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="text-sm text-gray-600">{title}</p>
      </div>

      {/* Icons */}
      <div className="flex justify-center mt-4 space-x-4">
        {icons.map((icon, index) => (
          <a
            key={index}
            href={icon.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-purple-600 transition-colors"
          >
            {icon.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
