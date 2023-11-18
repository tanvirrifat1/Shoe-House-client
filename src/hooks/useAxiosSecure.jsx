import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TOKEN } from "../pages/Shared/token/token";
import { useAuth } from "./useAuth";

const axiosSecure = axios.create({
  baseURL: "https://watch-shop-mongoose.vercel.app/api/v1",
});

const useAxiosSecure = () => {
  const { user, logOut } = useAuth;
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem(TOKEN);
      if (token) {
        config.headers.Authorization = token;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          await logOut();
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  }, [logOut, navigate]);

  return [axiosSecure];
};

export default useAxiosSecure;
