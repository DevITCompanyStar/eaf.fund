import CustomButton from '../../components/customButton';
import InfiniteCarousel from '../../components/infiniteCarousel';
import { getImagePath } from '../../utils/imagePath';
import './style.css';


const HomePage = () => {
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
      <div className="fund-mission">
        <div className="fund-mission-info">
          <div className="fund-mission-info-title">
            <div className="fund-mission-info-title-text">
              <div className="secondary-text">Про нас</div>
              <h2>Місія фонду</h2>
            </div>

            <CustomButton variant="primary">Підтримати нас</CustomButton>
          </div>

          <div className="fund-mission-info-description">
            <div>
              Благодійна Організація «Європейський Фонд Допомоги» (БО “ЄФД”) – Charity Organization European Assistance Fund (CO “EAF”) було засновано 6 жовтня 2022 р. у місті Києві, Україна.
            </div>

            <div>
              Наша команда молодих енергійних людей, яким не чуже почуття співчуття та чуйності.
            </div>

            <div>
              Європейський Фонд Допомоги реалізує власні проекти та бере участь у реалізації програм інших благодійних фондів. І які так само розуміють що діти – це наше майбутнє!
            </div>
          </div>
        </div>

        <div className="fund-mission-img">
          <img src={getImagePath('/mission-img.png')} alt="mission-img" />
        </div>
      </div>

      {/* Допомога */}
      <div className="fund-help">
        <div className="fund-help-title">
          <div className="secondary-text">Допомога</div>
          <h2>Підтримайте нас</h2>
          <div className="fund-help-title-description">
            Нижче Ви можете побачити кнопки, натиснув на які зможете допомогти, тим хто цього потребує. Допомога важлива різна. Ви можете допомогти коштами, можете зробити репост, можете стати частиною нашої команди чи стати нашим партнером.
          </div>
          <CustomButton variant="secondary">+ Стати волонтером</CustomButton>
        </div>

        <div className="fund-help-buttons">
          <div className="fund-help-button-container">
            <div className="fund-help-button-container-img">
              <img src={getImagePath(`/help-img-1.png`)} alt="help-img-1" />
            </div>

            <div className="fund-help-button-container-text">
              <div className="fund-help-button-container-text-title">Допомога коштами</div>
            </div>
          </div>
        </div>
      </div>

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