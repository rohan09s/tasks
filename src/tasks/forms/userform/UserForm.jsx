import React, { useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import validator from "validator";

export default function UserForm() {
  const fileInputRef = useRef(null);

  const MAX_IMAGE_SIZE = 2 * 1024 * 1024;

  const validationSchema = Yup.object({
    fullName: Yup.string().trim().min(2, "Full name must be at least 2 characters").required("Full name is required"),
    dob: Yup.date().required("Date of birth is required").max(new Date(), "DOB cannot be in the future").test("age-range", "You must be at least 18 years old", function (value) {
        if (!value) return false;
        const today = new Date();
        const dob = new Date(value);
        let age = today.getFullYear() - dob.getFullYear();
        const m = today.getMonth() - dob.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) age--;
        return age >= 18;
      }),
    phone: Yup.string().required("Phone number is required").test("is-phone", "Enter a valid phone number", function (value) {
        if (!value) return false;
        const cleaned = value.replace(/[\s()-]/g, "");
        try {
          return validator.isMobilePhone(cleaned, "any");
        } catch {
          return /^\+?[0-9]{7,15}$/.test(cleaned);
        }
      }),
    email: Yup.string().trim().lowercase().required("Email is required").email("Enter a valid email address"),
    photo: Yup.mixed().nullable().test("fileType", "Only JPG/PNG images are allowed", function (value) {
        if (!value) return true;
        if (typeof value === "string") return true;
        return value && ["image/jpeg", "image/png"].includes(value.type);
      }).test("fileSize", "Image must be smaller than 2MB", function (value) {
        if (!value) return true;
        if (typeof value === "string") return true;
        return value && value.size <= MAX_IMAGE_SIZE;
      }),
    currentAddress: Yup.string().trim().min(5, "Please enter a more complete current address").required("Current address is required"),
    permanentAddress: Yup.string().trim().min(5, "Please enter a more complete permanent address"),
    sameAsCurrent: Yup.boolean(),
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      dob: "",
      phone: "",
      email: "",
      photo: null,
      currentAddress: "",
      permanentAddress: "",
      sameAsCurrent: false,
    },
    validationSchema,
    onSubmit: (values, { resetForm, setSubmitting }) => {
      const sanitized = {
        id: `${Date.now()}_${Math.floor(Math.random() * 10000)}`,
        fullName: values.fullName.trim(),
        dob: new Date(values.dob).toISOString().split("T")[0],
        phone: values.phone.trim(),
        email: values.email.trim().toLowerCase(),
        photo: null,
        currentAddress: values.currentAddress.trim(),
        permanentAddress: values.sameAsCurrent ? values.currentAddress.trim() : values.permanentAddress.trim(),
      };

      const finish = (dataUrl) => {
        sanitized.photo = dataUrl || null;
        console.log("Created user:", sanitized);
        setSubmitting(false);
        resetForm();
        fileInputRef.current && (fileInputRef.current.value = "");
      };

      if (values.photo && typeof values.photo !== "string") {
        const reader = new FileReader();
        reader.onload = (e) => finish(e.target.result);
        reader.onerror = () => finish(null);
        reader.readAsDataURL(values.photo);
      } else {
        finish(values.photo || null);
      }
    },
  });

  function onImageChange(e) {
    const file = e.target.files && e.target.files[0];
    if (!file) {
      formik.setFieldValue("photo", null);
      return;
    }

    if (!["image/jpeg", "image/png"].includes(file.type)) {
      formik.setFieldError("photo", "Only JPG/PNG images are allowed");
      return;
    }
    if (file.size > MAX_IMAGE_SIZE) {
      formik.setFieldError("photo", "Image must be smaller than 2MB");
      return;
    }

    const reader = new FileReader();
    reader.onload = (ev) => {
      formik.setFieldValue("photo", ev.target.result);
    };
    reader.readAsDataURL(file);
  }

  const FieldError = ({ name }) => {
    const msg = formik.touched[name] && formik.errors[name];
    if (!msg) return null;
    return <p className="mt-1 text-sm text-red-600">{msg}</p>;
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Create User</h2>

      <form onSubmit={formik.handleSubmit} className="bg-white rounded-lg p-6 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Photo (JPG/PNG, max 2MB)</label>
            <div className="flex items-center gap-4">
              <div className="w-28 h-28 rounded overflow-hidden bg-gray-50 border flex items-center justify-center">
                {formik.values.photo ? (
                  <img src={formik.values.photo} alt="preview" className="w-full h-full object-cover" />
                ) : (
                  <span className="text-sm text-gray-400">No image</span>
                )}
              </div>

              <div className="flex-1">
                <input ref={fileInputRef} type="file" accept="image/png, image/jpeg" onChange={onImageChange} className="text-sm" />
                <FieldError name="photo" />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Full name</label>
            <input name="fullName" value={formik.values.fullName} onChange={formik.handleChange}
              className={`w-full rounded border px-3 py-2 focus:outline-none focus:ring ${
                formik.touched.fullName && formik.errors.fullName ? "border-red-400" : "border-gray-300"
              }`}
              placeholder="Rohan A S"
            />
            <FieldError name="fullName" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Date of birth</label>
            <input type="date" name="dob" value={formik.values.dob} onChange={formik.handleChange}
              className={`w-full rounded border px-3 py-2 focus:outline-none focus:ring ${
                formik.touched.dob && formik.errors.dob ? "border-red-400" : "border-gray-300"
              }`}
            />
            <FieldError name="dob" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input name="phone" value={formik.values.phone} onChange={formik.handleChange}
              className={`w-full rounded border px-3 py-2 focus:outline-none focus:ring ${
                formik.touched.phone && formik.errors.phone ? "border-red-400" : "border-gray-300"
              }`}
              placeholder="e.g. +919999999999"
            />
            <FieldError name="phone" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input name="email" value={formik.values.email} onChange={formik.handleChange}
              className={`w-full rounded border px-3 py-2 focus:outline-none focus:ring ${
                formik.touched.email && formik.errors.email ? "border-red-400" : "border-gray-300"
              }`}
              placeholder="email@gmail.com"
            />
            <FieldError name="email" />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Current address</label>
            <textarea name="currentAddress" value={formik.values.currentAddress} onChange={formik.handleChange} rows={4}
              className={`w-full rounded border px-3 py-2 focus:outline-none focus:ring ${
                formik.touched.currentAddress && formik.errors.currentAddress ? "border-red-400" : "border-gray-300"
              }`}
              placeholder="Street, area, city, state, PIN"
            />
            <FieldError name="currentAddress" />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium mb-1">Permanent address</label>
              <label className="inline-flex items-center text-sm">
                <input type="checkbox" name="sameAsCurrent" checked={formik.values.sameAsCurrent}  onChange={(e) => formik.setFieldValue("sameAsCurrent", e.target.checked)}
                  className="mr-2"
                />
                Same as current
              </label>
            </div>

            <textarea name="permanentAddress" value={formik.values.permanentAddress} onChange={formik.handleChange} rows={4}
              disabled={formik.values.sameAsCurrent}
              className={`w-full rounded border px-3 py-2 focus:outline-none focus:ring ${
                formik.touched.permanentAddress && formik.errors.permanentAddress ? "border-red-400" : "border-gray-300"
              } ${formik.values.sameAsCurrent ? "bg-gray-50" : "bg-white"}`}
              placeholder="Street, area, city, state, PIN"
            />
            <FieldError name="permanentAddress" />
          </div>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <button type="submit" disabled={formik.isSubmitting} className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 disabled:opacity-60">
            Create user
          </button>

          <button
            type="button"
            onClick={() => {
              formik.resetForm();
              fileInputRef.current && (fileInputRef.current.value = "");
            }}
            className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}