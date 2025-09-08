import { useLocation, Link, useSearchParams, useNavigate } from 'react-router-dom';
import CustomButton from '../../ui/customButton';
import { getImagePath } from '../../../utils/imagePath';
import { Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import './style.css';

const Header = () => {
    const { pathname } = useLocation();
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

  return (
    <div className="header">
      <div className="header-logo" onClick={() => { navigate('/'); window.scrollTo(0, 0); }}>
        <img src={getImagePath('/logo.svg')} alt="logo" />
      </div>
      <div className="header-menu">
        <ul>
          <li><Link to="/" className={pathname === '/' ? 'active' : ''}>Головна</Link></li>
          <li><Link to="/about" className={pathname === '/about' ? 'active' : ''}>Про нас</Link></li>
          <li><Link to="/reports" className={pathname === '/reports' ? 'active' : ''}>Звітнітсь</Link></li>
          <li><Link to="/assistance" className={pathname === '/assistance' ? 'active' : ''}>Допомога від фонду</Link></li>
          <li>
            <div
            className={pathname === '/programs' ? 'active' : ''}
            onClick={handleClick}
            >
              Програми фонду
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.4222 8.67818L10.5892 14.5122C10.2638 14.8374 9.73588 14.8375 9.41052 14.5122L3.57751 8.67818L4.75623 7.50045L10.0004 12.7436L15.2445 7.50045L16.4222 8.67818Z" fill="#7B7F8E" />
              </svg>
            </div>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <MenuItem className={`menu-item ${searchParams.get('id') === '1' ? 'active-menu-item' : ''}`} onClick={() => {handleClose(); navigate('/programs?id=1')}}>
                  Програми фонду
              </MenuItem>
              <MenuItem className={`menu-item ${searchParams.get('id') === '2' ? 'active-menu-item' : ''}`} onClick={() => {handleClose(); navigate('/programs?id=2')}}>
                  Програми фонду 2
              </MenuItem>
              <MenuItem className={`menu-item ${searchParams.get('id') === '3' ? 'active-menu-item' : ''}`} onClick={() => {handleClose(); navigate('/programs?id=3')}}>
                  Програми фонду 3
              </MenuItem>
              <MenuItem className={`menu-item ${searchParams.get('id') === '4' ? 'active-menu-item' : ''}`} onClick={() => {handleClose(); navigate('/programs?id=4')}}>
                  Програми фонду 4
              </MenuItem>
            </Menu>
          </li>
          <li><Link to="/contacts" className={pathname === '/contacts' ? 'active' : ''}>Контакти</Link></li>
        </ul>
      </div>
      <CustomButton variant="primary" hasArrow={true} onClick={() => navigate('/payment')}>Підтримати нас</CustomButton>
    </div>
  );
};

export default Header; 