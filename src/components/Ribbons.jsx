import { Bean } from './ui/Decor.jsx';
import { categories } from '../data/menu.js';
import './Ribbons.css';

const words = categories.map((c) => c.title);

function Group({ hidden }) {
  // Words are repeated so one group is always wider than the screen (seamless loop).
  const list = [...words, ...words];
  return (
    <div className="ribbon__group" aria-hidden={hidden || undefined}>
      {list.map((w, i) => (
        <span key={`${w}-${i}`} className="ribbon__item">
          {w}
          <Bean className="ribbon__bean" />
        </span>
      ))}
    </div>
  );
}

/** Two crossing marquee ribbons bridging the dark hero and the light About section. */
export default function Ribbons() {
  return (
    <div className="ribbons" aria-hidden="true">
      <div className="ribbon ribbon--back">
        <div className="ribbon__track ribbon__track--reverse">
          <Group />
          <Group hidden />
        </div>
      </div>
      <div className="ribbon ribbon--front">
        <div className="ribbon__track">
          <Group />
          <Group hidden />
        </div>
      </div>
    </div>
  );
}
