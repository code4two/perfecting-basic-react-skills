import Card from "../uis/Card";

const NewMeetupForm = () => {
  return (
    <Card>
      <form>
        <div>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" />
        </div>
        <div>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" />
        </div>
        <div>
          <label htmlFor="address">Meetup Address</label>
          <input type="text" required id="address" />
        </div>
        <div>
          <label htmlFor="description">Meetup Description</label>
          <textarea id="description" required rows="5"></textarea>
        </div>
        <div>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
