import { Scatter } from '@ant-design/charts';
import React, { FC } from 'react';

type Props = {};

export const Hello: FC<Props> = ({ }) => {
  return <div className={'Hello'}>
    <h1>Scatter</h1>
    <Scatter xField={'time'} yField={'value'} colorField={'type'}
      shapeField={'square'} pointStyle={{ fillOpacity: 0.85 }}
      sizeField={10}
      data={{
        type: 'inline',
        value: Array.from({ length: 24 }).map((_, index) => ({
          "time": index,
          "value": parseInt((Math.random() * 20).toString()),
          "type": (Math.random() * 10 % 2 === 0) ? "ok" : 'warning'
        }))
      }} />
  </div>;
}
