import hex2rgba from 'hex2rgba';

const colors = {
  lighter: '#373940',
  dark: '#282c34',
  darker: '#20232a',
  brand: '#00bcd4',
  brandLight: '#00bcd4',
  subtle: '#6d6d6d',
  subtleOnDark: '#999',
  divider: '#ececec',
  note: '#ffe564',
  error: '#ff6464',
  white: '#ffffff',
  black: '#000000',
  header: '#eff3f6',
  primary: '#45c289',
  text: '#212121'
};

const SIZES = {
  xsmall: { min: 0, max: 599 },
  small: { min: 600, max: 779 },
  medium: { min: 780, max: 979 },
  large: { min: 980, max: 1279 },
  xlarge: { min: 1280, max: 1339 },
  xxlarge: { min: 1340, max: Infinity },

  // Sidebar/nav related tweakpoints
  largerSidebar: { min: 1100, max: 1339 },
  sidebarFixed: { min: 2000, max: Infinity },

  // Topbar related tweakpoints
  expandedSearch: { min: 1180, max: Infinity },
};

type Size = $Keys<typeof SIZES>;

const media = {
  between(smallKey: Size, largeKey: Size, excludeLarge: boolean = false) {
    if (excludeLarge) {
      return `@media (min-width: ${
        SIZES[smallKey].min
        }px) and (max-width: ${SIZES[largeKey].min - 1}px)`;
    } else {
      if (SIZES[largeKey].max === Infinity) {
        return `@media (min-width: ${SIZES[smallKey].min}px)`;
      } else {
        return `@media (min-width: ${SIZES[smallKey].min}px) and (max-width: ${
          SIZES[largeKey].max
          }px)`;
      }
    }
  },

  greaterThan(key: Size) {
    return `@media (min-width: ${SIZES[key].min}px)`;
  },

  lessThan(key: Size) {
    return `@media (max-width: ${SIZES[key].min - 1}px)`;
  },

  size(key: Size) {
    const size = SIZES[key];

    if (size.min == null) {
      return media.lessThan(key);
    } else if (size.max == null) {
      return media.greaterThan(key);
    } else {
      return media.between(key, key);
    }
  },
};

const fonts = {
  header: {
    fontSize: 40,
    lineHeight: '65px',
    fontWeight: 700,

    [media.lessThan('small')]: {
      overflowWrap: 'break-word',
      wordBreak: 'break-word',
    },

    [media.lessThan('medium')]: {
      fontSize: 30,
      lineHeight: '45px',
    },
  },
  small: {
    fontSize: 14,
  },
};

