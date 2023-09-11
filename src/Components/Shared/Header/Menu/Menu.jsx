import { Button, MenuItem, Select } from '@mui/material'
import i18next from 'i18next'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { LOGIN_ROUTE, SIGNUP_ROUTE } from '../../../utils/consts'
import './menu.css'

const Menu = () => {
    const { t } = useTranslation()
    const [selectedLanguage, setSelectedLanguage] = useState('RU');
    const handleLanguageChange = (event) => {
      setSelectedLanguage(event.target.value);
      i18next.changeLanguage(event.target.value.toLowerCase())
    };
    const languages = [
      {
        code: 'ru',
        name: 'RU',
      },
      {
        code: 'en',
        name: 'EN',
      },
    ]

  return (
    <div className="menu__elementsWrapper">
    <div className='menu__languageDropdown'>
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
    <div className='menu__buttons'>
      <Button variant='outlined' size="small">
        <Link style={{ textDecoration: 'none', color: 'inherit' }} to={SIGNUP_ROUTE}>{t('signup')}</Link>
      </Button>
      <Button variant='outlined' size="small">
        <Link style={{ textDecoration: 'none', color: 'inherit' }} to={LOGIN_ROUTE}>{t('login')}</Link>
      </Button>
    </div>
  </div>
  )
}

export default Menu