"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

type FormData = {
  fullName: string;
  registrationNumber: string;
  email: string;
  phone: string;
  institution: string;
  department: string;
  year: string;
  teamName: string;
  track: string;
};

export default function RegisterPage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    registrationNumber: "",
    email: "",
    phone: "",
    institution: "",
    department: "",
    year: "",
    teamName: "",
    track: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Required";
    if (!formData.registrationNumber.trim()) newErrors.registrationNumber = "Required";
    if (!formData.email.trim()) newErrors.email = "Required";
    if (!formData.phone.trim()) newErrors.phone = "Required";
    if (!formData.institution.trim()) newErrors.institution = "Required";
    if (!formData.department.trim()) newErrors.department = "Required";
    if (!formData.year.trim()) newErrors.year = "Required";
    if (!formData.teamName.trim()) newErrors.teamName = "Required";
    if (!formData.track.trim()) newErrors.track = "Required";
    return newErrors;
  };

  const handleSubmit = () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      console.log("Submitted:", formData);
      alert("Registration submitted successfully!");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 relative">
      {/* Back to Home (Top) */}
      <Link
        href="/"
        className="absolute top-6 left-6 text-sm text-slate-400 hover:text-white transition"
      >
        ← Back to Home
      </Link>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-3">ZYPH  Registration</h1>
          <p className="text-slate-400">All fields are mandatory</p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <InputField label="Full Name *" name="fullName" value={formData.fullName} onChange={handleChange} error={errors.fullName} />
            <InputField label="Registration Number *" name="registrationNumber" value={formData.registrationNumber} onChange={handleChange} error={errors.registrationNumber} />
            <InputField label="Email Address *" name="email" type="email" value={formData.email} onChange={handleChange} error={errors.email} />
            <InputField label="Phone Number *" name="phone" value={formData.phone} onChange={handleChange} error={errors.phone} />
            <InputField label="College / University *" name="institution" value={formData.institution} onChange={handleChange} error={errors.institution} />
            <InputField label="Department *" name="department" value={formData.department} onChange={handleChange} error={errors.department} />
            <InputField label="Year of Study *" name="year" value={formData.year} onChange={handleChange} error={errors.year} />
            <InputField label="Team Name *" name="teamName" value={formData.teamName} onChange={handleChange} error={errors.teamName} />
          </div>

          <div className="mt-8">
            <SelectField
              label="Preferred Hackathon Track *"
              name="track"
              value={formData.track}
              onChange={handleChange}
              options={[
                "SDG 3",
                "SDG 4",
                "SDG 10",
                "SDG 13",
                "SDG 14",
                "SDG 17",
              ]}
              error={errors.track}
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full mt-10 bg-white text-black font-bold py-4 rounded-xl hover:bg-slate-200 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <CheckCircle className="w-5 h-5" />
                Submit Registration
              </>
            )}
          </button>

          <p className="text-center text-xs text-slate-500 mt-6">
            All fields are mandatory. Incomplete entries will be rejected.
          </p>

          {/* Back to Home (Bottom) */}
          <div className="mt-8 text-center">
            <Link
              href="/"
              className="text-sm text-slate-400 hover:text-white transition underline"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputField({ label, name, value, onChange, error, type = "text" }: any) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-2">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        required
        onChange={onChange}
        className={`w-full bg-black border ${
          error ? "border-red-500" : "border-zinc-700"
        } rounded-lg px-4 py-3 focus:outline-none focus:border-white`}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}

function SelectField({ label, name, value, onChange, options, error }: any) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-2">{label}</label>
      <select
        name={name}
        value={value}
        required
        onChange={onChange}
        className={`w-full bg-black border ${
          error ? "border-red-500" : "border-zinc-700"
        } rounded-lg px-4 py-3`}
      >
        <option value="">Select</option>
        {options.map((opt: string) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
