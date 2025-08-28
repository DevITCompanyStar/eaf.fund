import './style.css';
import FundMission from "../../sections/fundMission";
import FundReports from "../../sections/fundReports";
import FundHelp from "../../sections/fundHelp";
import FundTeam from "../../sections/fundTeam";
import { getImagePath } from '../../utils/imagePath';

const AboutUsPage = () => {
  return (
    <div className="about-us-page">
      <FundMission />

      {/* Наші цінності */}
      <div className="fund-values">
        <div className="fund-values-info">
          <div className="fund-values-title">
            <div className="secondary-text">Цінності</div>
            <h2>Наші цінності</h2>
          </div>
          <div className="fund-values-description">
            <div>
              Європейський Фонд Допомоги об’єднує ресурси активних небайдужих людей та компаній для вирішення соціальних проблем.
            </div>

            <div>
              Фонд дає можливість кожному долучитись не тільки співчуттям, а й стати учасником конкретних дій задля сталого розвитку якості життя.
            </div>

            <div>
              Адже тільки спільними зусиллями благодійних організацій і небайдужих людей, ми зможемо змінити цей світ на краще. Ми віримо, що можемо все!
            </div>
          </div>
        </div>

        <div className="fund-values-images">
          <div className="fund-values-images-column">
            <div className="fund-values-images-column-item">
              Людяність
              <img src={getImagePath('/values-img-humanity.png')} alt="values-img" />
            </div>
          </div>

          <div className="fund-values-images-column">
            <div className="fund-values-images-column-item">
              Прозорість
              <img src={getImagePath('/values-img-transparency.png')} alt="values-img" />
            </div>

            <div className="fund-values-images-column-item">
              Експертність
              <img src={getImagePath('/values-img-expertise.png')} alt="values-img" />
            </div>
          </div>

          <div className="fund-values-images-column">
            <div className="fund-values-images-column-item">
              Партнерство
              <img src={getImagePath('/values-img-partnership.png')} alt="values-img" />
            </div>

            <div className="fund-values-images-column-item">
              Амбітність
              <img src={getImagePath('/values-img-ambition.png')} alt="values-img" />
            </div>
          </div>
        </div>
      </div>

      <FundReports />
      <FundHelp />
      <FundTeam />
    </div>
  );
};

export default AboutUsPage; 