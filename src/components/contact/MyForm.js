"use client";

import { useForm } from "react-hook-form";
import { FaRegUser, FaRegEnvelope } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import InputWithIcon from "./InputWithIcon";
import toast from "react-hot-toast";

const MyForm = ({ isDark }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        toast.success("Message sent successfully ✅");
        reset();
      } else {
        toast.error("Something went wrong ❌");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error sending email ❌");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p className="text-orange fs-3 mb-4">Send me a message</p>

      {/* Name */}
      <InputWithIcon
        icon={
          <FaRegUser className="position-absolute top-50 start-0 translate-middle-y fs-3 text-orange" />
        }
        type="text"
        placeholder="Your name"
        isDark={isDark}
        {...register("name", { required: "Name is required" })}
      />
      {errors.name && (
        <small className="text-danger">{errors.name.message}</small>
      )}

      {/* Email */}
      <InputWithIcon
        icon={
          <FaRegEnvelope className="position-absolute top-50 start-0 translate-middle-y fs-3 text-orange" />
        }
        type="email"
        placeholder="Your email"
        isDark={isDark}
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Invalid email",
          },
        })}
      />
      {errors.email && (
        <small className="text-danger">{errors.email.message}</small>
      )}

      {/* Message */}
      <div className="mb-3 position-relative">
        <FaRegMessage className="position-absolute top-50 start-0 translate-middle-y fs-3 text-orange" />
        <textarea
          className={`w-100 ps-5 py-3 isDark ${
            isDark ? "bg-dark2 text-light" : "bg-white text-dark"
          }`}
          placeholder="How can I help you?"
          {...register("message", { required: "Message is required" })}
        />
      </div>
      {errors.message && (
        <small className="text-danger">{errors.message.message}</small>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-danger rounded py-3 px-4 text-light d-block ms-auto"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send"}
      </button>
    </form>
  );
};

export default MyForm;
