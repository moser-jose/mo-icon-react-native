import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineBombMinimalistic: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M15.665 2.83a.75.75 0 0 1 1.006.335l.5 1a.75.75 0 1 1-1.342.67l-.5-1a.75.75 0 0 1 .336-1.006"/><path fill="${color}" fill-rule="evenodd" d="M1.25 14.5a8.25 8.25 0 0 1 13.53-6.34l1.69-1.69a.75.75 0 1 1 1.06 1.06l-1.69 1.69A8.25 8.25 0 1 1 1.25 14.5M9.5 7.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5" clip-rule="evenodd"/><path fill="${color}" d="M19.835 6.83a.75.75 0 1 0-.67 1.341l1 .5a.75.75 0 1 0 .67-1.342zm.695-2.3a.75.75 0 0 0-1.06-1.06l-1 1a.75.75 0 0 0 1.06 1.06z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineBombMinimalistic };
export default React.memo(OutlineBombMinimalistic);
