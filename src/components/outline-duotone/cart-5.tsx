import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneCart5: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M3.555 14.257c-.718-3.353-1.078-5.03-.177-6.143C4.278 7 5.993 7 9.422 7h5.156c3.43 0 5.143 0 6.044 1.114s.541 2.79-.177 6.143l-.429 2c-.487 2.273-.73 3.409-1.555 4.076S16.474 21 14.15 21h-4.3c-2.324 0-3.486 0-4.31-.667-.826-.667-1.07-1.803-1.556-4.076z"/><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 12h8m-6 3h4" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m18 9-3-6M6 9l3-6" opacity=".6"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneCart5 };
export default React.memo(OutlineDuotoneCart5);
