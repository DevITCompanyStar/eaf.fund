import './style.css';
import { getImagePath } from '../../utils/imagePath';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-main-content">
                <div className="footer-logo">
                    <img src={getImagePath('/org-img.png')} alt="organization-image" />
                </div>

                <div className="footer-info">
                    <div className="footer-contacts">
                        <div className="footer-block-name">
                            Контакти
                        </div>

                        <div className="footer-contact-item">
                            <img src={getImagePath('/icon-point.svg')} alt="icon-point" />
                            <div>Київ, вул. Хорива 7</div>
                        </div>

                        <div className="footer-contact-item">
                            <img src={getImagePath('/icon-email.svg')} alt="icon-email" />
                            <div>help@eaf.fund</div>
                        </div>

                        <div className="footer-contact-item">
                            <img src={getImagePath('/icon-phone.svg')} alt="icon-phone" />
                            <a href="tel:+380443002813">+38-044-300-2813</a>
                        </div>
                    </div>

                    <div className="social-container">
                        <div className="footer-social-links">
                            <div className="footer-block-name">
                                Соціальні мережі
                            </div>

                            <div className="footer-social-link-item">
                                <img src={getImagePath('/icon-facebook.svg')} alt="icon-facebook" />
                                <div>Facebook</div>
                            </div>

                            <div className="footer-social-link-item">
                                <img src={getImagePath('/icon-twitter.svg')} alt="icon-twitter" />
                                <div>Twitter</div>
                            </div>

                            <div className="footer-social-link-item">
                                <img src={getImagePath('/icon-instagram.svg')} alt="icon-instagram" />
                                <div>Instagram</div>
                            </div>

                            <div className="footer-social-link-item">
                                <img src={getImagePath('/icon-youtube.svg')} alt="icon-youtube" />
                                <div>Youtube</div>
                            </div>

                            <div className="footer-social-link-item">
                                <img src={getImagePath('/icon-tiktok.svg')} alt="icon-tiktok" />
                                <div>TikTok</div>
                            </div>
                        </div>

                        <div className="footer-social-links">
                            <div className="footer-block-name">
                                Месенджери
                            </div>

                            <div className="footer-social-link-item">
                                <img src={getImagePath('/icon-viber.svg')} alt="icon-viber" />
                                <div>Viber</div>
                            </div>

                            <div className="footer-social-link-item">
                                <img src={getImagePath('/icon-whatsapp.svg')} alt="icon-whatsapp" />
                                <div>WhatsApp</div>
                            </div>

                            <div className="footer-social-link-item">
                                <img src={getImagePath('/icon-telegram.svg')} alt="icon-telegram" />
                                <div>Telegram</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom-content">
                <div className="footer-bottom-content-left">
                    Благодійна Організація «Європейський Фонд Допомоги» (БО “ЄФД”) – Charity Organization European Assistance Fund (CO “EAF”) Код ЄДРПОУ 44793343 © 2022 Всі права захищені
                </div>

                <div className="footer-bottom-content-right">
                    <div>Політика конфіденційності</div>
                    <div>Публічна оферта</div>
                </div>
            </div>
        </div>
    );
};

export default Footer; 