const MyButton = ({ text, type, onClick }) => {
  return (
    <button className="MyButton" onClick={onClick}>
      {text}
    </button>
  );
};

MyButton.defaultProps = {
  type: "default",
};

export default MyButton;
