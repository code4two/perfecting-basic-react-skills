import { useState, useEffect } from "react";

import MeetupList from "../components/layout/meetups/MeetupList";

const AllMeetupPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://my-first-firebase-projec-2635e-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setLoadedMeetups(data);
      });
  }, []);

  if (isLoading) {
    return (
      <section className="flex items-center justify-center my-6">
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section className="mt-4">
      <h1 className="font-bold text-2xl flex justify-center mb-3">
        All Meetups
      </h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
};

export default AllMeetupPage;
