import { parse } from 'query-string';
// use qs will be allright
// import { parse } from 'qs';
import { useState } from 'react';

export default () => {
  const [, setState] = useState<number>(0);

  const query = parse('?a=1');
  // copy 'ref' also works
  // const query = Object.assign({}, parse('?a=1'));

  console.log('query :>> ', query);
  return { setState, query };
};
