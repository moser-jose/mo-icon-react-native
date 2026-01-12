import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldKeyMinimalisticSquare2: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M9.62 18.98a3.23 3.23 0 0 0 2.644-.927l2.655-2.655A7.75 7.75 0 0 0 22 12.955c-.006 4.085-.101 6.219-1.463 7.581C19.07 22 16.714 22 12 22s-7.071 0-8.536-1.464C2 19.071 2 16.714 2 12.001c0-4.715 0-7.072 1.464-8.536C4.827 2.103 6.961 2.008 11.045 2a7.75 7.75 0 0 0-2.443 7.08l-2.655 2.656a3.23 3.23 0 0 0-.927 2.643l.193 1.74a2.82 2.82 0 0 0 .81 1.684l.173.174a2.82 2.82 0 0 0 1.684.81z"/><path fill="${color}" fill-rule="evenodd" d="M21.963 8.413a5.73 5.73 0 0 1-1.649 3.413 5.75 5.75 0 0 1-5.507 1.504.9.9 0 0 0-.864.216l-1.53 1.53-.002-.004-1.458-1.441a.75.75 0 1 0-1.055 1.066l1.455 1.439-.503.503a1.23 1.23 0 0 1-1.009.354l-1.74-.194a.82.82 0 0 1-.49-.235l-.174-.174a.82.82 0 0 1-.236-.49l-.193-1.74a1.23 1.23 0 0 1 .353-1.01l3.094-3.093a.9.9 0 0 0 .215-.864 5.75 5.75 0 0 1 1.505-5.507 5.73 5.73 0 0 1 3.413-1.648c.906.033 1.68.096 2.348.215a5.7 5.7 0 0 1 2.378 1.433 5.7 5.7 0 0 1 1.433 2.378c.12.668.182 1.442.216 2.349m-6.975-1.758a1.667 1.667 0 1 1 2.357 2.357 1.667 1.667 0 0 1-2.357-2.357" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldKeyMinimalisticSquare2 };
export default React.memo(BoldKeyMinimalisticSquare2);
