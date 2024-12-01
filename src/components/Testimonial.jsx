const Testimonial = ({ text, name }) => {
  return (
    <div className="p-6 w-full h-full flex flex-col justify-between bg-white rounded-lg shadow-lg">
      <p className="text-gray-600 italic">{text}</p>
      <p className="font-bold text-gray-900 text-right mt-4">- {name}</p>
    </div>
  );
};

export default Testimonial;
