import Card from "../uis/Card";
import { useRef } from "react";

const NewMeetupForm = () => {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    // alert("Fire🔥🔥🔥🔥🔥🔥🔥🔥🔥");

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    console.log(meetupData);
  };

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <div className="flex flex-col mb-2">
          <label htmlFor="title">Meetup Title</label>
          <input
            className="outline-1 outline-gray-200 mt-1 py-1 w-125 font-normal text-sm hover:outline-blue-500 p-1"
            type="text"
            required
            autoComplete="on"
            id="title"
            ref={titleInputRef}
          />
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="image">Meetup Image</label>
          <input
            className="outline-1 outline-gray-200 mt-1 py-1 w-125 font-normal text-sm hover:outline-blue-500 p-1"
            type="url"
            required
            autoComplete="on"
            id="image"
            ref={imageInputRef}
          />
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="address">Address</label>
          <input
            className="outline-1 outline-gray-200 mt-1 py-1 w-125 font-normal text-sm hover:outline-blue-500 p-1"
            type="text"
            required
            autoComplete="on"
            id="address"
            ref={addressInputRef}
          />
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="description">Description</label>
          <textarea
            className="outline-1 outline-gray-200 mt-1 py-1 w-125 font-normal text-sm hover:outline-blue-500 p-1"
            id="description"
            required
            autoComplete="on"
            rows="5"
            ref={descriptionInputRef}
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
