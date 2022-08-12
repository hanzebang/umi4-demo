import { useModel } from '@umijs/max';
import { Button } from 'antd';

export default () => {
  const { setState } = useModel('testModel');
  return <Button onClick={() => setState(Math.random())}>setState</Button>;
};
