import { useState } from 'react';
import { getImagePath } from '../../utils/imagePath';
import './style.css';
import CustomButton from '../../components/ui/customButton';

const ReportPage = () => {
  const [currentReport, setCurrentReport] = useState<"all" | "new" | "events" | "announcement">('all');
  
  return (
    <div className="report-page">
      <div className="report-page-header">
        <h1>Звітність</h1>
        <div className="report-page-header-content">
          <div 
          className={`report-page-header-content-item ${currentReport === 'all' ? 'active' : ''}`} 
          onClick={() => setCurrentReport('all')}
          >
            <div className="secondary-text">
              Вся звітність
            </div>
            <div className="report-page-header-content-item-count">
              300
            </div>
          </div>

          <div 
          className={`report-page-header-content-item ${currentReport === 'new' ? 'active' : ''}`} 
          onClick={() => setCurrentReport('new')}
          >
            <div className="secondary-text">
              Новини
            </div>
            <div className="report-page-header-content-item-count">
              100
            </div>
          </div>

          <div 
          className={`report-page-header-content-item ${currentReport === 'events' ? 'active' : ''}`} 
          onClick={() => setCurrentReport('events')}
          >
            <div className="secondary-text">
              Події
            </div>
            <div className="report-page-header-content-item-count">
              50
            </div>
          </div>

          <div 
          className={`report-page-header-content-item ${currentReport === 'announcement' ? 'active' : ''}`} 
          onClick={() => setCurrentReport('announcement')}
          >
            <div className="secondary-text">
              Оголошення
            </div>
            <div className="report-page-header-content-item-count">
              5
            </div>
          </div>
        </div>
      </div>

      <div className="report-page-content">
        {[1,2,3,4,5].map((elem, indexRow) => (
          <div className={`report-page-content-row report-page-content-row-${indexRow}`}>
            {[1, 2, 3].map((elem, indexItem) => (
              <div className={`report-page-content-row-item report-page-content-row-item-${indexItem}`}>
                <div className="report-page-content-row-item-image">
                  <img src={getImagePath('report-img.png')} alt="report-image" />
                </div>

                <div className="report-page-content-row-item-additional">
                  <div className="report-page-content-row-item-additional-date">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.66667 0V1.33333H7.33333V0H8.66667V1.33333H11.3333C11.7015 1.33333 12 1.63181 12 2V11.3333C12 11.7015 11.7015 12 11.3333 12H0.666667C0.298477 12 0 11.7015 0 11.3333V2C0 1.63181 0.298477 1.33333 0.666667 1.33333H3.33333V0H4.66667ZM10.666 6.66667H1.33267L1.33333 10.6667H10.6667L10.666 6.66667ZM8.66667 8C9.03486 8 9.33333 8.29848 9.33333 8.66667C9.33333 9.03486 9.03486 9.33333 8.66667 9.33333C8.29848 9.33333 8 9.03486 8 8.66667C8 8.29848 8.29848 8 8.66667 8ZM3.33333 2.66667H1.33333L1.33267 5.33333H10.666L10.6667 2.66667H8.66667V4H7.33333V2.66667H4.66667V4H3.33333V2.66667Z" fill="#7B7F8E" />
                    </svg>
                    <div>12.06.2025</div>
                  </div>

                  <div className="report-page-content-row-item-additional-title">
                    Передали святкове печиво для діток із села Петрівка
                  </div>

                  <div className="report-page-content-row-item-additional-description">
                    Попри війну — життя триває. І наш обов’язок — дарувати дітям радість, тепло й віру в добро. За ініціативи голови благодійної організації «Європейський фонд допомоги»
                  </div>

                  <div className="report-page-content-row-item-additional-button">
                    <CustomButton variant="secondary">Звітність</CustomButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportPage; 