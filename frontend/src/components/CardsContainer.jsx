import React, { useEffect, useState } from 'react'
import Card from "./Card.jsx";

function CardsContainer() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('/data/data.json')
            .then((res) => res.json())
            .then((json) => setData(json))
            .catch((err) => console.error('Error al cargar el JSON:', err));
    }, []);
    if (data.length > 0)
        console.log(data)

  return (
    <div className="flex flex-col flex-wrap gap-4 px-4 bg-neutro-4 dark:bg-neutro-9">
   {data && data.map((card) => 
   <Card key={card.name} {...card} />)}
    </div>
  )
}

export default CardsContainer