import { useEffect, useState } from 'react';
import './style.css';
import { getImagePath } from '../../../utils/imagePath';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Footer = () => {
    const [contacts, setContacts] = useState<any>(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://185.209.20.190:8006/api/contacts/').then((response) => {
            console.log('data1', response.data[0]);
            setContacts(response.data[0]);
        });
    }, []);

    return (
        <div className="footer">
            {contacts ? (
            <>
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
                                <div>{contacts.location}</div>
                            </div>

                            <div className="footer-contact-item" onClick={() => window.open('mailto:help@eaf.fund', '_blank')}>
                                <img src={getImagePath('/icon-email.svg')} alt="icon-email" />
                                <div>{contacts.email}</div>
                            </div>

                            <div className="footer-contact-item" onClick={() => window.open(`tel:${contacts.phone_number}`, '_blank')}>
                                <img src={getImagePath('/icon-phone.svg')} alt="icon-phone" />
                                <a href={`tel:${contacts.phone_number}`}>{contacts.phone_number}</a>
                            </div>
                        </div>

                        <div className="social-container">
                            <div className="footer-social-links">
                                <div className="footer-block-name">
                                    Соціальні мережі
                                </div>

                                <div className="footer-social-link-item" onClick={() => window.open(contacts.facebook, '_blank')}>
                                    <img src={getImagePath('/icon-facebook.svg')} alt="icon-facebook" />
                                    <div>Facebook</div>
                                </div>

                                <div className="footer-social-link-item" onClick={() => window.open(contacts.twitter, '_blank')}>
                                    <img src={getImagePath('/icon-twitter.svg')} alt="icon-twitter" />
                                    <div>Twitter</div>
                                </div>

                                <div className="footer-social-link-item" onClick={() => window.open(contacts.instagram, '_blank')}>
                                    <img src={getImagePath('/icon-instagram.svg')} alt="icon-instagram" />
                                    <div>Instagram</div>
                                </div>

                                <div className="footer-social-link-item" onClick={() => window.open(contacts.youtube, '_blank')}>
                                    <img src={getImagePath('/icon-youtube.svg')} alt="icon-youtube" />
                                    <div>Youtube</div>
                                </div>

                                <div className="footer-social-link-item" onClick={() => window.open(contacts.tiktok, '_blank')}>
                                    <img src={getImagePath('/icon-tiktok.svg')} alt="icon-tiktok" />
                                    <div>TikTok</div>
                                </div>
                            </div>

                            <div className="footer-social-links">
                                <div className="footer-block-name">
                                    Месенджери
                                </div>

                                <div className="footer-social-link-item" onClick={() => window.open(contacts.viber, '_blank')}>
                                    <img src={getImagePath('/icon-viber.svg')} alt="icon-viber" />
                                    <div>Viber</div>
                                </div>

                                <div className="footer-social-link-item" onClick={() => window.open(contacts.whatsapp, '_blank')}>
                                    <img src={getImagePath('/icon-whatsapp.svg')} alt="icon-whatsapp" />
                                    <div>WhatsApp</div>
                                </div>

                                <div className="footer-social-link-item" onClick={() => window.open(contacts.telegram, '_blank')}>
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
                        <div onClick={() => navigate('/privacy-policy')}>Політика конфіденційності</div>
                        <div onClick={() => navigate('/public-offer')}>Публічна оферта</div>
                    </div>
                </div>
            </>
            ) : (
                <>
                    <div className="footer-main-content">
                        <div className="footer-logo">
                            <img src={getImagePath('/org-img.png')} alt="organization-image" />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Footer; 