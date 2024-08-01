import { useForm } from "react-hook-form";
import "../assets/css/component.css";
type FormValue = {
  username: "string";
  email: "string";
  channel: "string";
};
const YoutubeForm = () => {
  const form = useForm<FormValue>();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: FormValue) => {
    console.log("form submited", data);
  };

  return (
    <div>
      <h1 className="title">Contact Form</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-control">
          <label htmlFor="username">UserName</label>
          <input
            type="text"
            id="username"
            {...register("username", {
              required: { value: true, message: "username is required" },
            })}
          />
          <p className="error">{errors.username?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register("email", {
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
              validate: (fieldValue: string) => {
                return (
                  fieldValue !== "admin  @example.com" ||
                  "This email is restricted"
                );
              },
            })}
          />
          <p className="error">{errors.email?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="channel">Message</label>
          <input
            type="text"
            id="channel"
            {...register("channel", {
              required: { value: true, message: "Channel is required" },
            })}
          />
          <p className="error">{errors.channel?.message}</p>
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default YoutubeForm;
