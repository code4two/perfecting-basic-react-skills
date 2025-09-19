import Card from "../uis/Card";

const Jaguar = ({ faculty, department, student, image, description }) => {
  return (
    <li className="flex justify-center text-center mb-6">
      <Card>
        <div className="mb-2">
          <img className="w-full h-45" src={image} alt={department} />
        </div>
        <div className="mb-2">
          <b>Department: </b>
          {department}
        </div>
        <div className="mb-2">
          <b>Number of Student: </b>
          {student}
        </div>
        <div className="mb-2">
          <h2>
            <b>Faculty: </b>
            {faculty}
          </h2>
        </div>
        <div className="mb-2">{description}</div>
        <div>
          <button
            required
            type="submit"
            className="w-full bg-green-700 text-white font-bold px-4 py-2 cursor-pointer rounded-md"
          >
            Submit
          </button>
        </div>
      </Card>
    </li>
  );
};

export default Jaguar;
