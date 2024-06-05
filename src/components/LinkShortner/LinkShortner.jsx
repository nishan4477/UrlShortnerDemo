import React, { useState } from "react";
import "./LinkShortner.scss";
import LinkCard from "../../UI/LinkCard/LinkCard";

const LinkShortner = () => {
  const [LongLink, setLongLink] = useState("");
  const [createdLinks, setCreatedLinks] = useState([]);
  const createdLiked = [
    { link: "asdff/adfasdf/sadf", shortLink: "ads/sdf" },
    { link: "asdff/adfasdf/sadf", shortLink: "ads/sdf" },
    { link: "asdff/adfasdf/sadf", shortLink: "ads/sdf" },
  ];

  function handleShortener() {
    if (!LongLink) {
      alert("Please enter the link");
      return;
    }
    const temp = [...createdLinks];
    temp.push({ link: LongLink, shortLink: "ads/sdf" });
    setCreatedLinks(temp);
    setLongLink("");
  }
  return (
    <section className="link-shortner__container">
      <div className="container__main">
        <div className="link-shortner-field__wrapper">
          <div className="input-box__wrapper">
            <input
              type="text"
              name=""
              id=""
              placeholder="shorten the link here"
              onChange={(e) => setLongLink(e.target.value)}
            />
          </div>
          <div className="btn__shortner" onClick={() => handleShortener()}>
            Shorten it!
          </div>
        </div>

        {createdLinks?.length > 0 &&
          createdLinks.map((item, index) => {
            return (
              <LinkCard
                key={index}
                mainLink={item?.link}
                shortenLink={item?.shortLink}
              />
            );
          })}
      </div>
    </section>
  );
};

export default LinkShortner;


