import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import { FormattedMessage } from 'react-intl';
import LocalizedLink from '../i18n/LocalizedLink';
import LocaleSwitch from '../i18n/LocaleSwitch';

const Menu = (props) => {
  const { menuLinks } = props.data.site.siteMetadata;
  return (
    <div id="main-menu" className="main-menu">
      <ul>
        {menuLinks.map(link => (
          <li key={link.name}>
            <LocalizedLink to={`/${link.link}`}>
              <FormattedMessage id={link.name}/>
            </LocalizedLink>
          </li>
        ))}
        <LocaleSwitch/>
      </ul>
    </div>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => <Menu data={data}/>}
  />
);
