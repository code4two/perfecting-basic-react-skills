const MeetupItem = (image, title, address, description) => {
  return (
    <li className="m-1">
      <div className="w-full h-20">
        <img src={image} alt={title} />
      </div>
      <div className="text-center">
        <h3>{title}</h3>
        <address>{address}</address>
        <p>{description}</p>
      </div>
      <div className="">
        <button>To Favorites</button>
      </div>
    </li>
  );
};

export default MeetupItem;
