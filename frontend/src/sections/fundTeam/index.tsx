import { getImagePath } from "../../utils/imagePath";
import './style.css';

const FundTeam = () => {
  return (
    <div className="fund-team">
      <div className="fund-team-title">
        <div className="secondary-text">Про нас</div>
        <h2>Наша команда фонду</h2>
      </div>

      <div className="fund-team-list-container">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((index) => (
          <div className="fund-team-list-item" key={index}>
            <img src={getImagePath(`/team-img.png`)} alt={`team-img-${index}`} />
            <div className="fund-team-list-item-pos">
              Волонтер
            </div>
            <div className="fund-team-list-item-name">
              Іван Іванов
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FundTeam;