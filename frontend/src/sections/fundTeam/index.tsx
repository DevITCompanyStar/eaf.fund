import { useState, useEffect } from "react";
import { getImagePath } from "../../utils/imagePath";
import type { TeamMember } from '../../data';
import axios from 'axios';
import './style.css';

const FundTeam = () => {
  const [teamData, setTeamData] = useState<TeamMember[]>([]);

  useEffect(() => {
    axios.get('http://185.209.20.190:8006/api/about/team/').then((response) => {
      setTeamData(response.data);
    });
  }, []);

  return (
    <div className="fund-team">
      <div className="fund-team-title">
        <div className="secondary-text">Про нас</div>
        <h2>Наша команда фонду</h2>
      </div>

      {teamData.length > 0 && (
      <div className="fund-team-list-container">
        {teamData.map((member: TeamMember, i: number) => (
          <div className="fund-team-list-item" key={member.name + member.position + i}>
            <img src={(`${member.image}`)} alt={`${member.image}`} className="fund-team-list-item-img"/>
            <div className="fund-team-list-item-pos">
              {member.position}
            </div>
            <div className="fund-team-list-item-name">
              {member.name}
            </div>
            <div className="fund-team-list-item-socials-container">
              <div className="fund-team-list-item-socials">
                <a href={`${member.phone_number}`} target="_blank" rel="noopener noreferrer">
                  <img src={getImagePath(`/icon-member-phone.svg`)} alt="instagram" />
                </a>
              </div>

              <div className="fund-team-list-item-socials">
                <a href={`${member.email}`} target="_blank" rel="noopener noreferrer">
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
      )}
    </div>
  )
}

export default FundTeam;