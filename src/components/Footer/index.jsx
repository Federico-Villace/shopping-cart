import "./Footer.css";
export const Footer = () => {
  return (
    <div className="container container-box">
      <footer>
        <div className="div">
          <ul className="ul">
            <li>
              <a
                href="https://www.linkedin.com/in/federico-villace"
                target={"_blank"}
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/Federico-Villace" target={"_blank"}>
                GitHub
              </a>
            </li>
          </ul>
        </div>
        <div className="div">
          <p>Created By Federico Villace</p>
        </div>
      </footer>
    </div>
  );
};
