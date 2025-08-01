import React, { useState } from "react";

const EnrollmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    gst: false,
    coupon: "",
    upi: "",
    card: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.match(/^\S+@\S+\.\S+$/)) newErrors.email = "Valid email required";
    if (!formData.mobile.match(/^\d{10}$/)) newErrors.mobile = "Enter 10 digit mobile number";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully");
      // handle API call here
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF6EB] p-4 flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-[#FFF1D8] max-w-3xl w-full p-6 md:p-10 rounded-3xl shadow-lg text-black"
      >
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-6 bg-[#A7C957] py-2 rounded-full">
          ENROLL
        </h2>

        <h3 className="text-center text-lg font-bold mb-4">
          BAKERY BUSINESS ACCELERATOR PROGRAM
        </h3>

        <div className="space-y-4">
          <div>
            <label className="block font-semibold mb-1">NAME</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-xl p-3 shadow text-black"
              placeholder="Enter your name"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div>
            <label className="block font-semibold mb-1">E MAIL</label>
            <div className="flex gap-2 items-center">
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-xl p-3 shadow text-black"
                placeholder="Enter your email"
              />
              <span className="font-bold">OR</span>
              <a href="#" className="underline font-bold text-sm whitespace-nowrap">
                ALREADY HAVE AN ACCOUNT
              </a>
            </div>
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div>
            <label className="block font-semibold mb-1">MOBILE NUMBER</label>
            <input
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full rounded-xl p-3 shadow text-black"
              placeholder="Enter your mobile number"
            />
            {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
          </div>

          <label className="flex items-center gap-2 mt-2">
            <input
              type="checkbox"
              name="gst"
              checked={formData.gst}
              onChange={handleChange}
              className="w-5 h-5"
            />
            <span className="text-sm font-medium">
              USE GSTIN For Claiming Input Tax (India)
            </span>
          </label>
        </div>

        <div className="my-6">
          <div className="bg-white rounded-xl p-3 shadow mb-2">
            SUB TOTAL: <span className="float-right">INR 36000</span>
          </div>
          <div className="bg-white rounded-xl p-3 shadow mb-2">
            DISCOUNT: <span className="float-right">INR 0.00</span>
          </div>
          <div className="bg-white rounded-xl p-3 shadow font-bold">
            TOTAL PAYABLE: <span className="float-right">INR 36000.00</span>
            <p className="text-xs mt-1 text-right">(INCL. 10% GST)</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <input
            name="coupon"
            value={formData.coupon}
            onChange={handleChange}
            className="flex-1 rounded-xl p-3 shadow text-black"
            placeholder="COUPON CODE"
          />
          <button
            type="button"
            className="bg-white rounded-xl px-4 py-3 border shadow text-sm font-semibold"
          >
            APPLY COUPON
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex-1">
            <label className="block font-semibold mb-1">UPI USE PAYMENT</label>
            <input
              name="upi"
              value={formData.upi}
              onChange={handleChange}
              className="w-full rounded-xl p-3 shadow text-black"
              placeholder="+ UPI ID"
            />
          </div>

          <div className="flex-1">
            <label className="block font-semibold mb-1">CREDIT/DEBIT CARD USE PAY</label>
            <input
              name="card"
              value={formData.card}
              onChange={handleChange}
              className="w-full rounded-xl p-3 shadow text-black"
              placeholder="+ CARD NUMBER"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#D57A66] hover:bg-[#c65c4d] text-white py-3 rounded-full font-bold text-lg transition"
        >
          SUBMIT & PAY NOW
        </button>
      </form>
    </div>
  );
};

export default EnrollmentForm;
