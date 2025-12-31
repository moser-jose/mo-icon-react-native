import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldRouting3: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><circle cx="5" cy="5" r="3" fill="${color}"/><circle cx="19" cy="19" r="3" fill="${color}"/><path fill="${color}" fill-rule="evenodd" d="M10.25 5a.75.75 0 0 1 .75-.75h5.132c2.751 0 3.797 3.593 1.476 5.07L7.197 15.945c-1.055.672-.58 2.305.671 2.305h3.321l-.22-.22a.75.75 0 0 1 1.061-1.06l1.5 1.5a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 0 1-1.06-1.06l.22-.22H7.867c-2.751 0-3.797-3.593-1.476-5.07l10.411-6.625c1.055-.672.58-2.305-.671-2.305H11a.75.75 0 0 1-.75-.75" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldRouting3);
