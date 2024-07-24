import { Column } from "../Column";
import { useState } from "react";
import { statusList, cardList } from "../../data";


export const Main = ({cards}) => {
 
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
           {statusList.map((status, i) => (
              <Column
              key = {i}
              title={status}
              cards={cards.filter((card) => card.status === status)}
            />
           ))}
            
           
           
          </div>
        </div>
      </div>
    </main>
  );
}
