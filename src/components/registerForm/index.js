import React from "react";
import "./registerForm.css";
import useForm from "react-hook-form";

const RegisterForm = ({action}) => {
  const { register, handleSubmit, errors, reset } = useForm();
  const onSubmit = data => {
    action(data);
    reset({
      username: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h3>Register</h3>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          name="username"
          ref={register({ required: "Username required" })}
        />
      </div>
      {errors.username && <p className=" text-white">{errors.username.message} </p>}
      <div className="form-group">
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          name="password"
          ref={register({ required: "Password required" })}
        />
      </div>
      {errors.password && <p className="text-white">{errors.password.message} </p>}
      <div className="form-group">
        <input
          type="password"
          className="form-control"
          placeholder="Confirm Password"
          name="confirmPassword"
          ref={register({ required: "Password confirmation required" })}
        />
      </div>
      {errors.confirmPassword && <p className="text-white">{errors.confirmPassword.message} </p>}

      <button type="submit" className="btn btn-primary">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;