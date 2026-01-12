import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneOvenMittsMinimalistic: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M10.334 4.78C9.914 3.151 8.668 1.977 7.214 2c-1.773.027-3.182 1.817-3.148 4l-.032 3.34c-.007.757-.01 1.135-.144 1.47-.134.337-.43.659-1.02 1.301-.58.63-.87 1.098-.87 1.634 0 .818.673 1.476 2.019 2.792l3.569 3.49C8.933 21.341 9.606 22 10.443 22c.836 0 1.509-.658 2.855-1.974l6.78-6.63a6.314 6.314 0 0 0 0-9.072c-2.562-2.505-6.716-2.505-9.278 0zm0 0-.962.94"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m10.8 17.584-4.283-4.187" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneOvenMittsMinimalistic };
export default React.memo(OutlineDuotoneOvenMittsMinimalistic);
