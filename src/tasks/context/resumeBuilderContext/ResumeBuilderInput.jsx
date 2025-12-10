import React, { useContext, useEffect } from "react";
import { ResumeContext } from "./ResumeBuilderProvider";
import { Formik, Form, Field, FieldArray } from "formik";
import DummyProfile from "../../../assets/DummyProfile.jpeg"
const inputStyle = {
  width: "100%",
  padding: 10,
  marginBottom: 12,
  border: "1px solid #0f0f0fff",
  borderRadius: 8,
  outline: "none",
  boxSizing: "border-box",
};

const ResumeBuilderInput = () => {
  const { profile, setProfile } = useContext(ResumeContext);

  // Initial values
  const initialValues = {
    //   photo: profile.photo || null,
    //   preview: profile.preview || "",
    //   fullname: profile.fullname || "FullName",
    //   role: profile.role || "Role",
    //   mobile: profile.mobile || "Mobile",
    //   email: profile.email || "Email",
    //   city: profile.city || "City",
    //   bio: profile.bio || "Bio",

    //   skills: profile.skills && profile.skills.length ? profile.skills : [],

    //   experience:
    //     profile.experience && profile.experience.length
    //       ? profile.experience
    //       : [
    //           { role: "Previos Role", work: "Previous Work", duration: "Service Duration" },
    //         ],

    //   education:
    //     profile.education && profile.education.length
    //       ? profile.education
    //       : [
    //           { degree: "Degree", institute: "Institute", percentage: "%", duration: "Degree Duration" },
    //         ],
    // };

    photo: profile.photo,
    preview: profile.preview,
    fullname: profile.fullname,
    role: profile.role,
    mobile: profile.mobile,
    email: profile.email,
    city: profile.city,
    bio: profile.bio,

    skills: profile.skills && profile.skills.length ? profile.skills : [],

    experience:
      profile.experience && profile.experience.length
        ? profile.experience
        : [{ role: "", work: "", duration: "" }],

    education:
      profile.education && profile.education.length
        ? profile.education
        : [{ degree: "", institute: "", percentage: "", duration: "" }],
  };

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize={true}
      onSubmit={() => {}}
    >
      {({ values, setFieldValue }) => {
        useEffect(() => setProfile(values), [values]);

        return (
          <div style={{ display: "flex", width: "100%" }}>
            {/* FORM */}
            <Form style={{ width: "40%", padding: 25, fontFamily: "Arial" }}>
              {/* Photo Upload */}
              <input
                type="file"
                accept="image/*"
                style={inputStyle}
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (!file) return;
                  setFieldValue("photo", file);
                  setFieldValue("preview", URL.createObjectURL(file));
                }}
              />

              <Field
                name="fullname"
                placeholder="Full Name"
                style={inputStyle}
              />
              <Field name="role" placeholder="Role" style={inputStyle} />
              <Field name="mobile" placeholder="Mobile" style={inputStyle} />
              <Field name="email" placeholder="Email" style={inputStyle} />
              <Field name="city" placeholder="City" style={inputStyle} />
              <Field
                name="bio"
                placeholder="Short Bio (max 300 chars)"
                maxLength={300}
                style={inputStyle}
              />

              {/* SKILLS */}
              <h3>Skills</h3>
              <FieldArray name="skills">
                {({ push, remove }) => (
                  <>
                    {values.skills.map((skill, i) => (
                      <div key={i}>
                        <Field
                          name={`skills.${i}`}
                          placeholder="Skill"
                          style={inputStyle}
                        />
                        <button
                          type="button"
                          onClick={() => remove(i)}
                          style={{
                            border: "1px solid #cbd5f5",
                            borderRadius: 8,
                            padding: "4px 10px",
                            marginBottom: 12,
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => push("")}
                      style={{
                        border: "1px solid #cbd5f5",
                        borderRadius: 8,
                        padding: "6px 12px",
                      }}
                    >
                      Add Skill
                    </button>
                  </>
                )}
              </FieldArray>

              {/* EXPERIENCE */}
              <h3>Experience</h3>
              <FieldArray name="experience">
                {({ push, remove }) => (
                  <>
                    {values.experience.map((exp, i) => (
                      <div key={i}>
                        <Field
                          name={`experience.${i}.role`}
                          placeholder="Role"
                          style={inputStyle}
                        />
                        <Field
                          name={`experience.${i}.work`}
                          placeholder="Work"
                          style={inputStyle}
                        />
                        <Field
                          name={`experience.${i}.duration`}
                          placeholder="Duration"
                          style={inputStyle}
                        />
                        <button
                          type="button"
                          onClick={() => remove(i)}
                          style={{
                            border: "1px solid #cbd5f5",
                            borderRadius: 8,
                            padding: "4px 10px",
                            marginBottom: 12,
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() =>
                        push({
                          role: "New Job Role",
                          work: "Describe your responsibilities here",
                          duration: "Year - Year",
                        })
                      }
                      style={{
                        border: "1px solid #cbd5f5",
                        borderRadius: 8,
                        padding: "6px 12px",
                      }}
                    >
                      Add Experience
                    </button>
                  </>
                )}
              </FieldArray>

              {/* EDUCATION */}
              <h3>Education</h3>
              <FieldArray name="education">
                {({ push, remove }) => (
                  <>
                    {values.education.map((edu, i) => (
                      <div key={i}>
                        <Field
                          name={`education.${i}.degree`}
                          placeholder="Degree"
                          style={inputStyle}
                        />
                        <Field
                          name={`education.${i}.percentage`}
                          placeholder="Percentage"
                          style={inputStyle}
                        />
                        <Field
                          name={`education.${i}.institute`}
                          placeholder="Institute"
                          style={inputStyle}
                        />
                        <Field
                          name={`education.${i}.duration`}
                          placeholder="Duration"
                          style={inputStyle}
                        />
                        <button
                          type="button"
                          onClick={() => remove(i)}
                          style={{
                            border: "1px solid #cbd5f5",
                            borderRadius: 8,
                            padding: "4px 10px",
                            marginBottom: 12,
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() =>
                        push({
                          degree: "New Degree",
                          institute: "Institute Name",
                          percentage: "0%",
                          duration: "Year - Year",
                        })
                      }
                      style={{
                        border: "1px solid #cbd5f5",
                        borderRadius: 8,
                        padding: "6px 12px",
                      }}
                    >
                      Add Education
                    </button>
                  </>
                )}
              </FieldArray>
            </Form>

            {/* PREVIEW */}
            <div
              style={{
                width: "60%",
                background: "#f3f4f6",
                padding: 30,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  background: "#fff",
                  display: "grid",
                  gridTemplateColumns: "260px 1fr",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                }}
              >
                <aside
                  style={{ background: "#0f172a", color: "#fff", padding: 24 }}
                >
                  <img
                    src={values.preview ? values.preview : DummyProfile   }
                    alt="Profile"
                    style={{
                      width: 100,
                      height: 100,
                      borderRadius: 10,
                      marginBottom: 15 || "",
                    }}
                  />
                  <h2 style={{ fontSize: 22 }}>
                    {values.fullname || "FullName here"}
                  </h2>
                  <p
                    style={{ fontSize: 14, color: "#cbd5f5", marginBottom: 20 }}
                  >
                    {values.role || "Your Role"}
                  </p>

                  <h3
                    style={{
                      borderBottom: "1px solid #475569",
                      marginBottom: 8,
                    }}
                  >
                    Contact
                  </h3>
                  <p style={{ fontSize: 14 }}>
                    📞 {values.mobile || "Contact Number"}
                  </p>
                  <p style={{ fontSize: 14 }}>
                    ✉️ {values.email || "Your EMail"}
                  </p>
                  <p style={{ fontSize: 14, marginBottom: 20 }}>
                    📍 {values.city || "Your City"}
                  </p>

                  <h3
                    style={{
                      borderBottom: "1px solid #475569",
                      marginBottom: 8,
                    }}
                  >
                    Skills
                  </h3>
                  <ul style={{ paddingLeft: 18 }}>
                    {values.skills.map((s, i) => <li key={i}>{s}</li>) ||
                      "Add your skills"}
                  </ul>
                </aside>

                <main style={{ padding: 30 }}>
                  {/* PROFILE */}
                  <section style={{ marginBottom: 30 }}>
                    <h2
                      style={{
                        borderBottom: "2px solid #38bdf8",
                        marginBottom: 10,
                      }}
                    >
                      Profile
                    </h2>
                    <p
                      style={{
                        fontSize: 14,
                        lineHeight: 1.6,
                        overflowWrap: "break-word",
                        wordBreak: "break-word",
                        whiteSpace: "normal",
                      }}
                    >
                      {values.bio || "Write a short bio"}
                    </p>
                  </section>

                  {/* EXPERIENCE */}
                  <section style={{ marginBottom: 30 }}>
                    <h2
                      style={{
                        borderBottom: "2px solid #38bdf8",
                        marginBottom: 10,
                      }}
                    >
                      Experience
                    </h2>
                    {values.experience.map((exp, i) => (
                      <div key={i} style={{ marginBottom: 14 }}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            fontSize: 15,
                            fontWeight: "bold",
                          }}
                        >
                          <span>
                            {exp.role || "Your role in previous company"}
                          </span>
                          <span style={{ fontSize: 12, color: "#64748b" }}>
                            {exp.duration || "Duration of service from - to"}
                          </span>
                        </div>
                        <p style={{ fontSize: 14, marginTop: 4 }}>
                          {exp.work || "Describe your work in previous company"}
                        </p>
                        {i !== values.experience.length - 1 && (
                          <div
                            style={{
                              borderBottom: "1px dotted #94a3b8",
                              marginTop: 10,
                            }}
                          ></div>
                        )}
                      </div>
                    ))}
                  </section>

                  {/* EDUCATION */}
                  <section>
                    <h2
                      style={{
                        borderBottom: "2px solid #38bdf8",
                        marginBottom: 10,
                      }}
                    >
                      Education
                    </h2>
                    {values.education.map((edu, i) => (
                      <div key={i} style={{ marginBottom: 14 }}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            fontSize: 15,
                            fontWeight: "bold",
                          }}
                        >
                          <span>{edu.degree || "Your Degree"}</span>
                          <span>
                            {edu.percentage || "Percentage of Marks Obtained"}
                          </span>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            fontSize: 13,
                            color: "#475569",
                          }}
                        >
                          <span>{edu.institute || "Institute Name"}</span>
                          <span>
                            {edu.duration || "Duration of Course from - to"}
                          </span>
                        </div>
                        {i !== values.education.length - 1 && (
                          <div
                            style={{
                              borderBottom: "1px dotted #94a3b8",
                              marginTop: 10,
                            }}
                          ></div>
                        )}
                      </div>
                    ))}
                  </section>
                </main>
              </div>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default ResumeBuilderInput;
