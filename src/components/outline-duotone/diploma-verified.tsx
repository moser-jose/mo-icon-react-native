import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneDiplomaVerified: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M7 17.998c-2.175-.012-3.353-.108-4.121-.877C2 16.243 2 14.828 2 12V8c0-2.828 0-4.243.879-5.121C3.757 2 5.172 2 8 2h8c2.828 0 4.243 0 5.121.879C22 3.757 22 5.172 22 8v4c0 2.828 0 4.243-.879 5.121-.73.73-1.829.854-3.801.875l-.82.002" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M9 6h6M7 9.5h10" opacity=".5"/><path stroke="${color}" stroke-width="1.5" d="M10.89 13.945a1.71 1.71 0 0 1 2.22 0c.273.234.614.375.973.403a1.71 1.71 0 0 1 1.569 1.57c.028.358.17.698.403.973a1.71 1.71 0 0 1 0 2.218 1.7 1.7 0 0 0-.403.973 1.71 1.71 0 0 1-1.57 1.57 1.7 1.7 0 0 0-.973.402 1.71 1.71 0 0 1-2.218 0 1.7 1.7 0 0 0-.974-.403 1.71 1.71 0 0 1-1.568-1.569 1.7 1.7 0 0 0-.404-.973 1.71 1.71 0 0 1 0-2.219 1.7 1.7 0 0 0 .404-.973 1.71 1.71 0 0 1 1.568-1.569c.36-.028.7-.17.974-.403Z"/><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m10.5 18.2.857.8 2.143-2"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneDiplomaVerified };
export default React.memo(OutlineDuotoneDiplomaVerified);
