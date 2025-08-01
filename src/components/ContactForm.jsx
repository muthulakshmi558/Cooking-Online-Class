import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    description: "",
    file: null,
  });
  const [errors, setErrors] = useState({});
  const [fileName, setFileName] = useState("");

  const validate = () => {
    let temp = {};
    temp.email = /\S+@\S+\.\S+/.test(formData.email) ? "" : "Valid email required";
    temp.subject = formData.subject ? "" : "Subject is required";
    temp.description = formData.description ? "" : "Description is required";
    setErrors(temp);
    return Object.values(temp).every((x) => x === "");
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFormData({ ...formData, file: files[0] });
      setFileName(files[0]?.name);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted ✅");
      // handle upload / submission logic here
    }
  };

  return (
    <section className="bg-[#FFF6EF] px-6 py-16 font-[Poppins]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* FORM SECTION */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-2xl font-bold text-black">SUBMIT A TICKET</h2>

          {/* EMAIL */}
          <div>
            <label className="block text-sm font-semibold mb-1">REQUESTER<span className="text-red-500">*</span></label>
            <input
              name="email"
              type="email"
              placeholder="EMAIL"
              className={`w-full px-4 py-3 rounded-full shadow ${
                errors.email ? "border-red-500 border" : "border border-gray-200"
              }`}
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* SUBJECT */}
          <div>
            <label className="block text-sm font-semibold mb-1">SUBJECT<span className="text-red-500">*</span></label>
            <input
              name="subject"
              type="text"
              placeholder="SUBJECT"
              className={`w-full px-4 py-3 rounded-full shadow ${
                errors.subject ? "border-red-500 border" : "border border-gray-200"
              }`}
              value={formData.subject}
              onChange={handleChange}
            />
            {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
          </div>

          {/* DESCRIPTION */}
          <div>
            <label className="block text-sm font-semibold mb-1">DESCRIPTION<span className="text-red-500">*</span></label>
            <textarea
              name="description"
              rows="4"
              placeholder="DESCRIPTION"
              className={`w-full px-4 py-3 rounded-xl shadow ${
                errors.description ? "border-red-500 border" : "border border-gray-200"
              }`}
              value={formData.description}
              onChange={handleChange}
            />
            {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
          </div>

          {/* ATTACH FILE */}
          <div>
            <label className="text-sm font-semibold text-[#A7C957] cursor-pointer">
              <span className="hover:underline">+ ATTACH A FILE</span>
              <input
                type="file"
                name="file"
                onChange={handleChange}
                className="hidden"
              />
            </label>
            {fileName && <p className="text-xs mt-1 text-gray-600">📎 {fileName}</p>}
          </div>

          {/* CAPTCHA (Mock UI) */}
          <div className="flex items-center space-x-4 bg-white border px-4 py-3 rounded-xl shadow max-w-md">
            <input type="checkbox" className="w-5 h-5 accent-[#A7C957]" />
            <label className="text-sm font-semibold">I’M NOT A ROBOT</label>
            <img
              src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
              alt="captcha"
              className="h-6 ml-auto"
            />
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4">
            <button
              type="submit"
              className="bg-[#D57A66] hover:bg-[#c35f4f] text-white px-6 py-2 rounded-full font-semibold"
            >
              SUBMIT
            </button>
            <button
              type="reset"
              onClick={() => {
                setFormData({ email: "", subject: "", description: "", file: null });
                setErrors({});
                setFileName("");
              }}
              className="bg-white border border-gray-300 text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-100"
            >
              CANCEL
            </button>
          </div>
        </form>

        {/* IMAGE SECTION */}
        <div className="w-full">
          <img
            src="./src/assets/images/contact.png" // replace this path based on your image setup
            alt="Contact Banner"
            className="rounded-2xl shadow-xl w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
