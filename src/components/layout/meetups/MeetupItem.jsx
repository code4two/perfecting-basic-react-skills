const MeetupItem = ({ image, title, address, description }) => {
  return (
    <li className="mb-4">
      <div className="w-full h-20 flex justify-center">
        <img src={image} alt={title} />
      </div>
      <div className="text-center">
        <h3 className="mb-3">{title}</h3>
        <address className="mb-3">
          <i>{address}</i>
        </address>
        <p className="mb-3">{description}</p>
      </div>
      <div className="flex justify-center">
        <button className="border-1 border-pink-200 py-2 px-3 text-pink-700  rounded-xl font-semibold  ">
          To Favorites
        </button>
      </div>
    </li>
  );
};

export default MeetupItem;
