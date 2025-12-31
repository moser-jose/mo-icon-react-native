import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneUserHeart: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><circle cx="10" cy="6" r="4" stroke="${color}" stroke-width="1.5"/><path stroke="${color}" stroke-width="1.5" d="M18 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S5.582 13 10 13s8 2.015 8 4.5Z" opacity=".5"/><path fill="${color}" d="m18.089 12.539.455-.597zM19 8.644l-.532.528a.75.75 0 0 0 1.064 0zm.912 3.895-.456-.597zm-1.368-.597c-.487-.371-.925-.668-1.278-1.053-.327-.357-.516-.725-.516-1.19h-1.5c0 .95.414 1.663.91 2.204.471.513 1.077.93 1.474 1.232zM16.75 9.7c0-.412.24-.745.547-.881.267-.118.69-.13 1.171.353l1.064-1.057c-.87-.875-1.945-1.065-2.842-.668A2.46 2.46 0 0 0 15.25 9.7zm.884 3.435c.148.113.342.26.545.376s.487.239.821.239v-1.5c.034 0 .017.011-.082-.044-.1-.056-.212-.14-.374-.264zm2.732 0c.397-.303 1.003-.719 1.473-1.232.497-.541.911-1.255.911-2.203h-1.5c0 .464-.189.832-.516 1.19-.353.384-.791.681-1.278 1.052zM22.75 9.7c0-1-.585-1.875-1.44-2.253-.896-.397-1.973-.207-2.842.668l1.064 1.057c.48-.483.904-.471 1.17-.353a.96.96 0 0 1 .548.88zm-3.294 2.242a4 4 0 0 1-.374.264c-.099.056-.116.044-.082.044v1.5c.334 0 .617-.123.82-.239.204-.115.398-.263.546-.376z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotoneUserHeart);
