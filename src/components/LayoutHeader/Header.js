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
      color: colors.text,
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
          justifyContent: 'space-between',
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

            [media.greaterThan('small')]: {
              width: 'calc(100% / 6)',
            },
            [media.lessThan('small')]: {
              flex: '0 0 auto',
            },
          }}
          to="/">
          <LogoIcon
            css={{
              width: 90,
              [media.between('small', 'large')]: {
                width: 70,
              },
              [media.lessThan('small')]: {
                width: 50,
              },
            }} />
        </Link>

        <DocSearch />
      </div>
    </Container>
  </header>
);

export default Header;
