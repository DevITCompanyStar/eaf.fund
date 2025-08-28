import CustomButton from "../../components/ui/customButton"
import { getImagePath } from "../../utils/imagePath"
import './style.css';

const FundMission = () => {
    return (
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
    )
}

export default FundMission;