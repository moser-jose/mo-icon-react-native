import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneUsersGroupRounded: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><circle cx="9" cy="6" r="4" stroke="${color}" stroke-width="1.5"/><path stroke="${color}" stroke-width="1.5" d="M12.5 4.341a3 3 0 1 1 0 3.318" opacity=".5"/><ellipse cx="9" cy="17" stroke="${color}" stroke-width="1.5" rx="7" ry="4"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M18 14c1.754.385 3 1.359 3 2.5 0 1.03-1.014 1.923-2.5 2.37" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneUsersGroupRounded };
export default React.memo(OutlineDuotoneUsersGroupRounded);
