import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldShop: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M3.778 3.655c-.181.36-.27.806-.448 1.696l-.598 2.99a3.06 3.06 0 1 0 6.043.904l.07-.69a3.167 3.167 0 1 0 6.307-.038l.073.728a3.06 3.06 0 1 0 6.043-.904l-.598-2.99c-.178-.89-.267-1.335-.448-1.696a3 3 0 0 0-1.888-1.548C17.944 2 17.49 2 16.582 2H7.418c-.908 0-1.362 0-1.752.107a3 3 0 0 0-1.888 1.548M18.269 13.5a4.53 4.53 0 0 0 2.231-.581v1.08c0 3.772 0 5.658-1.172 6.83-.943.942-2.348 1.126-4.828 1.162V18.5c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.55c-.348-.2-.815-.2-1.75-.2s-1.402 0-1.75.2a1.5 1.5 0 0 0-.549.55c-.201.348-.201.815-.201 1.75v3.491c-2.48-.036-3.885-.22-4.828-1.163C3.5 19.657 3.5 17.771 3.5 14v-1.081a4.53 4.53 0 0 0 2.232.58 4.55 4.55 0 0 0 3.112-1.227A4.64 4.64 0 0 0 12 13.5a4.64 4.64 0 0 0 3.156-1.229 4.55 4.55 0 0 0 3.112 1.229"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldShop };
export default React.memo(BoldShop);
