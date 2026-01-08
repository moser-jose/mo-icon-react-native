import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldBlackHole3: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M8.928 12.453c.406.836 1.016 1.541 1.825 1.942-.793.183-1.71.22-2.648.087C5.315 14.087 2.75 12.284 2.75 9a.75.75 0 0 0-1.5 0c0 4.316 3.436 6.513 6.645 6.968 1.612.228 3.27.042 4.558-.584.868-.422 1.596-1.065 1.988-1.921.142.741.162 1.578.041 2.432-.395 2.79-2.198 5.355-5.482 5.355a.75.75 0 0 0 0 1.5c4.316 0 6.513-3.436 6.968-6.645.228-1.612.042-3.27-.584-4.558-.346-.712-.84-1.33-1.48-1.745a7.7 7.7 0 0 1 1.99.027c2.792.396 5.356 2.198 5.356 5.483a.75.75 0 0 0 1.5 0c0-4.316-3.436-6.513-6.645-6.968-1.612-.228-3.27-.043-4.558.584-.692.336-1.294.812-1.709 1.425a7.6 7.6 0 0 1-.009-2.248c.396-2.79 2.198-5.355 5.483-5.355a.75.75 0 0 0 0-1.5c-4.316 0-6.513 3.436-6.968 6.645-.228 1.612-.043 3.27.584 4.558"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldBlackHole3 };
export default React.memo(BoldBlackHole3);
