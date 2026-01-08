import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenTestTubeMinimalistic: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m6.8 11.783 1.275.143a2.205 2.205 0 0 1 1.944 1.952 2.21 2.21 0 0 0 1.32 1.787l1.661.69m0 0-3.512 3.527a3.79 3.79 0 0 1-5.375 0 3.83 3.83 0 0 1 0-5.4l10.75-10.797 5.376 5.399-1.81 1.818M13 16.355l3-3.014m5-3.492L14.182 3"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenTestTubeMinimalistic };
export default React.memo(BrokenTestTubeMinimalistic);
