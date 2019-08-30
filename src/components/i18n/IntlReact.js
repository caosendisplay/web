import React from 'react';
import { injectIntl } from 'react-intl';

// Does not actually render anything visible.
// We need it to provide access to internationalization for classes
// which are not a React component
class LocalizeComponent extends React.Component {
  static __singletonRef = React.createRef;

  static getInstance() {
    // eslint-disable-next-line no-underscore-dangle
    return LocalizeComponent.__singletonRef;
  }

  constructor() {
    super();
    // eslint-disable-next-line no-underscore-dangle
    LocalizeComponent.__singletonRef = this;
  }

  formatMessage(...args) {
    const { intl } = this.props;
    return intl.formatMessage(...args);
  }

  render() {
    return false;
  }
}

export const IntlReact = injectIntl(LocalizeComponent);

export default (...args) => LocalizeComponent.getInstance().formatMessage(...args);
