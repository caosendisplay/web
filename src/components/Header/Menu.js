import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import LocalizedLink from '../LocalizedLink'
import locales from '../../constants/locales'
import { FormattedMessage } from 'react-intl';

const Menu = (props) => {
  // const locale = props.intl.locale;
  const { menuLinks } = props.data.site.siteMetadata;
  return (
    <div id="main-menu" className="main-menu">
      <ul>
        {menuLinks.map(link => (
          <li key={link.name}>
            <LocalizedLink
              to={`/${link.link}`} 
            >
              <FormattedMessage id={link.name} />
            </LocalizedLink>
          </li>
        ))}
        {Object.keys(locales).map(key => (
          <li key={key}>
            <Link to={locales[key].path}>
              {locales[key].locale}
            </Link>
          </li>
        ))}
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
    render={data => <Menu data={data} />}
  />
);
