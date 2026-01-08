import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenRestart: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><g clip-path="url(#a)"><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.729 10.928A8.003 8.003 0 0 1 8.5 20.196M18.363 8.05l-.707-.707A8 8 0 0 0 5.754 17.999m12.61-9.95h-4.243m4.243 0V3.808"/></g><defs><clipPath id="a"><path fill="${color}" d="M0 0h24v24H0z"/></clipPath></defs></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenRestart };
export default React.memo(BrokenRestart);
