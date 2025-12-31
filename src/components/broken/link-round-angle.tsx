import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenLinkRoundAngle: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m12.792 15.8 1.43-1.432a6.076 6.076 0 0 0 0-8.59 6.067 6.067 0 0 0-8.583 0L2.778 8.643A6.076 6.076 0 0 0 6.732 19"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M21.222 15.358A6.076 6.076 0 0 0 17.268 5m1.093 13.221a6.067 6.067 0 0 1-8.583 0 6.076 6.076 0 0 1 0-8.589l1.43-1.431"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BrokenLinkRoundAngle);
