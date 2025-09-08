import './style.css';
import { privacyPolicyData } from '../../data';
import { useState } from 'react';

const PrivacyPolicy = () => {
    const [activeQuestions, setActiveQuestions] = useState<number[]>([]);

    return (
        <div className="privacy-policy-container">
            <div className="privacy-policy-container-header">
                <h2>Політика конфіденційності</h2>
                <div className="privacy-policy-container-header-text">
                  Конфіденційність відвідувачів нашого веб-сайту 
                  <a href="https://www.eaf.fund" target="_blank" rel="noopener noreferrer"> www.eaf.fund </a> 
                  дуже важлива для нас, і ми прагнемо її захищати. Ця політика конфіденційності та файли cookie (надалі – «Політика») пояснює, що ми будемо робити з вашою особистою інформацією. Ця Політика поширюється тільки на інформацію, зібрану на нашому веб-сайті 
                  <a href="https://www.eaf.fund" target="_blank" rel="noopener noreferrer"> www.eaf.fund </a>
                  тому ми не несемо відповідальності за політику конфіденційності або зміст веб-сайтів третіх сторін.
                </div>
            </div>

            <div className="privacy-policy-container-content">
                {privacyPolicyData.map((item, index) => (
                    <div 
                    className={`privacy-policy-container-content-item ${activeQuestions.includes(index) ? 'active' : ''}`} 
                    key={index}
                    >
                    <div 
                    className="privacy-policy-container-content-item-title" 
                    onClick={() => setActiveQuestions(prev => prev.includes(index) ? prev.filter(id => id !== index) : [...prev, index])}
                    >
                            <h5>{item.title}</h5>
                            <div className="privacy-policy-container-content-item-text-plus">+</div>
                        </div>

                        <div className="privacy-policy-container-content-item-line"></div>
                        
                        <div className="privacy-policy-container-content-item-text">
                          <div className="privacy-policy-container-content-item-text-container">
                            {item.description.map((description, index) => (
                                <div className='text-m' key={index}>
                                  {description}
                                </div>
                              ))}
                          </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PrivacyPolicy;