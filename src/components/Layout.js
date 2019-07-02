import React from 'react'
import SEO from './SEO'
import Header from './Header/index'
import Footer from './Footer'
import SubFooter from './SubFooter'
import { IntlProvider, addLocaleData } from 'react-intl'
import enData from 'react-intl/locale-data/en'
import zhData from 'react-intl/locale-data/zh'

import en from '../i18n/en.json'
import zh from '../i18n/zh.json'
import '../scss/style.scss'

const messages = { en, zh }
addLocaleData([...enData, ...zhData])

const Layout = props => {
  return (
    <IntlProvider locale={props.locale} messages={messages[props.locale]}>
      <React.Fragment>
        <SEO />
        <div className={`page${props.bodyClass ? ` ${props.bodyClass}` : ''}`}>
          <div id="wrapper" className="wrapper">
            <Header />
            <h1>{props.locale}</h1>
            {props.children}
          </div>
          <Footer />
          <SubFooter />
        </div>
      </React.Fragment>
    </IntlProvider>
  )
}

export default Layout
