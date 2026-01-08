import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineStickerSmileCircle2: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M16 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5.448-1.5 1-1.5 1 .672 1 1.5m-6 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S8.448 9 9 9s1 .672 1 1.5"/><path fill="${color}" fill-rule="evenodd" d="M12 2.75a9.25 9.25 0 0 0-.75 18.47c.002-1.488.016-2.593.14-3.502a5.8 5.8 0 0 1-2.837-1.116.75.75 0 1 1 .894-1.204 4.3 4.3 0 0 0 2.31.845 7.75 7.75 0 0 1 4.683-4.558c1.147-.401 2.523-.433 4.78-.435A9.25 9.25 0 0 0 12 2.75m9.14 10c-2.257.006-3.336.047-4.204.35a6.25 6.25 0 0 0-3.835 3.836c-.304.868-.345 1.947-.35 4.203zM1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12q0 .543-.053 1.074l-.026.267-9.33 9.33-.267.026q-.53.053-1.074.053C6.063 22.75 1.25 17.937 1.25 12" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineStickerSmileCircle2 };
export default React.memo(OutlineStickerSmileCircle2);
