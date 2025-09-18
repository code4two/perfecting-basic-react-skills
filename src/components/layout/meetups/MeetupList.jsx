import MeetupItem from "./MeetupItem";

const MeetupList = (itemss) => {
  return (
    <ul className="m-1">
      {itemss.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
};

export default MeetupList;
