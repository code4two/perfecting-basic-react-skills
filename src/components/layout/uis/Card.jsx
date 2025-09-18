const Card = ({ children }) => {
  return (
    <div className="bg-white rounded-md shadow-md shadow-black shadow-opacity-10 p-5">
      {children}
    </div>
  );
};

export default Card;
