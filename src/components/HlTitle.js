import { createElement } from 'glamor/react';
import { colors } from 'theme'

const HlTitle = ({
  children,
  lineWidth = 32,
  color = colors.text,
  borderColor = colors.primary,
  type = 'div',
  ...rest
}) =>
  createElement(
    type,
    {
      css: {
        fontSize: 20,
        color: color,
        opacity: .7,
        marginBottom: 32,
        fontWeight: 500,
        textAlign: 'center',
        position: 'relative',
        '::before': {
          content: ' ',
          width: lineWidth,
          position: 'absolute',
          border: `2px solid ${borderColor}`,
          bottom: '-12px',
          left: '50%',
          marginLeft: `-${lineWidth / 2}px`
        }
      },
      ...rest,
    },
    children,
  );

export default HlTitle;
