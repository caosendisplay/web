import React from 'react';
import { FormattedMessage } from 'react-intl';
import SEO from '../../components/SEO';
import Layout from '../../components/Layout';
import ContactBox from '../../components/ContactBox';

const Contact = (props) => {
  const { locale } = props.pageContext;
  return (
    <Layout bodyClass="page-contact" locale={locale}>
      <SEO title="Contact"/>
      <div className="intro intro-small">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>
                <FormattedMessage id="Contact"/>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <ContactBox button={false} hasAddress/>
          </div>
          <div className="col-8">
            <h4 className="mt-4">
              <FormattedMessage id="ContactBusinessHours" />
            </h4>
            <table className="table table-sm opening-hours-table">
              <tbody>
              <tr>
                <td className="day font-weight-bold">
                  <FormattedMessage id="Monday" />
                  &nbsp;~&nbsp;
                  <FormattedMessage id="Friday" />
                </td>
                <td className="opens">8:30am</td>
                <td>-</td>
                <td className="closes">5:00pm</td>
              </tr>
              <tr>
                <td className="day font-weight-bold">
                  <FormattedMessage id="Saturday" />
                  &nbsp;~&nbsp;
                  <FormattedMessage id="Sunday" />
                </td>
                <td className="opens">
                  <FormattedMessage id="Closed" />
                </td>
                <td/>
                <td className="closes"/>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
