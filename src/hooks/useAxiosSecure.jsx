import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import useAuth from "./useAuth";
import { TOKEN } from "../pages/Shared/token/token";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000/api/v1",
});

const useAxiosSecure = () => {
  const { user, logOut } = useContext(AuthContext);
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
