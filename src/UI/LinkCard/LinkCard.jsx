import React, { useState } from "react";
import "./LinkCard.scss";

const LinkCard = ({ mainLink, shortenLink }) => {
  const [isCopied, setIsCopied] = useState(false);
  return (
    <div className="link-card__wrapper">
      <p className="link main-link">{mainLink}</p>
      <div className="short-link-btn__wrapper">
        <p className="link secondary-link">{shortenLink}</p>
        <div
          onClick={() => {
            setIsCopied((prev) => !prev);
          }}
          className={isCopied ? "btn--copied" : "btn--copy"}
        >
          {isCopied ? "copied" : "copy"}
        </div>
      </div>
    </div>
  );
};

export default LinkCard;
