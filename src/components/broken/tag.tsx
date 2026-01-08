import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenTag: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M16.137 4.728c-1.546-1.545-2.318-2.318-3.321-2.605-1.003-.288-2.068-.042-4.197.45l-1.228.283c-1.792.413-2.688.62-3.302 1.233S3.27 5.6 2.856 7.391l-.284 1.228c-.491 2.13-.737 3.194-.45 4.197.288 1.003 1.061 1.775 2.606 3.32l1.83 1.83C9.248 20.657 10.592 22 12.262 22c1.671 0 3.015-1.344 5.704-4.033 2.69-2.69 4.034-4.034 4.034-5.705 0-1.342-.868-2.474-2.604-4.262"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M8.607 10.879a2 2 0 1 0-2-2m4.935 9.621 1-1m5.979-5.98L15 15.043"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenTag };
export default React.memo(BrokenTag);
