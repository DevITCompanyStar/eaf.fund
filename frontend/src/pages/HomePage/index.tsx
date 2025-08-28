import CustomButton from '../../components/ui/customButton';
import InfiniteCarousel from '../../components/ui/infiniteCarousel';
import { getImagePath } from '../../utils/imagePath';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './style.css';

import FundMission from '../../sections/fundMission';
import FundReports from '../../sections/fundReports';
import FundHelp from '../../sections/fundHelp';
import FundTeam from '../../sections/fundTeam';


const HomePage = () => {
  const thanksItems = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="home-page">
      {/* Європейський фонд допомоги */}
      <div className="fund-info">
        <div className="fund-info-img">
          <img src={getImagePath('/eaf-img.png')} alt="eaf-img" />
        </div>

        <div className="fund-info-text">
          <div className="fund-info-text-title">
            <h1>Європейський фонд допомоги</h1>
            <div>Благодійна Організація «Європейський Фонд Допомоги» (БО "ЄФД") - Charity Organization «European Assistance Fund» (CO "EAF").</div>
          </div>

          <div className="fund-info-text-description">
            <div className="fund-info-text-description-text">Наша мета об'єднати ресурси активних небайдужих людей для <span className="fund-info-text-description-text-strong">вирішення соціальних проблем</span> що потребують допомоги. Приєднуйся до нас!</div>
            <CustomButton variant="primary" hasArrow={true}>Підтримати нас</CustomButton>
          </div>
        </div>
      </div>

      {/* Програми фонду */}
      <div className="fund-programs">
        <div className="fund-programs-title">
          <div className="secondary-text">Програми фонду</div>
          <h2>Поточні програми</h2>
        </div>

        <div className="fund-programs-list-container">
          {[1,2,3,4].map(() => (
          <div className="fund-programs-list-item">
            <div className="fund-programs-list-item-info">
              <div className="fund-programs-list-item-info-text-container">
                <div className="fund-programs-list-item-info-title">
                  Допомога Збройним Силам України та забезпечення національної безпеки
                </div>

                <div className="fund-programs-list-item-info-description">
                  Програма “Допомога Збройним Силам України” забезпечує їх технікою та амуніцією. “Європейський Фонд Допомоги” збирає кошти, співпрацює з іншими організаціями та проводить заходи для підтримки.
                </div>
              </div>
              
              <div className="fund-programs-list-item-info-buttons">
                <CustomButton variant="primary">Підтримати програму</CustomButton>
                <CustomButton variant="secondary">Детальніше</CustomButton>
              </div>
            </div>

            <div className="fund-programs-list-item-img">
              <img src={getImagePath('/program-img-1.png')} alt="program-img-1" />
            </div>
          </div>
          ))}
        </div>
      </div>

      {/* Місія фонду */}
      <FundMission />

      {/* Допомога */}
      <FundHelp />  

      {/* Наша звітність */}
      <FundReports />

      {/* Подяки фонду */}
      <div className="fund-thanks">
        <div className="fund-thanks-title">
          <div className="secondary-text">Нагороди фонду та голови благодійної організації</div>
          <h2>Подяки нашого фонду</h2>
        </div>

        <div className="fund-thanks-list-container">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={16}
            slidesPerView="auto"
            navigation
            className="thanks-swiper"
          >
            {thanksItems.map((index) => (
              <SwiperSlide key={index} className="fund-thanks-list-item">
                <img src={getImagePath('/thanks-img.png')} alt={`thanks-img-${index}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Наша команда фонду */}
      <FundTeam />

      {/* Партнери */}
      <div className="fund-partners">
        <div className="fund-partners-title">
          <div className="secondary-text">Партнери</div>
          <h2>Партнери нашого фонду</h2>
        </div>

        <InfiniteCarousel speed={200} pauseOnHover={true} className="fund-partners-list-container" >
          {[1,2,3,4,5,6,7,8].map((index) => (
            <div className="fund-partners-list-item" key={index}>
              <img src={getImagePath(`/partner-img-${index}.png`)} alt={`partner-img-${index}`} />
            </div>
          ))}
        </InfiniteCarousel>
      </div>
    </div>
  );
};

export default HomePage; 