import { useDispatch } from "react-redux";
import { onuserlogin, setthecategory } from "../store/Slices/Users";
import { SigninTypes } from "../components/Singin";
const useUserlogin = () => {
  const dispacth = useDispatch();
  const login = (obj: SigninTypes) => {
    console.log(obj);
    dispacth(onuserlogin(true));
    dispacth(setthecategory(obj.category));
  };

  return [login];
};

export default useUserlogin;
