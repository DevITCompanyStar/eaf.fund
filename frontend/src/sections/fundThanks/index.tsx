import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { getImagePath } from '../../utils/imagePath';
import './style.css';

const FundThanks = () => {
  const thanksItems = [1, 2, 3, 4, 5, 6, 7, 8];
  
  return (
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
  );
};

export default FundThanks;