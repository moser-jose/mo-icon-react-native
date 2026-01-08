import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenDiagramUp: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M22 22H12c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12V9m0-7v3"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="m19 7-3.118 3.926c-.477.602-.716.903-.99 1.05a1.5 1.5 0 0 1-1.357.029c-.28-.135-.531-.425-1.035-1.005s-.755-.87-1.035-1.005a1.5 1.5 0 0 0-1.356.03c-.274.146-.513.447-.99 1.048L6 15"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenDiagramUp };
export default React.memo(BrokenDiagramUp);
