import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Registration_Form() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const navigate = useNavigate();

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);

    const response = await fetch("https://formspree.io/f/xvgerrqk", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("success");
      e.currentTarget.reset();
      navigate("/success");
    } else {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-2xl font-semibold text-center mb-4">
          Hour of Worship Registration
        </h1>

        {status === "success" && (
          <p className="text-green-600 text-center mb-4">
            Registration successful!
          </p>
        )}

        {status === "error" && (
          <p className="text-red-600 text-center mb-4">
            Something went wrong. Try again.
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              required
              className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              required
              className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter Phone"
              required
              className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300"
            />
          </div>
          <button
            disabled={status === "submitting"}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold"
          >
            {status === "submitting" ? "Submitting..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
}
