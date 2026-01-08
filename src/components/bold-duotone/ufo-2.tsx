import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneUfo2: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M5.675 7.594C3.432 8.359 2 9.523 2 10.826 2 13.133 6.477 15 12 15s10-1.868 10-4.174c0-1.303-1.432-2.467-3.675-3.232-.124.29-.331.584-.668.818C16.869 8.96 15.3 9.5 12 9.5s-4.868-.54-5.657-1.088a1.9 1.9 0 0 1-.668-.818M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-4-2a1 1 0 1 1-2 0 1 1 0 0 1 2 0m9 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" clip-rule="evenodd"/><path fill="${color}" d="M12 17.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75"/><path fill="${color}" d="M7.055 7.005A4.73 4.73 0 0 1 11.729 3h.542a4.73 4.73 0 0 1 4.674 4.005.43.43 0 0 1-.145.175c-.414.288-1.61.82-4.8.82s-4.386-.532-4.8-.82a.43.43 0 0 1-.145-.175M6 16.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75m12.75.75a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0z" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneUfo2 };
export default React.memo(BoldDuotoneUfo2);
