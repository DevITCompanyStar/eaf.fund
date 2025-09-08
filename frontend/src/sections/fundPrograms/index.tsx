import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/ui/customButton";
import { getImagePath } from "../../utils/imagePath";
import './style.css';
import { fundProgrammData } from "../../data";

const FundPrograms = () => {
  const navigate = useNavigate();
  return (
    <div className="fund-programs">
      <div className="fund-programs-title">
        <div className="secondary-text">Програми фонду</div>
        <h2>Поточні програми</h2>
      </div>

      <div className="fund-programs-list-container">
        {fundProgrammData.map((item) => (
          <div className="fund-programs-list-item">
            <div className="fund-programs-list-item-info">
              <div className="fund-programs-list-item-info-text-container">
                <div className="fund-programs-list-item-info-title">
                  {item.headerTitle}
                </div>

                <div className="fund-programs-list-item-info-description">
                  {item.currentProgrammInfo}
                </div>
              </div>

              <div className="fund-programs-list-item-info-buttons">
                <CustomButton variant="primary" onClick={() => navigate('/payment')}>Підтримати програму</CustomButton>
                <CustomButton variant="secondary" onClick={() => navigate(`/programs?id=${item.id}`)}>Детальніше</CustomButton>
              </div>
            </div>

            <div className="fund-programs-list-item-img">
              <img src={getImagePath(item.previewImage)} alt={item.headerTitle} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FundPrograms;