import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LogoutBtn from "./LogoutBtn";


const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", slug: "/", active: true },
    { name: "Login", slug: "/Login", active: !authStatus },
    { name: "Signup", slug: "/Signup", active: !authStatus },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "Add Post", slug: "/add-post", active: authStatus },
  ];
  return (
    <>
      <ul>
        {navItems.map((item) => (
          item.active ? (
            <li key={item.name}>
              <button onClick={() => navigate(item.slug)}>{item.name}</button>
            </li>
          ) : null
        ))}
        {authStatus && (
          <li>
            <LogoutBtn/>
          </li>
        )}
      </ul>
    </>
  );
};

export default Header;
