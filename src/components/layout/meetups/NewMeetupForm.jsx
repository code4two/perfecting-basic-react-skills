import Card from "../uis/Card";

const NewMeetupForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();
    alert("Fire🔥🔥🔥🔥🔥🔥🔥🔥🔥");
  };

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <div className="flex flex-col mb-2">
          <label htmlFor="title">Meetup Title</label>
          <input
            className="outline-1 outline-gray-200 mt-1 py-1 w-125 font-normal text-sm hover:outline-blue-500"
            type="text"
            required
            autoComplete="on"
            id="title"
          />
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="image">Meetup Image</label>
          <input
            className="outline-1 outline-gray-200 mt-1 py-1 w-125 font-normal text-sm hover:outline-blue-500"
            type="url"
            required
            autoComplete="on"
            id="image"
          />
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="address">Address</label>
          <input
            className="outline-1 outline-gray-200 mt-1 py-1 w-125 font-normal text-sm hover:outline-blue-500"
            type="text"
            required
            autoComplete="on"
            id="address"
          />
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="description">Description</label>
          <textarea
            className="outline-1 outline-gray-200 mt-1 py-1 w-125 font-normal text-sm hover:outline-blue-500"
            id="description"
            required
            autoComplete="on"
            rows="5"
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button className="cursor-pointer text-white bg-pink-900 py-2 px-6 rounded-sm">
            Add Meetup
          </button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
