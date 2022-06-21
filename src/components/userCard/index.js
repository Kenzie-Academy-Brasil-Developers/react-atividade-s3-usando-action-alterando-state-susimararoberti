import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../../store/modules/user/action";
import "./style.css";

const UserCard = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleClick = () => {
    dispatch(changeName(name));
  };

  return (
    <div className="card">
      <h2>User name: {user.name}</h2>
      <div className="container">
        <input
          placeholder="Digite seu nome"
          className="container--input"
          onChange={(e) => setName(e.target.value)}
        />
        <button className="container--button" onClick={handleClick}>
          Change
        </button>
      </div>
    </div>
  );
};

export default UserCard;
