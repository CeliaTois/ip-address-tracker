import "./style.css";

export default function Header() {
  return (
    <div id="header">
      <h1>IP Address Tracker</h1>
      <div id="search-bar">
        <input
          type="text"
          placeholder="Search for any IP address or domain"
        ></input>
        <button type="button">
          <img src="/images/icon-arrow.svg" alt="arrow"></img>
        </button>
      </div>
    </div>
  );
}
