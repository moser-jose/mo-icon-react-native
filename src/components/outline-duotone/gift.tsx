import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneGift: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M22 12H2M12 2v20" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M13 12a4 4 0 0 0 4 4m-6-4a4 4 0 0 1-4 4"/><path stroke="${color}" stroke-width="1.5" d="M12 10.035a3.25 3.25 0 0 1 2.46-3.15c1.603-.401 3.056 1.051 2.655 2.655a3.25 3.25 0 0 1-3.15 2.46H12zm0 0a3.25 3.25 0 0 0-2.46-3.15C7.938 6.484 6.485 7.936 6.886 9.54a3.25 3.25 0 0 0 3.15 2.46H12z"/><path stroke="${color}" stroke-width="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneGift };
export default React.memo(OutlineDuotoneGift);
