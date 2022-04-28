import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const useAuth = () => {
  const [tokenIsPresent, setTokenIsPresent] = useState(true);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      setTokenIsPresent(false);
      navigate("/login");
    }
  }, [token, navigate]);

  return { tokenIsPresent };
};
