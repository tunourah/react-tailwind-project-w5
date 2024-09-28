const Card = ({ title, description, image, link }) => {
  return (
    <div className="  shadow-lg  overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="font-semibold text-xl">{title}</h3>
        <p className="text-gray-600 mt-3">{description}</p>
        <a href={link} className="text-custom-brown font-semibold mt-4 inline-block hover:text-black">
          Read More &rarr;
        </a>
      </div>
    </div>
  );
};

export default Card
