import { publicOfferData } from "../../data";
import type { PublicOfferData } from "../../data";
import './style.css';

const PublicOffer = () => {
  return (
    <div className="public-offer-container">
      <h2>Публічна оферта про надання пожертвувань у благодійних цілях</h2>
      {publicOfferData.map((item: PublicOfferData, itemIndex: number) => (
        <div className="public-offer-item" key={`${itemIndex}`}>
          <h3>{item.title}</h3>
          {item.description.map((desc, descIndex) => (
            <div className="text-m" key={`${itemIndex}-${descIndex}`}>{desc}</div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PublicOffer;