import React from 'react'
import "./StatisticsCard.scss"

const StatisticsCard = ({logo,title,description}) => {
  return (
    <div className='statistics-card'>
        <div className="statistics-card__container">
            <div className="statistics-card__logo__wrapper">
               <img src={logo} alt="card-logo" />
            </div>
            <h3 className="statistics-card__title">
                {title}
            </h3>
            <p className="statistics-card__description">
                {description}
            </p>

            

        </div>


    </div>
  )
}

export default StatisticsCard