
"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    inquiry_type: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_aylqtil", // Replace with your EmailJS service ID
        "template_1yy9iqa", // Replace with your EmailJS template ID
        formData,
        "m_a8OzS55JvpOkUjn" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("Message sent successfully:", response);
          alert("Message sent successfully!");
          setFormData({
            full_name: "",
            inquiry_type: "",
            email: "",
            phone: "",
            message: "",
          }); // Reset form after successful submission
        },
        (error) => {
          console.error("Error sending message:", error);
          alert("Failed to send message. Please try again.");
        }
      );
  };
  return (
    <div className="w-full min-h-screen relative overflow-hidden font-roboto bg-[#140C1F] ">
      <div
        className="relative flex w-full min-h-[50vh] md:h-[700px] overflow-hidden bg-no-repeat bg-cover animates-bgMove"
        style={{
          backgroundImage:
            "url('/contact-us/Vector1.svg'), url('/contact-us/Vector2.svg'), url('/contact-us/Vector3.svg'), url('/contact-us/Vector4.svg'), url('/contact-us/Vector5.svg'), url('/contact-us/Vector6.svg'), url('/contact-us/Vector7.svg'), url('/contact-us/Vector8.svg'), url('/contact-us/Vector9.svg'), url('/contact-us/Vector10.svg'), url('/contact-us/Vector11.svg'), url('/contact-us/Vector12.svg'), url('/contact-us/Vector13.svg'), url('/contact-us/Vector14.svg'), url('/contact-us/Vector15.svg'), url('/contact-us/Vector16.svg'), url('/contact-us/Vector17.svg'), url('/contact-us/Vector18.svg'), url('/contact-us/Vector19.svg'), url('/contact-us/Vector20.svg'), url('/contact-us/Vector21.svg'), url('/contact-us/Vector22.svg')",
          backgroundSize: "100%", // Ensure room for noticeable movement
          opacity: 0.5,
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Gradient Blur Background */}
        <img
          src="/Gradient+Blur.png"
          alt="Background Gradient"
          className="absolute top-[-10%] left-0 opacity-100"
        />
      </div>
      {/* Content */}
      <div className="absolute left-0 right-0 top-[7%] md:top-[16%] flex flex-col items-center justify-center px-6 md:px-12 text-center z-20">
        {/* Decorative Line and Heading */}
        <div className="flex items-center gap-2 mb-16">
          <img
            src="/left-side.svg"
            alt="Decorative Line Left"
            className="w-16 h-[5px] opacity-100"
          />
          <h2 className="text-2xl md:text-4xl lg:text-3xl text-white">
            How We May Help You
          </h2>
          <img
            src="/right-side.svg"
            alt="Decorative Line Right"
            className="w-16 h-[5px] opacity-100"
          />
        </div>

        {/* Subheading */}
        <h3 className="text-lg md:text-2xl lg:text-5xl font-semibold text-white mt-[-2rem]">
          Contact Us
        </h3>
      </div>

      <div className="text-center mt-26 h-[50vh] flex flex-col items-center justify-center gap-6 md:gap-6 bg-[#AD1AAF] bg-opacity-90 backdrop-blur-lg">
        {/* Heading */}
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold leading-tight text-white">
          <br />
          We Always Love to Hear from You.
        </h2>

        {/* Subheading */}
        <span className="text-2xl md:text-4xl lg:text-5xl font-bold text-white">
          Get in Touch!
        </span>
      </div>

      <div className="relative mb-28 h-auto flex flex-col justify-center items-center text-left px-6 md:px-16 bg-[#140C1F] text-white">
        {/* <!-- Content --> */}
        <div className="relative z-10 min-h-screen flex flex-col items-start md:flex-row justify-between gap-8 w-full max-w-5xl">
          {/* <!-- Text Section --> */}
          <div className="flex flex-col gap-4 w-full md:w-[40%]">
            <h2 className="text-2xl font-semibold text-center md:text-left mt-24 items-start">
              We’re always open to ideas.
            </h2>
            <p className="text-lg text-center md:text-left">Drop us a line!</p>
            <p className="text-sm text-center md:text-left text-gray-400">
              Or send us an email directly to:
            </p>
          </div>

          {/* <!-- Contact Form --> */}
          <form
            className="w-full flex flex-col items-center justify-start bg-[#231C2E] rounded-2xl p-6 mt-[100px] gap-6 bg-opacity-[50%] md:max-w-[50%]"
            onSubmit={handleSubmit}
          >
            {/* Dropdown Field */}
            <select
              name="inquiry_type"
              id="inquiry_type"
              value={formData.inquiry_type}
              onChange={handleChange}
              className="w-full p-4 bg-[#231C2E] border border-[#382f46] rounded-3xl text-white placeholder-white z-10"
            >
              <option value="">
                I would like to chat about...
              </option>
              <option value="inquiry">Inquiry</option>
              <option value="estimates">Estimates</option>
              <option value="feedback">Feedback</option>
            </select>

            {/* Full Name Field */}
            <input
              type="text"
              name="full_name"
              id="full_name"
              value={formData.full_name}
              onChange={handleChange}
              placeholder="Your Full Name"
              className="w-full p-4 bg-transparent border border-[#382f46] rounded-3xl text-white placeholder-white z-10"
            />

            {/* Email Field */}
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-4 bg-transparent border border-[#382f46] rounded-3xl text-white placeholder-white z-10"
            />
            {/* phone Field */}
            <input
              type="phone"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone"
              className="w-full p-4 bg-transparent border border-[#382f46] rounded-3xl text-white placeholder-white z-10"
            />

            {/* Message Field */}
            <textarea
              name="message"
              id="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 bg-transparent border border-[#382f46] rounded-3xl text-white placeholder-white z-10"
              placeholder="Your Message"
            ></textarea>

            {/* Submit Button */}
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="w-[10rem] py-3 px-2 bg-[#AD1AAF] text-white rounded-lg hover:bg-[#8b0f8d] transition"
              >
                SEND MESSAGE
              </button>
            </div>
          </form>

        </div>
      </div>
    </div >
  );
};

export default Contact;