/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 */

import React from 'react';
import isItemActive from 'utils/isItemActive';

class Section extends React.Component {
  render() {
    const {createLink, location, onLinkClick, item} = this.props;
    return (
      <div>
        <ul
          css={{
            fontFeatureSettings: "'tnum'",
            marginBottom: 10,
          }}>
          <li
            key={item.id}
            css={{
              marginTop: 5,
            }}>
            {createLink({
              isActive: isItemActive(location, item),
              item,
              location,
              onLinkClick,
            })}
          </li>
        </ul>
      </div>
    );
  }
}

export default Section;
