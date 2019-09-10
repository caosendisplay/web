import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { FormattedMessage } from 'react-intl';
import formatMessage from './i18n/IntlReact';
import LocalizedLink from './i18n/LocalizedLink';

const ContactBox = props => (
  <div className="contact-box">
    <div className="contact-box-top">
      <div className="contact-phone">
        <strong>
          <FormattedMessage id="ContactPhone"/>
          :&nbsp;
        </strong>
        <a href={`tel:${formatMessage({ id: 'ContactPhoneValue' })}`}>
          <FormattedMessage id="ContactPhoneValue" />
        </a>
      </div>
      <div className="contact-fax">
        <strong>
          <FormattedMessage id="ContactFax"/>
          :&nbsp;
        </strong>
        <a href={`tel:${formatMessage({ id: 'ContactFaxValue' })}`}>
          <FormattedMessage id="ContactFaxValue" />
        </a>
      </div>
      <div className="contact-email">
        <strong>
          <FormattedMessage id="ContactEmail" />
          :&nbsp;
        </strong>
        <a href={`mailto:${formatMessage({ id: 'ContactEmailValue' })}`}>
          <FormattedMessage id="ContactEmailValue" />
        </a>
      </div>
      {props.hasAddress && (
        <div className="contact-address">
          <strong>
            <FormattedMessage id="ContactAddress" />
            :&nbsp;
          </strong>
          <FormattedMessage id="ContactAddressValueLine1" />
          {formatMessage({ id: 'ContactAddressValueLine2' }) !== 'ContactAddressValueLine2' && (
            <span>
              <br />
              <strong style={{ visibility: 'hidden' }}>
                <FormattedMessage id="ContactAddress" />
                :&nbsp;
              </strong>
              <FormattedMessage id="ContactAddressValueLine2" />
            </span>
          )}
        </div>
      )}
    </div>
    {props.button && (
      <div className="contact-box-bottom">
        <LocalizedLink to="/contact" className="button">
          <FormattedMessage id="Contact" />
        </LocalizedLink>
      </div>
    )}
  </div>
);

export default props => (
    <ContactBox button={props.button} hasAddress={props.hasAddress}/>
);
