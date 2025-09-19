import Jaguar from "./Jaguar";

const JaguarList = ({ ketchups }) => {
  return (
    <ul>
      {ketchups.map((ketchup) => (
        <Jaguar
          key={ketchup.id}
          id={ketchup.id}
          faculty={ketchup.faculty}
          department={ketchup.department}
          student={ketchup.student}
          image={ketchup.image}
          description={ketchup.description}
        />
      ))}
    </ul>
  );
};

export default JaguarList;
