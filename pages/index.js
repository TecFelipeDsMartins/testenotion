import { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/hello");
        const { results } = await response.json();
        setData(results);
      } catch (error) {
        console.error(error);
      }
    }
    
    fetchData();
  }, []);

  return (
    <div>
      {data.map(item => (
          <li key={item.id}>
            <h2>{item.properties.question.title[0].plain_text}</h2>
            <p>{item.properties.basicAnswer.rich_text[0].plain_text}</p>
          </li>
        ))}
    </div>
  );
}

