/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 * @flow
 */

// $FlowExpectedError
// // $FlowExpectedError
import navCrypto from '../../content/crypto-block/nav.yml';
import navNerv from '../../content/nerv-first/nav.yml';
// $FlowExpectedError

const itemList1 = navCrypto.map(
  (item: Object): Object => ({
    ...item,
    directory: 'crypto-block',
  }),
);

const itemList2 = navNerv.map(
  (item: Object): Object => ({
    ...item,
    directory: 'nerv-first',
  }),
);

const itemListByLocation = location => {
  const courseId = location.pathname.split('/')[1];
  if (courseId === 'nerv-first') {
    return itemList2;
  }
  return itemList1;
};

export {itemListByLocation};
