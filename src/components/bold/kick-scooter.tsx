import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldKickScooter: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M16.631 4.769a15 15 0 0 0-1.022-.019H14.38a.75.75 0 1 1 0-1.5h1.255c.435 0 .803 0 1.107.023.32.024.622.075.918.206.456.202.846.529 1.124.942.181.269.283.558.36.867.073.294.133.653.205 1.077l1.009 5.98a.75.75 0 0 1-.74.876c-2.487 0-4.488 1.99-4.488 4.426a.75.75 0 0 1-.75.75H7.42a3.13 3.13 0 0 1-3.039 2.353c-1.72 0-3.131-1.38-3.131-3.103 0-1.722 1.41-3.103 3.131-3.103 1.462 0 2.7.997 3.039 2.353h6.258c.337-2.64 2.425-4.73 5.065-5.113l-.868-5.143c-.077-.458-.128-.76-.186-.991-.055-.222-.103-.324-.148-.391a1.15 1.15 0 0 0-.488-.408c-.077-.034-.19-.065-.422-.082m-.143 12.878c0-1.722 1.41-3.103 3.131-3.103s3.131 1.381 3.131 3.103-1.41 3.103-3.131 3.103-3.13-1.38-3.13-3.103" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldKickScooter };
export default React.memo(BoldKickScooter);
