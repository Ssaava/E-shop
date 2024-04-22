import { Dispatch, SetStateAction, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

type ContextType = {
  setIsLoggingIn: Dispatch<SetStateAction<boolean>>;
};
const SignIn = () => {
  const { setIsLoggingIn } = useOutletContext<ContextType>();
  useEffect(() => {
    window.addEventListener("load", () => {
      setIsLoggingIn(true);
    });
  }, []);
  return <div>Sign-in</div>;
};

export default SignIn;