// Shared styles are generally better as components,
// Except when they must be used within nested CSS selectors.
// This is the case for eg markdown content.
const linkStyle = {
  borderBottom: `1px solid ${hex2rgba(colors.primary, 0.2)}`,
  color: colors.primary,
  wordBreak: 'break-word',
  ':hover': {
    backgroundColor: colors.primary,
    color: colors.white,
    borderBottomColor: colors.primary,
  },
};
const sharedStyles = {
  link: linkStyle,

  articleLayout: {
    container: {
      display: 'flex',
      minHeight: 'calc(100vh - 60px)',
      [media.greaterThan('sidebarFixed')]: {
        maxWidth: 840,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
      [media.lessThan('small')]: {
        flexDirection: 'column',
      },
    },
    content: {
      marginTop: 40,
      marginBottom: 120,

      [media.greaterThan('medium')]: {
        marginTop: 50,
      },
    },
    sidebar: {
      display: 'flex',
      flexDirection: 'column',

      [media.between('small', 'sidebarFixed')]: {
        borderLeft: '1px solid #ececec',
        marginLeft: 80,
      },

      [media.between('small', 'largerSidebar')]: {
        flex: '0 0 200px',
        marginLeft: 80,
      },

      [media.between('small', 'medium')]: {
        marginLeft: 40,
      },

      [media.greaterThan('largerSidebar')]: {
        flex: '0 0 300px',
      },

      [media.greaterThan('sidebarFixed')]: {
        position: 'fixed',
        right: 0,
        width: 300,
        zIndex: 2,
      },
    },

    editLink: {
      color: colors.subtle,
      borderColor: colors.divider,
      transition: 'all 0.2s ease',
      transitionPropery: 'color, border-color',
      whiteSpace: 'nowrap',
      borderBottomWidth: 1,
      borderBottomStyle: 'solid',

      ':hover': {
        color: colors.text,
        borderColor: colors.text,
      },
    },
  },

  markdown: {
    lineHeight: '25px',

    '& .gatsby-highlight': {
      marginTop: 25,
      marginLeft: -30,
      marginRight: -30,
      marginBottom: 25,
      paddingLeft: 15,
      paddingRight: 15,

      [media.lessThan('small')]: {
        marginLeft: -20,
        marginRight: -20,
        borderRadius: 0,
      },
    },

    '& a:not(.anchor):not(.gatsby-resp-image-link)': linkStyle,

    '& > p:first-child': {
      fontSize: 18,
      fontWeight: 300,
      color: colors.subtle,

      [media.greaterThan('xlarge')]: {
        fontSize: 24,
      },

      '& a, & strong': {
        fontWeight: 400,
      },
    },

    '& p': {
      marginTop: 30,
      fontSize: 17,
      lineHeight: 1.7,
      maxWidth: '42em',

      '&:first-of-type': {
        marginTop: 15,
      },

      '&:first-child': {
        marginTop: 0,
      },

      [media.lessThan('large')]: {
        fontSize: 16,
        marginTop: 25,
      },
    },

    '& h3 + p, & h3 + p:first-of-type': {
      marginTop: 20,
    },

    '& p > code, & li > code': {
      background: hex2rgba(colors.note, 0.2),
      color: colors.text,
    },

    '& p > code, & li > code, & p > a > code, & li > a > code': {
      padding: '0 3px',
      fontSize: '0.94em', // 16px on 17px text, smaller in smaller text
      wordBreak: 'break-word',
    },

    '& hr': {
      height: 1,
      marginBottom: -1,
      border: 'none',
      borderBottom: `1px solid ${colors.divider}`,
      marginTop: 40,

      ':first-child': {
        marginTop: 0,
      },
    },

    '& h1': {
      lineHeight: 1.2,

      [media.size('xsmall')]: {
        fontSize: 30,
      },

      [media.between('small', 'large')]: {
        fontSize: 45,
      },

      [media.greaterThan('xlarge')]: {
        fontSize: 60,
      },
    },

    '& h2': {
      borderTop: `1px solid ${colors.divider}`,
      marginTop: 44,
      paddingTop: 40,
      lineHeight: 1.2,

      ':first-child': {
        borderTop: 0,
        marginTop: 0,
        paddingTop: 0,
      },

      [media.lessThan('large')]: {
        fontSize: 20,
      },
      [media.greaterThan('xlarge')]: {
        fontSize: 30,
      },
    },

    '& hr + h2': {
      borderTop: 0,
      marginTop: 0,
    },

    '& h3': {
      paddingTop: 45,

      [media.lessThan('small')]: {
        overflowWrap: 'break-word',
        wordBreak: 'break-word',
      },

      [media.greaterThan('xlarge')]: {
        fontSize: 25,
        lineHeight: 1.3,
      },
    },

    '& h2 + h3, & h2 + h3:first-of-type': {
      paddingTop: 30,
    },

    '& h4': {
      fontSize: 20,
      color: colors.subtle,
      lineHeight: 1.3,
      marginTop: 50,
      fontWeight: 400,
    },

    '& h4 + p': {
      marginTop: 20,
    },

    '& ol, & ul': {
      marginTop: 20,
      fontSize: 16,
      color: colors.text,
      paddingLeft: 20,

      '& p, & p:first-of-type': {
        fontSize: 16,
        marginTop: 0,
        lineHeight: 1.2,
      },

      '& li': {
        marginTop: 10,
      },

      '& li.button-newapp': {
        marginTop: 0,
      },

      '& ol, & ul': {
        marginLeft: 20,
        marginTop: 10,
      },
    },

    '& img': {
      maxWidth: '100%',
    },

    '& ol': {
      listStyle: 'decimal',
    },

    '& ul': {
      listStyle: 'disc',
    },

    '& blockquote': {
      backgroundColor: hex2rgba('#ffe564', 0.3),
      borderLeftColor: colors.note,
      borderLeftWidth: 9,
      borderLeftStyle: 'solid',
      padding: '20px 45px 20px 26px',
      marginBottom: 30,
      marginTop: 20,
      marginLeft: -30,
      marginRight: -30,

      [media.lessThan('small')]: {
        marginLeft: -20,
        marginRight: -20,
      },

      '& p': {
        marginTop: 15,

        '&:first-of-type': {
          fontWeight: 700,
          marginTop: 0,
        },

        '&:nth-of-type(2)': {
          marginTop: 0,
        },
      },
    },

    '& .gatsby-highlight + blockquote': {
      marginTop: 40,
    },
  },
};

export { colors, fonts, media, sharedStyles };
