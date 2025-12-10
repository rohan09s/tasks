import React, { createContext, useState } from "react";
import { FaUserCircle } from "react-icons/fa";

export const ResumeContext = createContext();

const ResumeBuilderProvider = ({ children }) => {
  const [profile, setProfile] = useState({
    photo: null,
    preview: "",

    fullname: "Full Name",
    role: "Role",
    mobile: "Mobile",
    email: "Email",
    city: "City",
    bio: "Bio",

    skills: ["HTML", "CSS"],

    experience: [
      {
        role: "Previous Role",
        work: "Previous Work",
        duration: "Previous Service Duration",
      },
    ],

    education: [
      {
        degree: "Degree",
        institute: "Institute",
        percentage: "%",
        duration: "Duration of degree",
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