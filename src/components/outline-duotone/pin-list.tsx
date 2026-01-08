import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotonePinList: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="m13.632 8.223-.367-.366c-1.53-1.53-2.295-2.295-3.124-2.294a2 2 0 0 0-.788.162C8.59 6.052 8.19 7.058 7.39 9.068l-.057.146c-.227.57-.34.854-.523 1.084a2 2 0 0 1-.492.445c-.247.157-.542.241-1.132.409-.916.26-1.373.39-1.576.666a1 1 0 0 0-.186.715c.042.34.379.677 1.051 1.35l3.13 3.13c.673.673 1.01 1.01 1.35 1.051a1 1 0 0 0 .715-.185c.277-.203.407-.661.667-1.576.167-.59.251-.885.409-1.133.12-.187.27-.354.444-.492.23-.182.515-.295 1.085-.522l.145-.058c2.01-.8 3.016-1.2 3.344-1.962a2 2 0 0 0 .162-.788c0-.83-.764-1.595-2.294-3.125Z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m3.347 18.142 2.694-2.694M22 8h-5m5 4.5h-4m4 4.5h-9" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotonePinList };
export default React.memo(OutlineDuotonePinList);
