import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SearchView, UsersView, UserView } from "../pages";
import Users from "../pages/users/users";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchView />} />
        <Route path="/users/:username" element={<Users />} />
        <Route path="/user/:username" element={<UserView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
