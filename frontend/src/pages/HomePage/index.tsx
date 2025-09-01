import InfiniteCarousel from '../../components/ui/infiniteCarousel';
import { getImagePath } from '../../utils/imagePath';
import './style.css';

import FundMission from '../../sections/fundMission';
import FundReports from '../../sections/fundReports';
import FundHelp from '../../sections/fundHelp';
import FundTeam from '../../sections/fundTeam';
import FundThanks from '../../sections/fundThanks';
import FundPrograms from '../../sections/fundPrograms';
import FundInfo from '../../sections/fundInfo';


const HomePage = () => {
  return (
    <div className="home-page">
      {/* Європейський фонд допомоги */}
      <FundInfo isHomePage={true} />

      {/* Програми фонду */}
      <FundPrograms />

      {/* Місія фонду */}
      <FundMission />

      {/* Допомога */}
      <FundHelp />  

      {/* Наша звітність */}
      <FundReports />

      {/* Подяки фонду */}
      <FundThanks />

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