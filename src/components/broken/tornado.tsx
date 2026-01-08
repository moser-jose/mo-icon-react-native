import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenTornado: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 6c4.97 0 9-.672 9-1.5 0-.52-1.588-.978-4-1.247M12 3c-4.97 0-9 .672-9 1.5 0 .589 2.037 1.099 5 1.344M20 8s-2.791 1-8.276 1S4 8 4 8m12 6s-1.258.5-4 .5-4-.5-4-.5m5 3c-1.352 0-2.342-.121-3-.245m6-.255a10 10 0 0 1-1 .289m-3.281 2.673q.575.038 1.281.039a9.3 9.3 0 0 0 1.5-.114M18 11s-.515 1-6 1m-6-1s.219.425 1.892.721M13 22h.5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenTornado };
export default React.memo(BrokenTornado);
