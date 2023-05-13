import { useDebounceEffect } from 'ahooks';
import { useState } from 'react';

export const useResize = () => {
  const [width, setWidth] = useState(() => window.document.body.offsetWidth);

  useDebounceEffect(
    () => {
      window.addEventListener('resize', (e) =>
        setWidth((e?.target as any).innerWidth),
      );
      return window.removeEventListener('resize', (e) =>
        setWidth((e?.target as any).innerWidth),
      );
    },
    [],
    { wait: 1000 },
  );

  return width;
};
