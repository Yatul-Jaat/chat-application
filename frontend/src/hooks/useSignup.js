import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/authContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const{setAuthuser}=useAuthContext()

  const Signupdata = async ({
    username,
    Name,
    Email,
    password,
    confirmPassword,
  }) => {
    const success = handleInputError({
      username,
      Name,
      Email,
      password,
      confirmPassword,
    });
    if (!success) return;

    try {
      setLoading(true);

      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          Name,
          Email,
          password,
          confirmPassword,
        }),
      });
      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }
      console.log(data);
      localStorage.setItem( "user",JSON.stringify(data))
      setAuthuser(data)

      
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, Signupdata };
};

const handleInputError = async ({
  username,
  Name,
  Email,
  password,
  confirmPassword,
}) => {
  if (!Email || !Name || !username || !password || !confirmPassword) {
    toast.error("fill all the fields");
    return false;
  }
  if (confirmPassword !== password) {
    toast.error("password don't match");
    return false;
  }
  if (password.legth > 6) {
    toast.error("please make password 6 letter long");
    return false;
  }
  return true;
};

export default useSignup;
