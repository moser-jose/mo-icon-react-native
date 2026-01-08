import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneTextSelection: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M8.25 9A.75.75 0 0 1 9 8.25h6a.75.75 0 0 1 0 1.5h-2.25V15a.75.75 0 0 1-1.5 0V9.75H9A.75.75 0 0 1 8.25 9" clip-rule="evenodd"/><path fill="${color}" d="M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4M22 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-2 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/><path fill="${color}" d="M4.75 5.855a2 2 0 0 1-1.5 0v12.29a2 2 0 0 1 1.5 0zM5.855 4.75h12.29a2 2 0 0 1 0-1.5H5.855a2 2 0 0 1 0 1.5M19.25 5.855a2 2 0 0 0 1.5 0v12.29a2 2 0 0 0-1.5 0zM18.145 19.25H5.855a2 2 0 0 1 0 1.5h12.29a2 2 0 0 1 0-1.5" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneTextSelection };
export default React.memo(BoldDuotoneTextSelection);
