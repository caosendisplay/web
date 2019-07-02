import React from 'react';
import SEO from '../../components/SEO';
import Layout from '../../components/Layout';
import Call from '../../components/Call';
import { FormattedMessage } from 'react-intl';

const Contact = props => {
  const locale = props.pageContext.locale;
  return (
    <Layout bodyClass="page-contact" locale={locale}>
      <SEO title="Contact" />
      <h1>{props.pageContext.locale}</h1>
      <div className="intro intro-small">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>
                <FormattedMessage id="Contact" />
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Call button={false} />
          </div>
          <div className="col-8">
            <h4 className="mt-4">Business Hours</h4>
            <table className="table table-sm opening-hours-table">
              <tbody>
                <tr>
                  <td className="day font-weight-bold">Monday</td>
                  <td className="opens">8:30am</td>
                  <td>-</td>
                  <td className="closes">5:00pm</td>
                </tr>
                <tr>
                  <td className="day font-weight-bold">Tuesday</td>
                  <td className="opens">8:30am</td>
                  <td>-</td>
                  <td className="closes">5:00pm</td>
                </tr>
                <tr>
                  <td className="day font-weight-bold">Wednesday</td>
                  <td className="opens">8:30am</td>
                  <td>-</td>
                  <td className="closes">5:00pm</td>
                </tr>
                <tr>
                  <td className="day font-weight-bold">Thursday</td>
                  <td className="opens">8:30am</td>
                  <td>-</td>
                  <td className="closes">5:00pm</td>
                </tr>
                <tr>
                  <td className="day font-weight-bold">Friday</td>
                  <td className="opens">8:30am</td>
                  <td>-</td>
                  <td className="closes">5:00pm</td>
                </tr>
                <tr>
                  <td className="day font-weight-bold">Saturday</td>
                  <td className="opens">Closed</td>
                  <td />
                  <td className="closes" />
                </tr>
                <tr>
                  <td className="day font-weight-bold">Sunday</td>
                  <td className="opens">Closed</td>
                  <td />
                  <td className="closes" />
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
