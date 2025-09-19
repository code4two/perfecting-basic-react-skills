import Card from "../uis/Card";

const MeetupItem = ({ image, title, address, description }) => {
  return (
    <li className="mb-6 flex justify-center">
      <Card>
        <div className="flex justify-center">
          <img className="w-full h-50" src={image} alt={title} />
        </div>
        <div className="text-center my-6">
          <h3 className="mb-3 font-bold text-xl">{title}</h3>
          <address className="mb-3">
            <i>{address}</i>
          </address>
          <p className="mb-3">{description}</p>
        </div>
        <div className="flex justify-center my-2">
          <button className="border-1 border-pink-400 py-1 px-5 text-pink-700  rounded-md cursor-pointer">
            To Favorites
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
