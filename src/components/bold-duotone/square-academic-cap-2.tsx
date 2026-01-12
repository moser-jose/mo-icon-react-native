import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneSquareAcademicCap2: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M14.217 3.5a5.17 5.17 0 0 0-4.434 0L5.489 5.512a2.25 2.25 0 0 1 .647 4.306l-1.076.461c-.534.23-.837.362-1.042.467l-.003.05L9.783 13.5a5.17 5.17 0 0 0 4.434 0l6.691-3.137c1.456-.682 1.456-3.044 0-3.726z"/><path fill="${color}" d="M5.545 8.44a.75.75 0 0 0-.59-1.38l-1.112.477c-.557.239-1.03.441-1.4.65-.395.222-.734.482-.989.868-.254.386-.36.8-.408 1.25C1 10.729 1 11.243 1 11.85v2.901a.75.75 0 0 0 1.5 0v-2.862c0-.656.001-1.088.037-1.421.034-.315.093-.47.17-.586.075-.115.195-.231.471-.387.292-.164.689-.335 1.292-.593z"/><path fill="${color}" d="M5 11.258 9.783 13.5a5.17 5.17 0 0 0 4.434 0L19 11.258v5.367c0 1.008-.503 1.952-1.385 2.44C16.146 19.878 13.796 21 12 21s-4.146-1.122-5.615-1.935C5.504 18.577 5 17.633 5 16.625z" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneSquareAcademicCap2 };
export default React.memo(BoldDuotoneSquareAcademicCap2);
