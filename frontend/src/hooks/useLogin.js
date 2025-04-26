import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/authContext";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthuser } = useAuthContext();

  const Logindata = async ({ username, password }) => {
    setLoading(true)
    try {
      const correct = HandelInput({ username, password });

      if (!correct) return;

      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,

          password,
        }),
      });

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }
      console.log(data);
      localStorage.setItem("user", JSON.stringify(data));
      setAuthuser(data);
    } catch (error) {
      toast.error(error.message);
    }
    finally{
      setLoading(false)
    }
  };
  return {loading,Logindata}
};

const HandelInput = async ({ username, password }) => {
  if (!username || !password) {
    toast.error("fill the inputs");
    return false;
  }
  return true;
};

export default useLogin;
