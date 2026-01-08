import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneMapArrowDown: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 5.527c-.25 0-.5-.061-.73-.184L5.368 2.191c-1.388-.74-2.87.81-2.202 2.306l7.362 16.51c.296.662.884.993 1.473.993"/><path stroke="${color}" stroke-width="1.5" d="M12 5.527c.25 0 .5-.061.73-.184l5.903-3.152c1.388-.74 2.87.81 2.202 2.306l-7.363 16.51C13.178 21.67 12.59 22 12 22" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneMapArrowDown };
export default React.memo(OutlineDuotoneMapArrowDown);
