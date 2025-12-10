import React, { createContext, useState } from "react";
import { FaUserCircle } from "react-icons/fa";

export const ResumeContext = createContext();

const ResumeBuilderProvider = ({ children }) => {
  const [profile, setProfile] = useState({
    photo: null,
    preview: "Photo",

    fullname: "Your Name",
    role: "Your Role",
    mobile: "Contact Number",
    email: "Email Address",
    city: "Your City",
    bio: "A Short Bio",

    skills: ["HTML, CSS, JavaScript"],

    experience: [
      {
        role: "Your Role in Previous Company",
        work: "Your work there",
        duration: "Year - Year",
      },
    ],

    education: [
      {
        degree: "Degree",
        institute: "Institute",
        percentage: "%",
        duration: "Year - Year",
      },
    ],
  });

  return (
    <ResumeContext.Provider value={{ profile, setProfile }}>
      {children}
    </ResumeContext.Provider>
  );
};

export default ResumeBuilderProvider;