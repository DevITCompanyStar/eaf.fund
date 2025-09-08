import FundMission from "../../sections/fundMission";
import FundReports from "../../sections/fundReports";
import FundHelp from "../../sections/fundHelp";
import FundTeam from "../../sections/fundTeam";
import FundThanks from '../../sections/fundThanks';
import FundMap from '../../sections/fundMap';
import FundContacts from '../../sections/fundContacts';

import { getImagePath } from '../../utils/imagePath';
import './style.css';

const downloadPDF = (fileName: string, fileUrl: string) => {
  try {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    link.target = '_blank';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error('Помилка при завантаженні PDF:', error);
  }
};

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
      <FundThanks />

      {/* Документи */}
      <div className="fund-documents">
        <div className="fund-documents-title">
          <div className="secondary-text">Документи</div>
          <h3>Статут благодійної організації <br /> "Європейський Фонд Допомоги"</h3>
        </div>
        
        <div className="fund-documents-list">
          <div className="fund-documents-list-item" onClick={() => {
            downloadPDF('Statut_EAF_2022.pdf', '/eaf.fund/documents/Statut_EAF_2022.pdf');
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M20 8V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V3C4 2.44772 4.44772 2 5 2H14C14.2652 2 14.5196 2.10536 14.7071 2.29289L19.7071 7.29289C19.8946 7.48043 20 7.73478 20 8ZM12 4H6V20H18V10H13C12.4477 10 12 9.55228 12 9V4ZM14 4.41421V8H17.5858L14 4.41421Z" fill="#2B384C" />
            </svg>
            Статут благодійної організації
            <img src={getImagePath('/icon-cloud-download.svg')} alt="icon-cloud-download" />
          </div>

          <div className="fund-documents-list-item" onClick={() => {
            downloadPDF('vuta.pdf', '/eaf.fund/documents/vutag.pdf');
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M20 8V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V3C4 2.44772 4.44772 2 5 2H14C14.2652 2 14.5196 2.10536 14.7071 2.29289L19.7071 7.29289C19.8946 7.48043 20 7.73478 20 8ZM12 4H6V20H18V10H13C12.4477 10 12 9.55228 12 9V4ZM14 4.41421V8H17.5858L14 4.41421Z" fill="#2B384C" />
            </svg>
            Витяг про неприбутковість
            <img src={getImagePath('/icon-cloud-download.svg')} alt="icon-cloud-download" />
          </div>
        </div>
      </div>

      <FundHelp />
      <FundTeam />

      {/* Контакти */}
      <FundContacts />

      {/* Карта */}
      <FundMap />
    </div>
  );
};

export default AboutUsPage; 