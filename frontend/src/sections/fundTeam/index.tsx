import { getImagePath } from "../../utils/imagePath";
import './style.css';
import { teamData } from '../../data';
import type { TeamMember } from '../../data';

const FundTeam = () => {
  return (
    <div className="fund-team">
      <div className="fund-team-title">
        <div className="secondary-text">Про нас</div>
        <h2>Наша команда фонду</h2>
      </div>

      <div className="fund-team-list-container">
        {teamData.map((member: TeamMember) => (
          <div className="fund-team-list-item" key={member.id}>
            <img src={getImagePath(`${member.image}`)} alt={`${member.image}`} className="fund-team-list-item-img"/>
            <div className="fund-team-list-item-pos">
              {member.position}
            </div>
            <div className="fund-team-list-item-name">
              {member.name}
            </div>
            <div className="fund-team-list-item-socials-container">
              <div className="fund-team-list-item-socials">
                <a href={`${member.phone}`} target="_blank" rel="noopener noreferrer">
                  <img src={getImagePath(`/icon-member-phone.svg`)} alt="instagram" />
                </a>
              </div>

              <div className="fund-team-list-item-socials">
                <a href={`${/*member.email*/'mailto:help@eaf.fund'}`} target="_blank" rel="noopener noreferrer">
                  <img src={getImagePath(`/icon-member-mail.svg`)} alt="instagram" />
                </a>
              </div>

              <div className="fund-team-list-item-socials">
                <a href={`${member.instagram}`} target="_blank" rel="noopener noreferrer">
                  <img src={getImagePath(`/icon-member-instagram.svg`)} alt="instagram" className="fund-team-list-item-socials-icon"/>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FundTeam;