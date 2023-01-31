import { Routes, Route } from "react-router-dom";
import { UserInfoPage } from "./pages/UserInfoPage";

export const Routering = () => {
  return (
    <Routes>
        <Route exact path="/" element={<UserInfoPage/>} />
    </Routes>
  );
};
