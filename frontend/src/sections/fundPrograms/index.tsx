import CustomButton from "../../components/ui/customButton";
import { getImagePath } from "../../utils/imagePath";
import './style.css';

const FundPrograms = () => {
  return (
    <div className="fund-programs">
      <div className="fund-programs-title">
        <div className="secondary-text">Програми фонду</div>
        <h2>Поточні програми</h2>
      </div>

      <div className="fund-programs-list-container">
        {[1, 2, 3, 4].map(() => (
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
  );
};

export default FundPrograms;