import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneFootball: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10" opacity=".5"/><path fill="${color}" d="m15.658 3.223-1.32.932c-.698.491-1.18.832-1.6 1.02v4.399l1.55 1.185 4.098-1.696c.033-.457.186-1.027.406-1.848l.417-1.562.112-.443a9.97 9.97 0 0 1 2.639 7.377l-1.51-.998c-.715-.472-1.209-.799-1.537-1.121l-4.212 1.744-.582 1.887 2.58 2.984C17.146 17 17.73 17 18.569 17h2.072a10 10 0 0 1-6.522 4.772l.073-.272.587-1.765c.273-.817.46-1.382.688-1.783L12.915 15h-1.873l-2.323 2.958c.226.4.413.964.684 1.777l.588 1.765.109.322A10 10 0 0 1 3.336 17h2.277c.846 0 1.435 0 1.884.085l2.357-3.001-.577-1.87-4.148-1.747c-.328.322-.823.65-1.537 1.121L2.04 12.615l-.022.015Q2.001 12.317 2 12a9.97 9.97 0 0 1 2.693-6.83l.139.483.418 1.562c.219.82.371 1.39.405 1.846l4.032 1.7 1.552-1.188V5.158c-.414-.198-.889-.549-1.573-1.054L8.17 3l-.207-.155A9.95 9.95 0 0 1 11.989 2c1.447 0 2.823.308 4.064.863z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneFootball);
