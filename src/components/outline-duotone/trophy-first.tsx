import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneTrophyFirst: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M12 16c-5.76 0-6.78-5.74-6.96-10.294-.051-1.266-.076-1.9.4-2.485.475-.586 1.044-.682 2.183-.874A26.4 26.4 0 0 1 12 2c1.784 0 3.253.157 4.377.347 1.139.192 1.708.288 2.184.874s.45 1.219.4 2.485C18.781 10.26 17.761 16 12.001 16Z"/><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m11 8 1.5-1.5v4"/><path stroke="${color}" stroke-width="1.5" d="m19 5 .949.316c.99.33 1.485.495 1.768.888S22 7.12 22 8.162v.073c0 .86 0 1.291-.207 1.643s-.584.561-1.336.98L17.5 12.5M5 5l-.949.316c-.99.33-1.485.495-1.768.888S2 7.12 2 8.162v.073c0 .86 0 1.291.207 1.643s.584.561 1.336.98L6.5 12.5" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 16v3" opacity=".5"/><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.5 22h-7l.34-1.696a1 1 0 0 1 .98-.804h4.36a1 1 0 0 1 .98.804z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M18 22H6" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneTrophyFirst };
export default React.memo(OutlineDuotoneTrophyFirst);
