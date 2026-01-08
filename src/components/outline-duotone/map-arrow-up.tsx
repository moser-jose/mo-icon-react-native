import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneMapArrowUp: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 18.473c-.25 0-.5.061-.73.184l-5.903 3.152c-1.388.74-2.87-.81-2.202-2.306l7.362-16.51C10.824 2.33 11.412 2 12 2"/><path stroke="${color}" stroke-width="1.5" d="M12 18.473c.25 0 .5.061.73.184l5.903 3.152c1.388.74 2.87-.81 2.202-2.306l-7.363-16.51C13.178 2.33 12.59 2 12 2" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneMapArrowUp };
export default React.memo(OutlineDuotoneMapArrowUp);
