import axios from "axios";

export const loginUser = async (email: string, password: string) => {
  const response = await axios.post("/user/login", { email, password });
  if (response.status !== 200) {
    throw new Error("Error logging in user");
  }
  const data = await response.data;
  return data;
};

export const checkAuthStatus = async () => {
  const response = await axios.get("/user/auth-status");
  if (response.status !== 200) {
    throw new Error("Error checking auth status");
  }
  const data = await response.data;
  return data;
};

export const sendChatRequest = async (message: string) => {
  const response = await axios.post("/chat/new", { message });
  if (response.status !== 200) {
    throw new Error("Error checking chat requests");
  }
  const data = await response.data;
  return data;
};
