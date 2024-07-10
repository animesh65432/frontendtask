import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home";
import { useSelector } from "react-redux";
import Singin from "./components/Singin";
import { RootState } from "./store";
export default function App() {
  const isUserLogin = useSelector((state: RootState) => state.user.islogin);
  console.log(isUserLogin);
  return (
    <>
      {isUserLogin ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/login" element={<Singin />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </>
  );
}
