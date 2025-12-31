import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneMapArrowRight: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M5.527 12c0-.25-.061-.5-.184-.73L2.191 5.368c-.74-1.388.81-2.87 2.306-2.202l16.51 7.362c.662.296.993.884.993 1.473"/><path stroke="${color}" stroke-width="1.5" d="M5.527 12c0 .25-.061.5-.184.73l-3.152 5.903c-.74 1.388.81 2.87 2.306 2.202l16.51-7.363C21.67 13.178 22 12.59 22 12" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotoneMapArrowRight);
