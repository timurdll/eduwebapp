import { Button, MenuItem, Select } from '@mui/material'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import { UserAuth } from '../../../Context/AuthContext';
import logo from '../../assets/logo.png'
import MenuIcon from '@mui/icons-material/Menu';
import { LANDING_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, SIGNUP_ROUTE } from '../../utils/consts'
import './header.css'
import { useEffect, useState } from 'react';
import i18next from 'i18next';
import Menu from './Menu/Menu';

const Header = () => {
    const { t } = useTranslation()
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const { user } = UserAuth();
    const handleLanguageChange = (event) => {
      setSelectedLanguage(event.target.value);
      i18next.changeLanguage(event.target.value.toLowerCase())
    };
    const languages = [
      {
        code: 'en',
        name: 'EN',
      },
      {
        code: 'ru',
        name: 'RU',
      },
      {
        code: 'kk',
        name: 'KK',
      },
    ]
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [menuActive, setMenuActive] = useState(false)

    useEffect(() => {
      const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
      };
      window.addEventListener('resize', handleWindowResize);
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }, []);

    return (
      <div className="header__wrapper">
        <div className="header__container">
            <div className="header__logo">
              <Link style={{ textDecoration: 'none', color: 'inherit' }} to={LANDING_ROUTE}>
                <img alt="logo" src={logo} />
              </Link>
            </div>
            {windowWidth <= 925 ? (
              <MenuIcon fontSize="large" onClick={() => setMenuActive(!menuActive)} />
            ) : 
            (
          <div className="header__elementsWrapper">
              <div className='header__languageDropdown'>
                <Select color='primary'
                        variant="outlined"
                        onChange={handleLanguageChange}
                        value={selectedLanguage}
                        style={{ color: '#1976d2', height: '32px' }}
                        size="small">
                        {languages.map(({ name, country_code }) => (
                          <MenuItem key={country_code} value={name}>{name}</MenuItem>
                        ))}
                </Select>
              </div>
              <div className='header__buttons'>
              {user ? (
                <Button variant='outlined' size="small">
                  <Link style={{ textDecoration: 'none', color: 'inherit' }}  to={PROFILE_ROUTE}>{t('profile')}</Link>
                </Button>
) : (
    <>
        <Button variant='outlined' size="small">
            <Link style={{ textDecoration: 'none', color: 'inherit' }} to={SIGNUP_ROUTE}>{t('signup')}</Link>
        </Button>
        <Button variant='outlined' size="small">
            <Link style={{ textDecoration: 'none', color: 'inherit' }} to={LOGIN_ROUTE}>{t('login')}</Link>
        </Button>
    </>
)}
              </div>
            </div>
            
            )}
            {menuActive === true && windowWidth <= 925 ? (
              <Menu />
            ) : (
              <></>
            )}
        </div>
      </div>
    )
  }
  
export default Header