import { useEffect, useState } from 'react';
import { mediator } from '../components/EFormItem/mediator';

export const useMediator = (publishKey: string | undefined, value: any) => {
  const sub = mediator.install({});

  useEffect(() => {
    if (!publishKey) return;
    sub.publish(publishKey, value);
  }, [value]);

  return;
};

export const useGetMediator = (publishKey: string | undefined) => {
  const sub = mediator.install({});

  const [items, setItems] = useState();

  if (!publishKey) return;

  sub.subscribe(publishKey, (value: any) => setItems(value));

  return items;
};
