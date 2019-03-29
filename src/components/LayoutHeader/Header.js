import React from 'react';
import { Link } from 'gatsby';
import { colors, media } from 'theme';
import Container from 'components/Container';
import LogoIcon from 'svg/Logo'
import DocSearch from './DocSearch';

const Header = () => (
  <header
    css={{
      backgroundColor: colors.header,
      color: colors.black,
      position: 'fixed',
      zIndex: 1,
      width: '100%',
      top: 0,
      left: 0,
    }}>
    <Container>
      <div
        css={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          height: 60,
          [media.between('small', 'large')]: {
            height: 50,
          },
          [media.lessThan('small')]: {
            height: 40,
          },
        }}>
        <Link
          css={{
            display: 'flex',
            marginRight: 10,
            height: '100%',
            alignItems: 'center',
            color: colors.white,

            ':focus': {
              outline: 0,
              color: colors.white,
            },

            [media.greaterThan('small')]: {
              width: 'calc(100% / 6)',
            },
            [media.lessThan('small')]: {
              flex: '0 0 auto',
            },
          }}
          to="/">
          <LogoIcon width={100} />
        </Link>

        <DocSearch />
      </div>
    </Container>
  </header>
);

export default Header;
