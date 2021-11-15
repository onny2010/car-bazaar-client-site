import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const Review = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    if (!data.name && !data.email) {
      data.name = user.displayName;
      data.email = user.email;
    }
    const isReview = window.confirm("Are you sure? Think again");
    if (isReview) {
      fetch("https://shielded-basin-18619.herokuapp.com/reviews", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.acknowledged) {
            alert("Review added successfully");
            reset();
          }
        });
    }
    console.log(data);
  };
  return (
    <div>
      <form className="form-control mb-3" onSubmit={handleSubmit(onSubmit)}>
        <label>Name:</label>
        <input
          disabled
          className="form-control mb-3"
          defaultValue={user.displayName}
          {...register("name")}
        />
        <label>Email:</label>
        <input
          disabled
          className="form-control mb-3"
          defaultValue={user.email}
          {...register("email")}
        />
        <label>Your Beautiful Message:</label>
        <textarea
          {...register("message", { required: true })}
          className="form-control mb-3"
        ></textarea>

        <label>Your review:</label>
        <select {...register("review", { required: true })}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option selected>5</option>
        </select>
        <br />

        <input className="btn btn-primary mt-3" type="submit" />
      </form>
    </div>
  );
};

export default Review;
