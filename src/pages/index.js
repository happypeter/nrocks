import React, { Component } from 'react';
import { Link } from 'gatsby';
import Container from 'components/Container';
import TitleAndMetaTags from 'components/TitleAndMetaTags';
import Layout from 'components/Layout';
import { colors, media } from 'theme';
import createOgUrl from 'utils/createOgUrl';
import courses from '../../content/index.yml';
import HlTitle from 'components/HlTitle';
import Hero from 'components/Hero';
import CatIcons from 'components/CatIcons';

class Home extends Component {
  render() {
    const { location } = this.props;
    return (
      <Layout location={location}>
        <TitleAndMetaTags
          title="Nervos 学习站"
          ogUrl={createOgUrl('index.html')}
        />
        <div css={{ width: '100%' }}>
          <header
            css={{
              width: '100%',
              [media.lessThan('medium')]: { display: 'none' }
            }}
          >
            <Hero />
          </header>
          <CatIcons />
          <div css={{ padding: 24 }}>
            <Container>
              <section
                css={{
                  marginTop: 48,
                  marginBottom: 15,
                  marginRight: '-20px',
                  marginLeft: '-20px',
                  [media.greaterThan('medium')]: {
                    marginTop: 60,
                    marginBottom: 65
                  }
                }}
              >
                <HlTitle>最新课程</HlTitle>
                <div
                  css={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    [media.greaterThan('small')]: {
                      flexDirection: 'row',
                      flexWrap: 'wrap'
                    }
                  }}
                >
                  {courses.map(({ id, title, image, date, desc }) => (
                    <Link
                      to={`/${id}/0-intro.html`}
                      key={id}
                      css={{
                        display: 'block',
                        width: `calc(100% - 40px)`,
                        margin: 20,
                        boxShadow: `rgba(0, 0, 0, 0.07) 0px 4px 6px`,
                        borderRadius: '0 0 8px 8px',
                        [media.greaterThan('small')]: {
                          width: `calc(50% - 40px)`
                        },
                        [media.greaterThan('medium')]: {
                          width: `calc(33.3333% - 40px)`
                        },
                        [media.greaterThan('xxlarge')]: {
                          width: `calc(25% - 40px)`
                        }
                      }}
                    >
                      <img
                        src={image}
                        css={{ display: 'block', width: '100%' }}
                        alt="cover"
                      />
                      <div css={{ padding: 8 }}>
                        <h3
                          css={{
                            color: colors.text,
                            fontWeight: 400,
                            fontSize: 16,
                            padding: '8px 0'
                          }}
                        >
                          {title}
                        </h3>
                        <p
                          css={{
                            color: colors.subtle,
                            fontSize: 12,
                            padding: '4px 0 8px'
                          }}
                        >
                          {desc}
                        </p>
                        <div
                          css={{
                            color: colors.subtle,
                            textAlign: 'right',
                            fontSize: 12
                          }}
                        >
                          {date}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            </Container>
          </div>

          <section
            css={{
              background: colors.dark,
              color: colors.white,
              paddingTop: 45,
              paddingBottom: 45
            }}
          />
        </div>
      </Layout>
    );
  }
}

export default Home;
