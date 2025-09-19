import JaguarList from "../components/layout/meetups/JaguarList";

const PIVOT_DATA = [
  {
    id: "m1",
    faculty: "Technology",
    department: "Mobile Development",
    student: "199",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, placeat? Dignissimos sint incidunt adipisci.",
  },
  {
    id: "m2",
    faculty: "Administration",
    department: "Management and Accouting",
    student: "400",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, placeat? Dignissimos sint incidunt adipisci.",
  },
  {
    id: "m3",
    faculty: "Art",
    department: "English",
    student: "700",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, placeat? Dignissimos sint incidunt adipisci.",
  },
  {
    id: "m4",
    faculty: "Science",
    department: "Geology",
    student: "27",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, placeat? Dignissimos sint incidunt adipisci.",
  },
  {
    id: "m5",
    faculty: "Art",
    department: "Law",
    student: "450",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, placeat? Dignissimos sint incidunt adipisci.",
  },
  {
    id: "m6",
    faculty: "Science",
    department: "Microbiology",
    student: "844",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, placeat? Dignissimos sint incidunt adipisci.",
  },
];

const FavoritePage = () => {
  return (
    <section>
      <h1>Using Dummy Data</h1>
      <JaguarList ketchups={PIVOT_DATA} />
    </section>
  );
};

export default FavoritePage;
