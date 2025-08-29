import './style.css';
import FundMission from "../../sections/fundMission";
import FundReports from "../../sections/fundReports";
import FundHelp from "../../sections/fundHelp";
import FundTeam from "../../sections/fundTeam";
import FundThanks from '../../sections/fundThanks';
import { getImagePath } from '../../utils/imagePath';
import CustomButton from '../../components/ui/customButton';
import { TextField } from '@mui/material';
import { useState, useEffect } from 'react';

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
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
  const [map, setMap] = useState<any>(null);

  useEffect(() => {
    // Завантажуємо Leaflet CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    document.head.appendChild(link);

    // Завантажуємо Leaflet JS
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    script.onload = () => {
      // @ts-ignore
      const L = window.L;
      
      const mapInstance = L.map('map').setView([50.4501, 30.5234], 15); // Координати Києва
      
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(mapInstance);

      // Додаємо маркер для адреси
      L.marker([50.4501, 30.5234], {
        icon: L.icon({
          iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41]
        })
      })
      .addTo(mapInstance)
      .bindPopup('Європейський Фонд Допомоги<br>вул. Хорива, 7, Київ');

      setMap(mapInstance);
    };
    
    document.head.appendChild(script);

    return () => {
      if (map) {
        map.remove();
      }
    };
  }, []);

  const validateForm = (target: HTMLFormElement) => {
    // const name = target.name;
    // const email = target.email;
    // const phone = target.phone;
    // const message = target.message;

    const newErrors: { [key: string]: boolean } = { ...errors };

    if (target.name === 'name') newErrors.name = true;
    if (target.name === 'phone') newErrors.phone = true;
    if (target.name === 'message') newErrors.message = true;

    setErrors(newErrors);
    console.log("errors", errors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm(e.target as HTMLFormElement)) {
      // Форма валідна, відправляємо
      console.log('Форма відправлена');
    }
  };

  const handleInvalid = (e: React.FormEvent<HTMLFormElement>) => {
    validateForm(e.target as HTMLFormElement);
  };

  const handleInput = () => {
    setErrors({});
  };

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
            downloadPDF('statut-eaf-fund.pdf', '/eaf.fund/documents/statut-eaf-fund.pdf');
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M20 8V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V3C4 2.44772 4.44772 2 5 2H14C14.2652 2 14.5196 2.10536 14.7071 2.29289L19.7071 7.29289C19.8946 7.48043 20 7.73478 20 8ZM12 4H6V20H18V10H13C12.4477 10 12 9.55228 12 9V4ZM14 4.41421V8H17.5858L14 4.41421Z" fill="#2B384C" />
            </svg>
            Статут благодійної організації
            <img src={getImagePath('/icon-cloud-download.svg')} alt="icon-cloud-download" />
          </div>

          <div className="fund-documents-list-item" onClick={() => {
            downloadPDF('statut-eaf-fund.pdf', '/eaf.fund/documents/statut-eaf-fund.pdf');
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
      <div className="fund-contacts">
        <div className="fund-contacts-info">
          <div className="secondary-text">Зв'язок з нами</div>

          <h2>Контакти</h2>

          <div className="fund-contacts-info-description">
            <div className="fund-contacts-info-description-title">
              Зв'язатися з нами
            </div>

            <div className="fund-contacts-info-description-content">
              У цьому розділі ви знайдете інформацію про наші контакти. Ви завжди можете написати або зателефонувати, якщо вам потрібна допомога або ви хочете залишити пропозицію та побажання. Чекаємо від вас дзвінків та зворотного зв ‘язку.
            </div>
          </div>

          <div className="fund-contacts-info-contacts">
            <div className="fund-contacts-info-contacts-item">
              <img src={getImagePath('/icon-phone.svg')} alt="icon-phone" />
              +380-044-300-2813
            </div>

            <div className="fund-contacts-info-contacts-item">
              <img src={getImagePath('/icon-email.svg')} alt="icon-email" />
              help@eaf.fund
            </div>
          </div>
        </div>

        <div className="fund-contacts-form">
          <div className="fund-contacts-form-title">
            Форма зворотного зв'язку
          </div>

          <div className="fund-contacts-form-content">
            <form 
            onSubmit={(e) => {handleSubmit(e)}} 
            onInvalid={(e) => { handleInvalid(e) }}
            onInput={() => { handleInput() }}
            >
              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="name">Ім'я *</label>
                  <TextField
                    fullWidth
                    required
                    name="name"
                    variant="outlined"
                    error={errors.name}
                    placeholder="Введіть ваше ім'я"
                    className={`form-group-input ${errors.name ? 'error' : ''}`}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <TextField
                    fullWidth
                    name="email"
                    type="email"
                    placeholder="Введіть ваш Email"
                    className="form-group-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Номер телефону *</label>
                  <TextField
                    fullWidth
                    name="phone"
                    type="tel"
                    required
                    placeholder="Введіть ваш номер телефону"
                    className={`form-group-input ${errors.phone ? 'error' : ''}`}
                    error={errors.phone}
                  />
                </div>
              </div>

              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="message">Ваше повідомлення *</label>
                  <TextField
                    fullWidth
                    required
                    name="message"
                    multiline
                    rows={4}
                    placeholder="Введіть ваше повідомлення"
                    className={`form-group-input ${errors.message ? 'error' : ''}`}
                    error={errors.message}
                  />
                </div>
              </div>

              {(errors.name || errors.phone || errors.message) && (
                <div className="form-group-error">
                  Заповніть усі обов'язкові поля
                </div>
              )}

              <div className="form-group-submit">
                <CustomButton variant="primary" type="submit" className="submit-btn">
                  Відправити
                </CustomButton>

                <div className="form-group-submit-additional-info">
                  Натискаючи кнопку "Відправити", ви даєте усвідомлену <span> згоду на обробку своїх персональних даних </span> та погоджуєтеся з <span> політикою конфіденційності </span>.
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Карта */}
      <div className="fund-map">
        <div className="map-container">
          <div id="map" className="map"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage; 