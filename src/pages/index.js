import React, { Component } from 'react';
import ButtonLink from 'components/ButtonLink';
import { Link } from 'gatsby';
import Container from 'components/Container';
import TitleAndMetaTags from 'components/TitleAndMetaTags';
import Layout from 'components/Layout';
import { colors, media } from 'theme';
import createOgUrl from 'utils/createOgUrl';
import courses from '../../content/index.yml';
import HlTitle from 'components/HlTitle'

class Home extends Component {
  state = {
    babelLoaded: false,
  };

  render() {
    const { location } = this.props;
    return (
      <Layout location={location}>
        <TitleAndMetaTags title="Nervos Learning" ogUrl={createOgUrl('index.html')} />
        <div css={{ width: '100%' }}>
          <header
            css={{
              backgroundColor: colors.dark,
              color: colors.white,
            }}>
            <div
              css={{
                paddingTop: 45,
                paddingBottom: 20,

                [media.greaterThan('small')]: {
                  paddingTop: 60,
                  paddingBottom: 70,
                },

                [media.greaterThan('xlarge')]: {
                  paddingTop: 95,
                  paddingBottom: 85,
                  maxWidth: 1500,
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  position: 'relative',
                },
              }}>
              <div
                css={{
                  position: 'relative',
                }}>
                <Container>
                  <h1
                    css={{
                      color: colors.primary,
                      textAlign: 'center',
                      margin: 0,
                      fontSize: 45,
                      letterSpacing: '0.01em',
                      [media.size('xsmall')]: {
                        fontSize: 30,
                      },
                      [media.greaterThan('xlarge')]: {
                        fontSize: 60,
                      },
                    }}>
                    Nervos 学习站
                  </h1>
                  <p
                    css={{
                      paddingTop: 15,
                      textAlign: 'center',
                      fontSize: 24,
                      letterSpacing: '0.01em',
                      fontWeight: 200,

                      [media.size('xsmall')]: {
                        fontSize: 16,
                        maxWidth: '12em',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                      },

                      [media.greaterThan('xlarge')]: {
                        paddingTop: 20,
                        fontSize: 30,
                      },
                    }}>
                    Nervos Rocks
                  </p>
                  <div
                    css={{
                      width: '100%',
                      margin: '24px auto',
                      lineHeight: 1.8,
                      textAlign: 'center',
                      fontSize: 12,
                      [media.greaterThan('small')]: {
                        fontSize: 16,
                        width: '66%',
                        maxWidth: 600
                      },
                    }}>
                    Nervos AppChain 是一个帮助企业搭建应用的链，本站视频课程服务开发者，目的在于帮助大家迅速掌握区块链基础知识并上手 AppChain 相关应用开发。
                  </div>
                </Container>
              </div>
            </div>
          </header>

          <Container>
            <section
              css={{
                marginTop: 48,
                marginBottom: 15,
                marginRight: '-20px',
                marginLeft: '-20px',
                [media.greaterThan('medium')]: {
                  marginTop: 60,
                  marginBottom: 65,
                }
              }}>
              <HlTitle>最新课程</HlTitle>
              <div
                css={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  [media.greaterThan('small')]: {
                    flexDirection: 'row',
                    flexWrap: 'wrap'
                  },
                }}>
                {courses.map(({ id, title, image, date, desc }) => (
                  <Link to={`/${id}/0-intro.html`}
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
                      },
                    }}>
                    <img src={image} css={{ display: 'block', width: '100%' }} alt="cover" />
                    <div css={{ padding: 8 }}>
                      <h3 css={{
                        color: colors.text,
                        fontWeight: 400,
                        fontSize: 16,
                        padding: '8px 0'
                      }}>
                        {title}
                      </h3>
                      <p css={{
                        color: colors.subtle,
                        fontSize: 12,
                        padding: '4px 0 8px'
                      }}>
                        {desc}
                      </p>
                      <div css={{
                        color: colors.subtle,
                        textAlign: 'right',
                        fontSize: 12
                      }}>
                        {date}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </Container>

          <section
            css={{
              background: colors.dark,
              color: colors.white,
              paddingTop: 45,
              paddingBottom: 45,
            }}
          />
        </div>
      </Layout>
    );
  }
}

export default Home;
