import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneShop: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M14.5 21.991V18.5c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C13.402 16 12.935 16 12 16s-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549c-.201.348-.201.815-.201 1.75v3.491z"/><path fill="${color}" fill-rule="evenodd" d="M5.732 12a3.04 3.04 0 0 1-2.232-.967V14c0 3.771 0 5.657 1.172 6.829.943.943 2.348 1.127 4.828 1.162h5c2.48-.035 3.885-.22 4.828-1.162C20.5 19.657 20.5 17.77 20.5 14v-2.966a3.06 3.06 0 0 1-5.275-1.789l-.073-.727a3.167 3.167 0 1 1-6.307.037l-.069.69A3.06 3.06 0 0 1 5.732 12m8.768 6.5v3.491h-5v-3.49c0-.935 0-1.403.201-1.75a1.5 1.5 0 0 1 .549-.55c.348-.2.815-.2 1.75-.2s1.402 0 1.75.2a1.5 1.5 0 0 1 .549.55c.201.347.201.815.201 1.75" clip-rule="evenodd" opacity=".5"/><path fill="${color}" d="M9.5 2h5l.652 6.517a3.167 3.167 0 1 1-6.304 0z"/><path fill="${color}" d="M3.33 5.351c.178-.89.267-1.335.448-1.696a3 3 0 0 1 1.888-1.548C6.056 2 6.51 2 7.418 2H9.5l-.725 7.245a3.06 3.06 0 1 1-6.043-.904zm17.34 0c-.178-.89-.267-1.335-.448-1.696a3 3 0 0 0-1.888-1.548C17.944 2 17.49 2 16.582 2H14.5l.725 7.245a3.06 3.06 0 1 0 6.043-.904z" opacity=".7"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneShop);
