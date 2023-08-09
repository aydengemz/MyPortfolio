import React from 'react';
import './HistoryCell.css'

function HistoryCell({ year, title, duration, details }) {
   return (
      <div className="cellBorder">
         <div className="marginCont">
            <div className="cellCont"/>
            <span className="cellPara">
               <span className="cellYear">
                  {year}
               </span>
               <h3 className="cellTitle">
                  {title}
               </h3>
               <div className="cellDur">
                  {duration}
               </div>
            </span>
            <p className="cellDetail">
               {details}
            </p>
         </div>
      </div>
   )
}

export default HistoryCell;