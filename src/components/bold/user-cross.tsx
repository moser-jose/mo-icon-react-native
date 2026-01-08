import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldUserCross: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M16.5 22c-1.65 0-2.475 0-2.987-.513C13 20.975 13 20.15 13 18.5s0-2.475.513-2.987C14.025 15 14.85 15 16.5 15s2.475 0 2.987.513C20 16.025 20 16.85 20 18.5s0 2.475-.513 2.987C18.975 22 18.15 22 16.5 22m-1.143-5.468a.583.583 0 1 0-.825.825l1.143 1.143-1.143 1.143a.583.583 0 1 0 .825.825l1.143-1.143 1.143 1.143a.583.583 0 1 0 .825-.825L17.325 18.5l1.143-1.143a.583.583 0 1 0-.825-.825L16.5 17.675z" clip-rule="evenodd"/><path fill="${color}" d="M12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8m3.678 3.503c-.473.005-.914.023-1.298.074-.643.087-1.347.293-1.928.875-.582.581-.788 1.285-.874 1.928-.078.578-.078 1.284-.078 2.034v.172c0 .75 0 1.456.078 2.034.06.451.18.932.447 1.38H12c-8 0-8-2.015-8-4.5S7.582 13 12 13c1.326 0 2.577.181 3.678.503"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldUserCross };
export default React.memo(BoldUserCross);
