import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { ME } from "../lib/me";

export const useAuth = () => {
  const { data, error } = useQuery(ME);
  const [tokenIsPresent, setTokenIsPresent] = useState(true);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token || error || !data) {
      setTokenIsPresent(false);
      navigate("/login");
    }
  }, [token, navigate, error, data]);

  return { tokenIsPresent, userId: data?.me.id };
};
