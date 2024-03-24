import { useRef, useEffect } from "react";

import emailjs from "emailjs-com";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  const formRef = useRef(null);

//   useEffect(() => {
//     AOS.init({
//       duration: 4000,
//       easing: "ease-in-out",
//     });
//   }, []);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("An error occurred. Please try again later.");
        }
      );
  }

  return (
    <div className="flex items-center justify-center p-12 bg-indigo py-20">
      <div
        className="mx-auto w-full max-w-[600px] lg:text-center"
        data-aos="flip-up"
        data-aos-duration={1500}
        data-aos-offset="0"
      >
        <h1 className="mt-2 mb-20 text-3xl font-bold tracking-tight sm:text-4xl text-gold">
          CONTACT ME
        </h1>
        <form onSubmit={sendEmail} ref={formRef}>
          <div className="mb-5">
            <label
              for="name"
              className="mb-3 block text-base font-medium text-gold"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              for="email"
              className="mb-3 block text-base font-medium text-gold"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@domain.com"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              for="message"
              className="mb-3 block text-base font-medium text-gold"
            >
              Message
            </label>
            <textarea
              rows="4"
              name="message"
              id="message"
              placeholder="Type your message"
              className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></textarea>
          </div>
          <div>
            <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
