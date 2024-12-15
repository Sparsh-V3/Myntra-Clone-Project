import { useState } from "react";
import "./loginOrSignup.css";

function LoginOrSignup() {
  const [inpValue, setInpValue] = useState("+91");

  const handleClick = () => {
    confirm(`Do you want to continue via ${inpValue}`);
  };

  return (
    <>
      <div className="my-form">
        <form action="" id="login-signup">
          <div className="image">
            <img src="src/assets/login-signup.webp" alt="" />
          </div>
          <div className="log-sign-sec">
            <input
              type="number"
              placeholder={`+91 | Mobile Number*`}
              onChange={(event) => {
                setInpValue(event.target.value);
              }}
            />
            <p className="terms">
              By continuing, I agree to the{" "}
              <span style={{ color: "#ff3f6c" }}>Terms of Use</span> &{" "}
              <span style={{ color: "#ff3f6c" }}>Privacy Policy</span>{" "}
            </p>
            <button type="submit" onClick={handleClick}>
              <strong>CONTINUE</strong>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginOrSignup;
