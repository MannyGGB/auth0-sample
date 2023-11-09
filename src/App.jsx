import "./App.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";
function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const admins = ["manugonzalez.tech@gmail.com"];
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    <>
      {isAuthenticated && (
        <div>
          <Profile />
          <LogoutButton />
        </div>
      )}
      {!isAuthenticated && <LoginButton />}
      <h1>Auth0 Demo</h1>
      <p>Wanna log in?</p>

      {admins.includes(user?.email) && <a href="#">Super Secret Admin Page</a>}
    </>
  );
}

export default App;
