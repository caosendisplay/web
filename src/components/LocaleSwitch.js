import React from 'react';
import { Link } from 'gatsby';
import { Location } from '@reach/router';
import locales from '../constants/locales';


const LocaleSwitch = () => (
  Object.keys(locales)
    .map(key => (
      <li key={key}>
        <Location>
          {({location}) => {
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
    ))
);

export default LocaleSwitch;
