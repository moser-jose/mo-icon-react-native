import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenTrophyMusic: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M13 10.5V5"/><circle cx="11.5" cy="10.5" r="1.5" stroke="${color}" stroke-width="1.5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M15 7a2 2 0 0 1-2-2"/><path stroke="${color}" stroke-width="1.5" d="m19 5 .949.316c.99.33 1.485.495 1.768.888S22 7.12 22 8.162v.073c0 .86 0 1.291-.207 1.643s-.584.561-1.336.98L17.5 12.5M5 5l-.949.316c-.99.33-1.485.495-1.768.888S2 7.12 2 8.162v.073c0 .86 0 1.291.207 1.643s.584.561 1.336.98L6.5 12.5"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 16v3"/><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.5 22h-7l.34-1.696a1 1 0 0 1 .98-.804h4.36a1 1 0 0 1 .98.804z"/><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M18 22H6M17 2.456c.741.141 1.181.297 1.56.765.477.586.452 1.219.401 2.485-.18 4.553-1.2 10.294-6.96 10.294S5.22 10.26 5.038 5.706c-.05-1.266-.075-1.9.4-2.485.476-.586 1.045-.682 2.184-.874A26.4 26.4 0 0 1 12 2q1.078.002 2 .068"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenTrophyMusic };
export default React.memo(BrokenTrophyMusic);
