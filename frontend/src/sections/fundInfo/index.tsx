import CustomButton from "../../components/ui/customButton";
import { getImagePath } from "../../utils/imagePath";
import './style.css';

const FundInfo = ({ isHomePage }: { isHomePage: boolean }) => {
  return (
    <div className="fund-info">
      <div className="fund-info-img">
        <img src={getImagePath(isHomePage ? '/eaf-img-1.png' : '/eaf-img-2.png')} alt="eaf-img" />
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
  )
}

export default FundInfo;