import React from 'react';
import { graphql } from 'gatsby';
import { FormattedMessage } from 'react-intl';
import SEO from '../../components/SEO';
import Layout from '../../components/Layout';
import formatMessage from '../../components/i18n/IntlReact';

const Home = (props) => {
  const {locale} = props.pageContext;
  const solutions = props.data.allMarkdownRemark.edges.filter(
    edge => !edge.node.frontmatter.lang || edge.node.frontmatter.lang === locale,
  );
  return (
    <Layout bodyClass="page-home" locale={locale}>
      <SEO title={formatMessage({id: 'Home', defaultMessage: 'Home'})}/>
      <FormattedMessage id="Services"/>
      <div className="container">
        <div className="row">
          {solutions.map(edge => (
            <div className="col-12 col-md-4 mb-1">
              <p>{edge.node.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
    query HomeQuery {
        allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/home/" } }
            sort: { fields: [frontmatter___date], order: DESC }
        ) {
            edges {
                node {
                    excerpt
                    frontmatter {
                        title
                        path
                        lang
                    }
                }
            }
        }
    }
`;

export default Home;
