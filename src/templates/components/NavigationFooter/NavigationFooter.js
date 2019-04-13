import Flex from 'components/Flex';
import { Link } from 'gatsby';
import React from 'react';
import { colors } from 'theme';
import ArrowBackIcon from 'svg/ArrowBack';
import ArrowForwardIcon from 'svg/ArrowForward';

const NavigationFooter = ({ next, prev, location }) => {
  return (
    <div css={{ color: colors.text, paddingTop: 50, paddingBottom: 50 }}>
      <Flex type="ul" halign="space-between">
        <Flex basis="50%" type="li" css={{ textAlign: 'right' }}>
          {prev && (
            <PrimaryLink location={location} to={`${prev.id}.html`}>
              <ArrowBackIcon css={{ fill: 'rgba(33,33,33,.8)' }} />
              <div>
                <SecondaryLabel>Previous</SecondaryLabel>
                <PrimaryLabel css={{ paddingTop: 10 }}>
                  {prev.title}
                </PrimaryLabel>
              </div>
            </PrimaryLink>
          )}
        </Flex>
        {next && (
          <Flex
            halign="flex-end"
            basis="50%"
            type="li"
            css={{ textAlign: 'left' }}
          >
            <PrimaryLink location={location} to={`${next.id}.html`}>
              <div>
                <SecondaryLabel>Next</SecondaryLabel>
                <PrimaryLabel css={{ paddingTop: 10 }}>
                  {next.title}
                </PrimaryLabel>
              </div>
              <ArrowForwardIcon css={{ fill: 'rgba(33,33,33,.8)' }} />
            </PrimaryLink>
          </Flex>
        )}
      </Flex>
    </div>
  );
};

export default NavigationFooter;

const PrimaryLink = ({ children, to, location }) => {
  // quick fix
  // TODO: replace this with better method of getting correct full url
  const updatedUrl =
    (location && location.pathname.replace(/\/[^/]+\.html/, '/' + to)) || to;
  return (
    <Link
      css={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        textDecoration: 'none',
        width: '90%',
        border: '1px solid #E6ECF1',
        boxShadow: `0 3px 8px 0 rgba(116, 129, 141, 0.1)`,
        padding: 16,
        ':hover': {
          borderColor: colors.primary
        }
      }}
      to={updatedUrl}
    >
      {children}
    </Link>
  );
};

const SecondaryLabel = ({ children }) => (
  <div
    css={{
      color: 'rgba(0, 0, 0, 0.54)',
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: '1.375em'
    }}
  >
    {children}
  </div>
);

const PrimaryLabel = ({ children }) => (
  <div
    css={{
      color: 'rgba(0, 0, 0, 0.87)',
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: '1.46429em',
      paddingTop: 8
    }}
  >
    {children}
  </div>
);
