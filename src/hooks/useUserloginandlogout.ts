import { useDispatch } from "react-redux";
import { onuserlogin } from "../store/Slices/Users";
const useUserlogin = () => {
  const dispacth = useDispatch();
  const login = () => {
    dispacth(onuserlogin(true));
  };

  return [login];
};

export default useUserlogin;
