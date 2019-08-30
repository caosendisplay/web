import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { FormattedMessage } from 'react-intl';
import formatMessage from './i18n/IntlReact';
import LocalizedLink from "./i18n/LocalizedLink";

const Call = props => (
  <div className="call">
    <div className="call-box-top">
      <div className="call-phone">
        <strong>
          <FormattedMessage id="ContactPhone"/>
          :&nbsp;
        </strong>
        <a href={`tel:${formatMessage({ id: 'ContactPhoneValue' })}`}>
          <FormattedMessage id="ContactPhoneValue" />
        </a>
      </div>
      <div className="call-fax">
        <strong>
          <FormattedMessage id="ContactFax"/>
          :&nbsp;
        </strong>
        <a href={`tel:${formatMessage({ id: 'ContactFaxValue' })}`}>
          <FormattedMessage id="ContactFaxValue" />
        </a>
      </div>
      <div className="call-email">
        <strong>
          <FormattedMessage id="ContactEmail" />
          :&nbsp;
        </strong>
        <a href={`mailto:${formatMessage({ id: 'ContactEmailValue' })}`}>
          <FormattedMessage id="ContactEmailValue" />
        </a>
      </div>
    </div>
    {props.button && (
      <div className="call-box-bottom">
        <LocalizedLink to="/contact" className="button">
          <FormattedMessage id="Contact" />
        </LocalizedLink>
      </div>
    )}
  </div>
);

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            description
            contact {
              email
              phone
            }
          }
        }
      }
    `}
    render={data => <Call button={props.button} data={data}/>}
  />
);
