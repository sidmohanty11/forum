import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { ME } from "../lib/me";

export const useAuth = () => {
  const { data, error } = useQuery(ME);
  const [tokenIsPresent, setTokenIsPresent] = useState(true);
  const token = localStorage.getItem("token");
  const [userId, setUserId] = useState(localStorage.getItem("user_id"));
  const navigate = useNavigate();

  useEffect(() => {
    if (!token || error) {
      setTokenIsPresent(false);
    }
    if (data && data.me) {
      setUserId(data.me.id);
      localStorage.setItem("user_id", data.me.id);
    }
  }, [token, navigate, error, data]);

  return { tokenIsPresent, userId };
};
