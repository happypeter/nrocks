import React, { Component } from 'react';
import { colors, media } from 'theme';

class DocSearch extends Component {
  state = {
    enabled: true,
  };

  componentDidMount() {
    if (window.docsearch) {
      window.docsearch({
        apiKey: '91fce6c04d7f68bbb346278719149541',
        indexName: 'nervos',
        inputSelector: '#docsearch-input'
      })
    } else {
      console.warn('Search has failed to load and now is being disabled');
      this.setState({ enabled: false });
    }
  }

  render() {
    const { enabled } = this.state;

    return enabled ? (
      <form
        css={{
          display: 'flex',
          flex: '0 0 auto',
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: '0.25rem',
          paddingRight: '0.25rem',

          [media.lessThan('expandedSearch')]: {
            justifyContent: 'flex-end',
            marginRight: 10,
          },
          // TODO: Something like this could show the full search box in more cases
          // but it currently breaks its expanding animation.
          // [media.between('mediumSearch', 'largerSearch')]: {
          //   width: 'calc(100% / 8)',
          // },
          [media.greaterThan('expandedSearch')]: {
            minWidth: 100,
          },
        }}>
        <input
          css={{
            width: '100%',
            appearance: 'none',
            background: colors.primary,
            border: 0,
            color: colors.white,
            fontSize: 18,
            fontWeight: 300,
            fontFamily: 'inherit',
            position: 'relative',
            padding: '6px 6px 6px 29px',
            backgroundImage: 'url(/search.svg)',
            backgroundSize: '16px 16px',
            backgroundRepeat: 'no-repeat',
            backgroundPositionY: 'center',
            backgroundPositionX: '6px',
            borderRadius: '0.25rem',
            ':focus': {
              outline: 0,
              backgroundColor: colors.lighter,
            },

            [media.lessThan('expandedSearch')]: {
              fontSize: 16,
              width: 24,
              transition: 'width 0.2s ease, padding 0.2s ease',
              paddingLeft: 24,
              ':focus': {
                paddingLeft: 29,
                width: '8rem',
                outline: 'none',
              },
            },
          }}
          id="docsearch-input"
          type="search"
          placeholder="Search"
          aria-label="Search docs"
        />
      </form>
    ) : null;
  }
}

export default DocSearch;
