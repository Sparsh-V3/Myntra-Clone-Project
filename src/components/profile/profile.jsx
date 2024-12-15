import "./profile.css";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="profile">
      <h4>Welcome</h4>
      <p>To access account and manage orders</p>
      <button onClick={handleLoginClick}>LOGIN / SIGNUP</button>
    </div>
  );
}

export default Profile;
