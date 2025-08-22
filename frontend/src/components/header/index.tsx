import { useLocation, Link } from 'react-router-dom';
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
          <li><Link to="/" className={pathname === '/' ? 'active' : ''}>Головна</Link></li>
          <li><Link to="/about" className={pathname === '/about' ? 'active' : ''}>Про нас</Link></li>
          <li><Link to="/reports" className={pathname === '/reports' ? 'active' : ''}>Звітнітсь</Link></li>
          <li><Link to="/assistance" className={pathname === '/assistance' ? 'active' : ''}>Допомога від фонду</Link></li>
          <li><Link to="/programs" className={pathname === '/programs' ? 'active' : ''}>Програми фонду</Link></li>
          <li><Link to="/contacts" className={pathname === '/contacts' ? 'active' : ''}>Контакти</Link></li>
        </ul>
      </div>
      <CustomButton variant="primary" hasArrow={true}>Підтримати нас</CustomButton>
    </div>
  );
};

export default Header; 