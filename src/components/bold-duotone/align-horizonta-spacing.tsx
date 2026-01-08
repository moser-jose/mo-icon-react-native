import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneAlignHorizontaSpacing: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M21 22.75a.75.75 0 0 1-.75-.75V2a.75.75 0 1 1 1.5 0v20a.75.75 0 0 1-.75.75m-18 0a.75.75 0 0 1-.75-.75V2a.75.75 0 1 1 1.5 0v20a.75.75 0 0 1-.75.75" clip-rule="evenodd" opacity=".5"/><path fill="${color}" d="M12 20c1.886 0 2.829 0 3.415-.586S16 17.886 16 16V8c0-1.886 0-2.828-.585-3.414C14.829 4 13.885 4 12 4s-2.828 0-3.414.586S8 6.114 8 8v8c0 1.886 0 2.828.586 3.414S10.115 20 12 20"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneAlignHorizontaSpacing };
export default React.memo(BoldDuotoneAlignHorizontaSpacing);
