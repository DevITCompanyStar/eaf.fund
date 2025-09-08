import { useNavigate, useSearchParams } from 'react-router-dom';
import FundHelp from '../../sections/fundHelp'; 
import './style.css';
import CustomButton from '../../components/ui/customButton';
import { getImagePath } from '../../utils/imagePath';
import { fundProgrammData } from '../../data';
import type { FundProgramm } from '../../data';
import { useState, useEffect } from 'react';
// import axios from 'axios';

const FundProgrammPage = () => {
  const [programm, setProgramm] = useState<FundProgramm | undefined>(undefined);
  const [othersProgramms, setOthersProgramms] = useState<FundProgramm[]>([]);
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const navigate = useNavigate();
  const [activeQuestions, setActiveQuestions] = useState<number[]>([]);

  useEffect(() => {
    const programm: FundProgramm | undefined = fundProgrammData.find((programm) => programm.id === Number(id));
    setProgramm(programm);
    setOthersProgramms(fundProgrammData.filter((programm) => programm.id !== Number(id)));
  }, [id]);

  // const getProgramms = async () => {
  //   const response = await axios.get(`http://185.209.20.190:8006/api/programs/`);
  //   return response.data;
  // };

  // Функція для розрахунку оптимальної сітки
  const calculateGridLayout = (purposeItems: any[]) => {
    if (!purposeItems || purposeItems.length === 0) return { rows: 0, columns: 0, items: [] };

    // Підраховуємо загальну кількість "слотів" (об'єкти з фото займають 2 слоти)
    let totalSlots = 0;
    purposeItems.forEach(item => {
      totalSlots += item.image ? 2 : 1;
    });

    // Знаходимо оптимальну конфігурацію сітки
    let bestConfig = { rows: 1, columns: totalSlots };

    // Перевіряємо різні варіанти від 2 до 5 колонок
    for (let cols = 5; cols >= 2; cols--) {
      const rows = Math.ceil(totalSlots / cols);
      if (rows >= 2 && rows <= 5 && totalSlots % cols === 0) {
        bestConfig = { rows, columns: cols };
        break;
      }
    }

    // Якщо не знайшли оптимальну конфігурацію, використовуємо найкращу з доступних
    if (bestConfig.rows < 2) {
      for (let cols = 2; cols <= 5; cols++) {
        const rows = Math.ceil(totalSlots / cols);
        if (rows <= 5) {
          bestConfig = { rows, columns: cols };
          break;
        }
      }
    }

    return { ...bestConfig };
  };

  const gridLayout = calculateGridLayout(programm?.fundProgrammPurpose || []);

  return (
    <div className="fund-programm-page">
      <div className="fund-programm-page-header">
        <div className="programm-page-header-text-container">
          <div className="programm-page-header-text-container-title">
            <h2>{programm?.headerTitle}</h2>
          </div>
          <div className="programm-page-header-text-container-description">
            {programm?.headerDescription.map((description, index) => (
              <h5 key={index}>{description}</h5>
            ))}
          </div>
          <CustomButton variant="primary" hasArrow={true} onClick={() => navigate('/payment')}>
            Підтримати
          </CustomButton>
        </div>

        <div className="programm-page-header-image-container">
          <img src={getImagePath(programm?.headerImage || '')} alt="Programm Page Header Image" />
        </div>
      </div>

      <div className="fund-programm-page-details-about-programm">
        <div className="fund-programm-page-details-about-programm-title">
          <h2>Детальніше <br /> про програму</h2>
          <div className="text-m">
            «Європейський Фонд Допомоги» (БО “ЄФД”) – Charity <br /> Organization «European Assistance Fund» (CO “EAF”)
          </div>
        </div>

        <div className="fund-programm-page-details-about-programm-description">
          {programm?.detailsAboutProgramm.map((description, index) => (
            <h5 key={index}>{description}</h5>
          ))}
        </div>
      </div>

      <div className="fund-programm-page-purpose">
        <div className="fund-programm-page-purpose-title">
          <h2>Мета програми</h2>
        </div>

        <div
          className="fund-programm-page-purpose-content"
          style={{
            gridTemplateColumns: `repeat(${gridLayout.columns}, 1fr)`,
            gridTemplateRows: `repeat(${gridLayout.rows}, 1fr)`,
          }}
        >
          {programm?.fundProgrammPurpose.map((item, index) => (
            <div
              key={item.id || index}
              className='fund-programm-page-purpose-content-item'
              style={{
                gridColumn: item.image ? 'span 2' : 'span 1',
              }}
            >
              <div className="fund-programm-page-purpose-content-item-text">
                <h2>{(index + 1).toString().padStart(2, '0')}</h2>
                <div className="text-m">{item.title}</div>
              </div>
              {item.image && (
                <div className="purpose-item-image">
                  <img src={getImagePath(item.image)} alt={item.title} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="fund-programm-page-others-programms">
        <div className="fund-programm-page-others-programms-title">
          <div className="secondary-text">Інші програми благодійної організації</div>
          <h2>Поточні програми</h2>
        </div>
        <div className="fund-programm-page-others-programms-container">
          {othersProgramms?.map((programm, index) => (
            <div className="fund-programm-page-others-programms-item" key={index}>
              <div className="fund-programm-page-others-programms-item-main-info">
                <h4>{programm.headerTitle}</h4>
                <div className="text-m">{programm.currentProgrammInfo}</div>

                <div className="fund-programm-page-others-programms-item-buttons" onClick={() => navigate('/payment')}>
                  <CustomButton variant="primary">
                    Підтримати програму
                  </CustomButton>
                  <CustomButton variant="secondary" onClick={() => navigate(`/programs?id=${programm.id}`)}>
                    Детальніше
                  </CustomButton>
                </div>
              </div>

              <div className="fund-programm-page-others-programms-item-image">
                <img src={getImagePath(programm.currentProgrammImage)} alt="Programm Page Header Image" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <FundHelp />

      {programm?.questions && (
      <div className="fund-programm-questions">
        <div className="fund-programm-questions-title">
          <div className="secondary-text">У вас є запитання?</div>
          <h2>Питання-відповіді</h2>
        </div>

        <div className="fund-programm-questions-content">
          {programm?.questions.map((question) => (
            <div 
              className={`fund-programm-questions-content-item ${activeQuestions.includes(question.id) ? 'active' : ''}`} 
              key={question.id} 
              onClick={() => setActiveQuestions(prev => prev.includes(question.id) ? prev.filter(id => id !== question.id) : [...prev, question.id])}
            >
              <div className="fund-programm-questions-content-item-question">
                <h5>{question.question}</h5>
                <div className="fund-programm-questions-content-item-question-plus">+</div>
              </div>

              <div className="fund-programm-questions-content-item-line"></div>

              <div className="fund-programm-questions-content-item-answer">
                <div className="text-m">{question.answer}</div>
              </div>
            </div>
            ))}
          </div>
        </div>
      )}

      {programm?.achivments && (
        <div className="fund-programm-page-achivments">
          <div className="fund-programm-page-achivments-title">
            <h2>Наші досягнення!</h2>
          </div>

          <div className="fund-programm-page-achivments-content">
            <div className="fund-programm-page-achivments-content-item">
              <h2>{programm.achivments.mainCount}</h2>
              <div className="text-m">{programm.achivments.mainAdditionalDescription}</div>
              <h5>{programm.achivments.mainDescription}</h5>
            </div>

            <div className="fund-programm-page-achivments-content-item">
              <h3>{programm.achivments.fundraisingTitle}</h3>
              <h5>{programm.achivments.fundraisingDescription}</h5>
            </div>

            <div className="fund-programm-page-achivments-content-item">
              <h2>20+</h2>
              <div className="text-m">Областей</div>
              <h5>Охоплено гуманітарнним напрямком</h5>
            </div>

            <div className="fund-programm-page-achivments-content-item button-item" onClick={() => navigate('/payment')}>
              <div className="fund-programm-page-achivments-content-item-button">+</div>
              <h5>Долучайся <br /> до допомоги!</h5>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FundProgrammPage; 