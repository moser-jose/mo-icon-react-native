import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneShop2: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M16.528 2H7.472c-1.203 0-1.804 0-2.287.299-.484.298-.753.836-1.29 1.912L2.49 7.76c-.324.82-.608 1.786-.062 2.479A2 2 0 0 0 6 9a2 2 0 1 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 3.571 1.238c.546-.693.262-1.659-.062-2.479l-1.403-3.548c-.538-1.076-.807-1.614-1.29-1.912C18.331 2 17.73 2 16.527 2M9.5 21.25V18.5c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C10.598 16 11.065 16 12 16s1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75v2.75z"/><path fill="${color}" fill-rule="evenodd" d="M4 11a2 2 0 0 0 2-2 2 2 0 1 0 4 0 2 2 0 1 0 4 0 2 2 0 1 0 4 0 2 2 0 0 0 2 2v10.25h-5.5V18.5c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C13.402 16 12.935 16 12 16s-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549c-.201.348-.201.815-.201 1.75v2.75H4z" clip-rule="evenodd" opacity=".5"/><path fill="${color}" d="M14.5 21.25H2a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneShop2 };
export default React.memo(BoldDuotoneShop2);
