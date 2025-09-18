import { Routes, Route } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import MainNavigation from "./components/layout/MainNavigation";

import "./App.css";

const App = () => {
  return (
    <div className="bg-pink-50 fixed inset-0">
      <MainNavigation />
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetupPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </div>
  );
};

export default App;
