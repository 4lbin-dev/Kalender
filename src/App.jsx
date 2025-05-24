
import { useState } from 'react';
import './index.css';

const weekdays = ["Mån", "Tis", "Ons", "Tors", "Fre", "Lör", "Sön"];
const dummyEvents = {
  0: ["08:00 – Lämning", "17:00 – Middag"],
  1: ["10:00 – Tandläkare", "18:00 – Träning"],
  2: ["09:00 – Möte", "15:00 – Hämta barn"],
  3: ["12:00 – Lunch med farmor"],
  4: ["07:30 – Jobb", "19:00 – Filmkväll"],
  5: ["10:00 – Simskola", "14:00 – Lekdejt"],
  6: ["09:30 – Utflykt", "16:00 – Planera veckan"]
};

function App() {
  const today = new Date();
  const monday = new Date(today.setDate(today.getDate() - today.getDay() + 1));
  const days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return d;
  });

  return (
    <div className="wrapper">
      <h1>Familjens vecka</h1>
      <div className="week">
        {days.map((day, i) => (
          <div key={i} className="day">
            <h2>{weekdays[i]}<br />{day.getDate()}/{day.getMonth() + 1}</h2>
            {(dummyEvents[i] || []).map((e, j) => (
              <div key={j} className="event">{e}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
