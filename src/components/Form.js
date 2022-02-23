import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true,
    employement: "",
    favColor: "",
  });
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };
  return (
    <form onSubmit={handleSubmit}>
      {/* Text inputs */}
      <input
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        name="firstName"
        value={formData.firstName}
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
        name="lastName"
        value={formData.lastName}
      />
      <input
        type="email"
        placeholder="email"
        onChange={handleChange}
        name="email"
        value={formData.email}
      />
      {/* End of Text inputs */}
      {/* Checked input*/}
      <div className="checked-div">
        <input
          className="check-box"
          type="checkbox"
          id="isFriendly"
          name="isFriendly"
          checked={formData.isFriendly}
          onChange={handleChange}
        />
        <label className="label-checked" htmlFor="isFriendly">
          Are you black?
        </label>
      </div>

      {/* End of Checked input*/}
      {/* Textarea*/}

      <textarea
        placeholder="Comments"
        onChange={handleChange}
        name="comments"
        value={formData.comments}
      />
      {/* End of Textarea*/}
      {/* Radio inputs*/}

      <fieldset>
        <legend>Current employement status</legend>
        <input
          type="radio"
          id="unemployed"
          name="employement"
          onChange={handleChange}
          checked={formData.employement === "unemployed"}
          value="unemployed"
        />
        <label htmlFor="unemployed">Unemployed</label>
        <br />

        <input
          type="radio"
          id="part-time"
          name="employement"
          onChange={handleChange}
          checked={formData.employement === "part-time"}
          value="part-time"
        />
        <label htmlFor="part-time">Part-time</label>
        <br />
        <input
          type="radio"
          id="full-time"
          name="employement"
          onChange={handleChange}
          checked={formData.employement === "full-time"}
          value="full-time"
        />
        <label htmlFor="full-time">Full-time</label>
        <br />
      </fieldset>
      {/* End of Radio inputs*/}
      {/* Select Inputs*/}
      <label className="label-select" htmlFor="favColor">
        What is your favorite color?
      </label>
      <br />
      <select
        id="favColor"
        value={formData.favColor}
        onChange={handleChange}
        name="favColor"
      >
        <option value="">--Choose--</option>
        <option value="red">Red</option>
        <option value="orange">Orange</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>
      {/* End of Select Inputs*/}
      {/* Submit*/}
      <br />
      <br />
      <button>Submit</button>
      {/* End of Submit*/}
    </form>
  );
}

export default Form;
