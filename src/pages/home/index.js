import React from 'react';
import { Link, graphql } from 'gatsby';
import { FormattedMessage } from 'react-intl';
import SEO from '../../components/SEO';
import Layout from '../../components/Layout';
import formatMessage from '../../components/IntlReact';

const Home = (props) => {
  const { locale } = props.pageContext;
  const solutions = props.data.allMarkdownRemark.edges;
  return (
    <Layout bodyClass="page-home" locale={locale}>
      <SEO title={ formatMessage({ id: 'Home', defaultMessage: 'Home' }) } />
      <FormattedMessage id="Services" />
      <h1>{ formatMessage({ id: 'Home', defaultMessage: 'Home' }) }</h1>
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
                    }
                }
            }
        }
    }
`;

export default Home;
