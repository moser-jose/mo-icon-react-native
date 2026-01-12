import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneBluetoothCircle: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10" opacity=".5"/><path fill="${color}" d="m11.414 17.257-.004.001zm.383.191.001.004zm0-10.894.001-.004v.001z"/><path fill="${color}" fill-rule="evenodd" d="M12.21 5.465c.277.15.6.394.945.653l1.53 1.152c.237.177.475.357.648.53.194.196.417.495.417.918s-.223.722-.417.918a6 6 0 0 1-.648.531l-2.437 1.834 2.437 1.834c.237.177.475.356.648.53.194.196.417.495.417.918s-.223.722-.417.918a6 6 0 0 1-.648.53l-1.53 1.152c-.345.26-.668.503-.945.654-.283.154-.75.342-1.245.094-.493-.247-.623-.733-.67-1.052-.045-.313-.045-.718-.045-1.15v-2.827l-1.77 1.475a.75.75 0 1 1-.96-1.152L9.828 12 7.52 10.077a.75.75 0 0 1 .96-1.152l1.77 1.474V7.573c0-.433 0-.838.046-1.15.046-.32.176-.805.67-1.053s.96-.06 1.244.095m-.46 10.912v-2.874l2 1.504c.135.102.243.184.333.255l.026.021-.026.02c-.09.073-.198.154-.334.256l-1.454 1.094c-.227.171-.4.3-.539.397-.005-.17-.006-.387-.006-.673m-.336.88-.004.001zm.383.19.001.005zm-.047-9.823v2.874l2-1.504c.135-.102.243-.183.333-.255l.026-.02-.026-.021c-.09-.072-.198-.154-.334-.256l-1.454-1.094c-.227-.17-.4-.3-.539-.397-.005.17-.006.387-.006.673m.047-1.07.001-.004v.001z" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneBluetoothCircle };
export default React.memo(BoldDuotoneBluetoothCircle);
