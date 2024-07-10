import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Singin from "./components/Singin";
import Result from "./components/Result";
import { useSelector } from "react-redux";
import { RootState } from "./store";

export default function App() {
  const isUserLogin = useSelector((state: RootState) => state.user.islogin);
  const istestcomplete = useSelector(
    (state: RootState) => state.quizes.istestcomplete
  );

  return (
    <Routes>
      {!isUserLogin && (
        <>
          <Route path="/login" element={<Singin />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </>
      )}

      {isUserLogin && !istestcomplete && (
        <>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </>
      )}

      {istestcomplete && (
        <>
          <Route path="/results" element={<Result />} />
          <Route path="*" element={<Navigate to="/results" />} />
        </>
      )}
    </Routes>
  );
}
