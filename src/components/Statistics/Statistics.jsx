import React from "react";
import "./Statistics.scss";
import brandRec from "../../assets/images/icon-brand-recognition.svg";
import detail from "../../assets/images/icon-detailed-records.svg";
import fullyCustomizable from "../../assets/images/icon-fully-customizable.svg";
import StatisticsCard from "../../UI/StatisticsCard/StatisticsCard";

const Statistics = () => {
  const cardDetail = [
    {
      logo: brandRec,
      title: "Brand Recognition",
      description:
        "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content. hsadfasdfsadf asdf asdf asdf asdf asdf asd fasd fas dfa sdf",
    },
    {
      logo: detail,
      title: "Detailed Records",
      description:
        "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.hsadfasdfsadf asdf asdf asdf asdf asdf asd fasd fas dfa sdf",
    },
    {
      logo: fullyCustomizable,
      title: "Fully Customizable",
      description:
        "Perfomance analytics to your links. Knowing when and where people engage with your content helps inform better decisions.hsadfasdfsadf asdf asdf asdf asdf asdf asd fasd fas dfa sdf",
    },
  ];

  return (
    <div className="statistics__container">
      <div className="container__main">
        <h2 className="heading">Advanced Statistics</h2>
        <p style={{ marginBottom: "65px" }} className="sub-heading">
          Track how your your link are perform across the web with our advanced
          statistics dashboard.
        </p>
        <div className="card__container">
          <div className="line-through"></div>
          <div className="vertical-through"></div>

          {cardDetail?.map((item, index) => {
            return (
              <div key={index}>
                <StatisticsCard
                  logo={item?.logo}
                  title={item?.title}
                  description={item?.description}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
