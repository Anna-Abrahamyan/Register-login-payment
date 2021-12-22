import "./Form.css";
import Input from "./Input.js";
import { useHttp } from "../hooks/http.hooks.js";
import { useMessage } from "../hooks/message.hook.js";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext.js";
import { useNavigate } from "react-router-dom";
import Loader from "react-loader-spinner";

function Login() {
  const auth = useContext(AuthContext);
  const message = useMessage();
  const navigate = useNavigate();
  const { loading, setLoading, request, error, clearError } = useHttp();
  const [form, setForm] = useState({
    password: "",
    username: "",
  });

  useEffect(() => {
    message(error);
    clearError();
  }, [error, message, clearError]);

  const loginHandler = async () => {
    try {
      setLoading(true);
      const data = await request(
        "http://localhost:4002/api/auth/login",
        "POST",
        { ...form }
      );
      auth.login(data.token /*data.userId*/);
      navigate("/main");
    } catch (e) {}
  };
  return (
    <div className="login">
      <div className="form1">
        <div className="title">Log in</div>
        <Input
          name="username"
          label="Username"
          type="text"
          form={form}
          setForm={setForm}
        />
        <Input
          name="password"
          label="Password"
          type="password"
          form={form}
          setForm={setForm}
        />
        <button type="text" className="submit" onClick={loginHandler}>
          Sign in
        </button>
        {loading && (
          <Loader
            type="TailSpin"
            color="white"
            height={40}
            width={40}
            timeout={3000}
          />
        )}
      </div>
    </div>
  );
}

export default Login;
