import Container from 'components/Container';
import TitleAndMetaTags from 'components/TitleAndMetaTags';
import Header from 'components/Header';
import Layout from 'components/Layout';
import React from 'react';
import { sharedStyles } from 'theme';
import Divider from 'components/Divider';

const PageNotFound = ({ location }) => (
  <Layout location={location}>
    <TitleAndMetaTags title="page not found" />
    <Container>
      <div css={sharedStyles.articleLayout.container}>
        <div css={sharedStyles.articleLayout.content}>
          <Header>page not found</Header>
        </div>
      </div>
    </Container>
    <div css={{ width: '100%' }}>
      <Divider />
    </div>
  </Layout>
);

export default PageNotFound;
