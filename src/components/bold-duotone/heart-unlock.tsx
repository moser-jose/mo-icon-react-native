import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneHeartUnlock: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M7.501 7.014c.164-.997.554-1.74 1.093-2.27.739-.726 1.85-1.144 3.302-1.144 1.833 0 3.119.661 3.816 1.791.224.362.665.451.985.198.32-.252.4-.751.176-1.114C15.82 2.772 14.009 2 11.896 2c-1.674 0-3.157.481-4.23 1.538-.945.929-1.504 2.234-1.636 3.839.46-.197.955-.323 1.471-.363"/><path fill="${color}" fill-rule="evenodd" d="M8.496 20.037C5.968 18.152 3 15.937 3 12.099c0-4.237 4.95-7.242 9-3.168 4.05-4.074 9-1.069 9 3.168 0 3.839-2.968 6.053-5.496 7.938q-.394.294-.77.578C13.8 21.328 12.9 22 12 22s-1.8-.672-2.734-1.385q-.376-.285-.77-.578" clip-rule="evenodd" opacity=".5"/><path fill="${color}" d="M12 11.25a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0V12a.75.75 0 0 1 .75-.75"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneHeartUnlock };
export default React.memo(BoldDuotoneHeartUnlock);
