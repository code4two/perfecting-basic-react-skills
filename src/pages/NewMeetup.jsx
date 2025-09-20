import { useNavigate } from "react-router-dom";

import NewMeetupForm from "../components/layout/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const navigate = useNavigate();

  const meetupDataValuesHandler = (meetupData) => {
    fetch(
      "https://my-first-firebase-projec-2635e-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      navigate("/");
    });
  };

  return (
    <section className="flex flex-col justify-center items-center mt-6 font-bold text-sm">
      <h1 className="mb-4 text-3xl">Add New Meetup</h1>
      <NewMeetupForm meetupDataValues={meetupDataValuesHandler} />
    </section>
  );
};

export default NewMeetupPage;
