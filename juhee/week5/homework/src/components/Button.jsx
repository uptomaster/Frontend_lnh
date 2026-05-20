import "./Button.css";

const Button = ({ text, onclick }) => {
  return (
    <div>
      <button onClick={onclick}>{text}</button>
    </div>
  );
};

export default Button;
