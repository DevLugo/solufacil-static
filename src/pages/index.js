import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Subscribe from 'sections/subscribe';
import Services from 'sections/services';
import VideoIntro from 'sections/video-intro';
import WorldMap from 'sections/world-map';
import Milestone from 'sections/milestone';
import Blog from 'sections/blog';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Capital SoluFacil"
          description="Empresa 100% campechana enfocada en ayudar a los emprendedores campechanos"
        />
        <Banner />
        <VideoIntro />
        <Services />
        {/*<WorldMap />*/}
        <Milestone />
        {/*<Blog />*/}
        <Subscribe />
      </Layout>
    </ThemeProvider>
  );
}
