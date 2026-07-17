import { useContext } from "react";
import { UserContext } from "./UserContext"; // Dabbe ko import kiya

const UserProfile = () => {
  // useContext se dabba khola aur user ka naam nikala
  const username = useContext(UserContext);

  return (
    <div style={{ 
      border: "2px solid #555", 
      padding: "20px", 
      borderRadius: "8px",
      marginTop: "10px",
      backgroundColor: "#f9f9f9"
    }}>
      <h3>User Profile Component (Child)</h3>
      {username ? (
        <p>Welcome back, <strong>{username}</strong>! 🎉</p>
      ) : (
        <p>No user is logged in. Please log in from App.jsx</p>
      )}
    </div>
  );
};

export default UserProfile;