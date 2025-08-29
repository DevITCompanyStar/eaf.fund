import CustomButton from "../../components/ui/customButton";
import { getImagePath } from "../../utils/imagePath";
import './style.css';

const FundReports = () => {
  return (
    <div className="fund-report" >
      <div className="fund-report-title">
        <h2>Наша звітність</h2>
        <CustomButton variant="secondary" className="fund-report-title-button">
          Переглянути всі звіти
          <img src={getImagePath(`/icon-arrow-right-24x24.svg`)} alt="arrow-right-angle" />
        </CustomButton>
      </div>

      <div className="fund-report-list-container">
        <div className="fund-report-list">
          {[1, 2, 3].map((index) => (
            <div className={`fund-report-list-item fund-report-list-item-${index}`} key={index}>
              <img src={getImagePath(`/report-img.png`)} alt={`report-img-${index}`} />

              <div className="fund-report-list-additional">
                <div className="fund-report-list-additional-title-text">
                  Звітність
                </div>

                <div className="fund-report-list-additional-title-info">
                  <div className="fund-report-list-additional-title-info-date">
                    <img src={getImagePath(`/icon-calendar.svg`)} alt="calendar" />
                    <div>12.06.2025</div>
                  </div>

                  <div className="fund-report-list-additional-title-info-name">
                    Передали святкове печиво для діток із села Петрівка
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="fund-report-list">
          {[4, 5, 6].map((index) => (
            <div className={`fund-report-list-item fund-report-list-item-${index}`} key={index}>
              <img src={getImagePath(`/report-img.png`)} alt={`report-img-${index}`} />

              <div className="fund-report-list-additional">
                <div className="fund-report-list-additional-title-text">
                  Звітність
                </div>

                <div className="fund-report-list-additional-title-info">
                  <div className="fund-report-list-additional-title-info-date">
                    <img src={getImagePath(`/icon-calendar.svg`)} alt="calendar" />
                    <div>12.06.2025</div>
                  </div>

                  <div className="fund-report-list-additional-title-info-name">
                    Передали святкове печиво для діток із села Петрівка
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div >
  )
}

export default FundReports;