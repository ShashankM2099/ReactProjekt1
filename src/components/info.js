import React, { useState } from "react";

export default function Info() {
  // using a hook to capture
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
  });

  //maybe i can use a Promise in here????
  //using a hook to capture states
  const [submitted, setSubmitted] = useState(false);

  const handleFirstName = (event) => {
    setValues({ ...values, firstName: event.target.value });
  };
  const handleLastName = (event) => {
    setValues({ ...values, lastName: event.target.value });
  };
  const handleAge = (event) => {
    setValues({ ...values, age: event.target.value });
  };
  const handleEmail = (event) => {
    setValues({ ...values, email: event.target.value });
  };

  const handleSubmit = (event) => {
    // event.preventDefault();
    // setSubmitted(true);
    //doing it in a promise
    return new Promise((resolve, reject) => {
      event.preventDefault();
      if (true) {
        resolve(setSubmitted(true));
      } else reject();
    });
  };
  handleSubmit()
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
  //End of catch and then-block
  return (
    <html className="form">
      <div className="form-container">
        <h1>Thank you for taking your time </h1>
        <h2>We'll get back to you shortly!</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          {submitted ? (
            <div className="success-msg">
              Success-Thanks for submitting {values.firstName}{" "}
            </div>
          ) : null}
          <input
            disabled={submitted}
            onChange={handleFirstName}
            value={values.firstName}
            className="form-field"
            placeholder="First Name: "
            required
          />

          <input
            disabled={submitted}
            onChange={handleLastName}
            value={values.lastName}
            className="form-field"
            placeholder="Last Name: "
            required
          />

          <input
            disabled={submitted}
            onChange={handleAge}
            value={values.age}
            className="form-field"
            placeholder="Age: "
            required
          />

          <input
            disabled={submitted}
            onChange={handleEmail}
            value={values.email}
            className="form-field"
            placeholder="E-Mail:"
            required
          />
          {/* add radio buttons here */}
          {/* <input
                    type="radio"
                    name="XY"
                    value="Definitely"
                    onChange={e=>setValues(e.target.value)}
                    />Definitely */}

          <button className="button-51" type="submit">
            Submit
          </button>
        </form>
      </div>
    </html>
  );
}
