import NewMeetupForm from "../components/layout/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  return (
    <section className="flex flex-col justify-center items-center mt-6 font-bold text-md">
      <h1 className="mb-5 text-3xl">Add New Meetup</h1>
      <NewMeetupForm />
    </section>
  );
};

export default NewMeetupPage;
