import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import { FormattedMessage } from 'react-intl';
import { Location } from '@reach/router';
import LocalizedLink from '../LocalizedLink';
import locales from '../../constants/locales';

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
        {Object.keys(locales)
          .map(key => (
            <li key={key}>
              <Location>
                {({ location }) => {
                  let nonLocalePath = location.pathname;
                  // eslint-disable-next-line array-callback-return
                  Object.keys(locales).map((k) => {
                    nonLocalePath = nonLocalePath.replace(`/${locales[k].path}/`, '/');
                  });
                  return (
                    <Link to={locales[key].path + nonLocalePath}>
                      {locales[key].locale}
                    </Link>
                  );
                }}
              </Location>
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
    render={data => <Menu data={data}/>}
  />
);
