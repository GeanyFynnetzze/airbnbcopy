import { useState } from "react";

function FormChallenge() {
  const [challengeData, setChallengeData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    wantsNewsletter: true,
  });

  const handleChangeChallenge = (event) => {
    const { name, value, type, checked } = event.target;
    setChallengeData((prevChallengeData) => {
      return {
        ...prevChallengeData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const handleSubmitChallenge = (event) => {
    event.preventDefault();
    let checkNewsletter = challengeData.wantsNewsletter
      ? "and You will receive newsletter"
      : "but You will not receive newsletter";

    challengeData.password === challengeData.confirmPassword
      ? alert(`You have been registered ${checkNewsletter}`)
      : alert("Passwords are not matching");

    console.log(challengeData);
  };
  return (
    <form onSubmit={handleSubmitChallenge} className="form-challenge">
      <input
        type="email"
        placeholder="Email"
        onChange={handleChangeChallenge}
        name="email"
        value={challengeData.email}
      />
      <input
        className="password-email"
        name="password"
        value={challengeData.password}
        onChange={handleChangeChallenge}
        type="password"
        placeholder="Password"
      />
      <input
        className="password-email"
        name="confirmPassword"
        value={challengeData.confirmPassword}
        onChange={handleChangeChallenge}
        type="password"
        placeholder="Confirm Password"
      />
      <div className="check-challenge-div">
        <input
          className="check-challenge"
          name="wantsNewsletter"
          value={challengeData.wantsNewsletter}
          onChange={handleChangeChallenge}
          type="checkbox"
          id="wantsNewsletter"
        />
        <label htmlFor="wantsNewsletter">I want to join the newsletter</label>
      </div>
      <button>Sign Up</button>
    </form>
  );
}

export default FormChallenge;
