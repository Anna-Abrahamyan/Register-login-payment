import "./Form.css";
import Input from "./Input.js";
import { useHttp } from "../hooks/http.hooks.js";
import { useMessage } from "../hooks/message.hook.js";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import validate from "../validatior/Validator.js";
import useForm from "../validatior/UseForm.js";
import Loader from "react-loader-spinner";

function Register() {
  const { handleChange, handleSubmit, form, setForm, errors } =
    useForm(validate);
  const message = useMessage();
  const navigate = useNavigate();
  const { loading, setLoading, request, error, clearError } = useHttp();

  useEffect(() => {
    message(error);
    clearError();
  }, [error, message, clearError]);
  const registerHandler = async () => {
    try {
      const data = await request(
        /*`${process.env.REACT_APP_MY_APP_PORT}/api/auth/register}`, */
        "http://localhost:4002/api/auth/register",
        "POST",
        /*`${process.env.REACT_APP_MY_APP_PORT}/payment}`,*/
        {
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          username: form.username,
          password: form.password,
        }
      );
      message(data.message);
      navigate("/login");
    } catch (e) {}
  };

  const handleClick = () => {
    setLoading(true);
    validate(form);
    setTimeout(() => {
      if (Object.keys(errors).length === 0) {
        registerHandler();
      }
    }, 2000);
  };

  return (
    <div>
      <div className="form1">
        <form onSubmit={handleSubmit} className="form" noValidate>
          <div className="title">Welcome</div>
          <div className="subtitle">Let's register!</div>

          <div>
            <Input
              name="firstName"
              label="First name"
              form={form}
              setForm={setForm}
              type="text"
            />
            <div className="item">
              {errors.firstName && <p>{errors.firstName}</p>}
            </div>
          </div>
          <div>
            <Input
              name="lastName"
              label="Last name"
              onChange={handleChange}
              form={form}
              setForm={setForm}
              type="text"
            />
            {errors.lastName && <p>{errors.lastName}</p>}
          </div>
          <div>
            <Input
              name="email"
              label="Email"
              onChange={handleChange}
              form={form}
              setForm={setForm}
              type="email"
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div>
            <Input
              name="username"
              label="Username"
              onChange={handleChange}
              form={form}
              setForm={setForm}
              type="text"
            />
            {errors.username && <p>{errors.username}</p>}
          </div>
          <div>
            <Input
              name="password"
              label="Password"
              onChange={handleChange}
              form={form}
              setForm={setForm}
              type="password"
            />
            {errors.password && <p>{errors.password}</p>}
          </div>

          <button type="text" className="submit" onClick={handleClick}>
            Sign in
          </button>
          {loading && (
            <Loader
              type="TailSpin"
              color="white"
              height={30}
              width={30}
              timeout={3000}
            />
          )}
        </form>
      </div>
    </div>
  );
}

export default Register;
