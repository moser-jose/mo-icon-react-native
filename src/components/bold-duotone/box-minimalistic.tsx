import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneBoxMinimalistic: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M8.422 20.618C10.178 21.539 11.056 22 12 22V12L2.638 7.072l-.04.067C2 8.154 2 9.416 2 11.941v.117c0 2.525 0 3.787.597 4.802.598 1.014 1.674 1.579 3.825 2.708z"/><path fill="${color}" d="m17.577 4.432-2-1.05C13.822 2.461 12.944 2 12 2c-.945 0-1.822.46-3.578 1.382l-2 1.05C4.318 5.536 3.242 6.1 2.638 7.072L12 12l9.362-4.927c-.606-.973-1.68-1.537-3.785-2.641" opacity=".7"/><path fill="${color}" d="m21.403 7.14-.041-.068L12 12v10c.944 0 1.822-.461 3.578-1.382l2-1.05c2.151-1.129 3.227-1.694 3.825-2.708.597-1.015.597-2.277.597-4.802v-.117c0-2.525 0-3.787-.597-4.802" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneBoxMinimalistic };
export default React.memo(BoldDuotoneBoxMinimalistic);
