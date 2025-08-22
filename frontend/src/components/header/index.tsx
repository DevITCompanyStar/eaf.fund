import { useLocation } from 'react-router-dom';
import './style.css';
import CustomButton from '../customButton';

const Header = () => {
    const { pathname } = useLocation();
    console.log(pathname);
    
  return (
    <div className="header">
      <div className="header-logo">
        <img src={'/logo.svg'} alt="logo" />
      </div>
      <div className="header-menu">
        <ul>
          <li><a href="/" className={pathname === '/' ? 'active' : ''}>Головна</a></li>
          <li><a href="/about" className={pathname === '/about' ? 'active' : ''}>Про нас</a></li>
          <li><a href="/reports" className={pathname === '/reports' ? 'active' : ''}>Звітнітсь</a></li>
          <li><a href="/assistance" className={pathname === '/assistance' ? 'active' : ''}>Допомога від фонду</a></li>
          <li><a href="/programs" className={pathname === '/programs' ? 'active' : ''}>Програми фонду</a></li>
          <li><a href="/contacts" className={pathname === '/contacts' ? 'active' : ''}>Контакти</a></li>
        </ul>
      </div>
      <CustomButton variant="primary" hasArrow={true}>Підтримати нас</CustomButton>
    </div>
  );
};

export default Header; 