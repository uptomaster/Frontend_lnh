import "./SearchButton.css";

const SearchButton = ({ num, title, text, title2, text2 }) => {
  if (num === 2) {
    return (
      <button className="SearchButton double">
        <div className="section">
          <div className="title">{title}</div>
          <div className="text">{text}</div>
        </div>

        <div className="divider" />

        <div className="section">
          <div className="title">{title2}</div>
          <div className="text">{text2}</div>
        </div>
      </button>
    );
  } else {
    return (
      <button className="SearchButton single">
        <div className="title">{title}</div>
        <div className="text">{text}</div>
      </button>
    );
  }
};

export default SearchButton;
