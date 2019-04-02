import React from 'react';
import { Link } from 'gatsby';
import Container from 'components/Container';
import TitleAndMetaTags from 'components/TitleAndMetaTags';
import Layout from 'components/Layout';
import { colors, media } from 'theme';
import createOgUrl from 'utils/createOgUrl';
import HlTitle from 'components/HlTitle'
import HeroDiv from 'svg/HeroDiv'
import GitHub from 'svg/GitHub'
import ZhiHu from 'svg/ZhiHu'
import Twitter from 'svg/Twitter'
import courses from '../../content/index.yml';


const About = ({ location }) => {
  return (
    <Layout location={location}>
      <TitleAndMetaTags title="about" ogUrl={createOgUrl('about.html')} />
      <div css={{ width: '100%' }}>
        <header
          css={{
            position: 'relative',
            backgroundColor: colors.dark,
            color: colors.white,
            paddingTop: 45,
            paddingBottom: 20,
          }}>
          <Container>
            <div css={{
              paddingTop: 32,
              display: 'flex',
              flexDirection: 'column',
              [media.greaterThan('small')]: {
                flexDirection: 'row',
                alignItems: 'center'
              }
            }}>
              <div css={{
                width: '100%',
                [media.greaterThan('small')]: {
                  width: '50%'
                }
              }}>
                <div css={{ display: 'flex' }}>
                  <div css={{
                    fontSize: 22,
                    margin: '0 0 32px',
                    color: '#fff',
                    '::after': {
                      content: '""',
                      display: 'block',
                      width: 36,
                      height: 16,
                      borderBottom: `3px solid #fff`
                    }
                  }}>关于作者</div>
                  <a
                    href="https://github.com/happypeter"
                    css={{ textDecoration: 'none' }}
                    target="_blank"
                    rel="noopener"
                  >
                    <GitHub css={{
                      fill: '#fff',
                      marginLeft: 16
                    }} />
                  </a>
                  <a
                    href="https://zhihu.com/people/peterlovemoney"
                    css={{ textDecoration: 'none' }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ZhiHu css={{
                      fill: '#fff',
                      marginLeft: 16
                    }} />
                  </a>
                  <a
                    href="https://twitter.com/happypeter1983"
                    css={{ textDecoration: 'none' }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter css={{
                      fill: '#fff',
                      marginLeft: 16
                    }} />
                  </a>
                </div>
                <div css={{
                  lineHeight: 2.6,
                  fontSize: 14,
                  color: '#fff'
                }}>
                  王广忠，网名 happypeter，硕士，2006年开始进行 Linux Kernel
                  开发，是开源运动的坚定支持者。Git
                  版本控制工具的早期布道者，目前他的 GIthub 上有3.6K的 follower
                  。曾就职于中科红旗与亚洲各国联合成立的 Asianux
                  实验室，从事系统升级器的研发，使用过 C/C++/Python/PHP/Ruby/JS
                  等多种编程语言，精通 RubyOnRails 和 React
                  框架。好奇猫网络科技公司创始人兼 CTO
                  ，2014年开始从事比特币全职工作，曾就职于云币网。
                </div>
              </div>

              <div css={{
                width: '50%'
              }}>
                <img
                  css={{
                    display: 'block',
                    width: '100%',
                    padding: 8
                  }}
                  src='/peter.png'
                  alt="avatar"
                />
              </div>
            </div>
          </Container>
          <HeroDiv css={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            height: 'auto',
            marginBottom: -1,
            width: '100%'
          }} />
        </header>

        <Container>
          <section>
            <HlTitle>本站动态</HlTitle>
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

export default About;
