import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneCorkscrew: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M22 12a2.15 2.15 0 1 1-4.3 0 2.15 2.15 0 0 1 4.3 0"/><path fill="${color}" d="M21.358 10.385 13.615 2.64a2.19 2.19 0 1 0-3.097 3.098l7.743 7.743c.171.172.364.309.57.412A2.15 2.15 0 1 1 22 11.957a2.18 2.18 0 0 0-.642-1.572" opacity=".5"/><path fill="${color}" d="m12.535 10.405 1.324-1.324.914.913.147.147-1.325 1.324a.345.345 0 0 0-.05.425l.647 1.05c.737 1.198-.693 2.549-1.847 1.745l-2.623-1.829-1.995-1.39 1.26 1.807 3.684 5.287c.81 1.163-.563 2.597-1.76 1.837l-6.116-3.883.65 1.37c.333.704.19 1.543-.362 2.094L2.53 22.531a.75.75 0 0 1-1.06-1.061l2.552-2.552a.34.34 0 0 0 .067-.392l-.95-2.003c-.556-1.176.771-2.349 1.87-1.651l.543.345.001.001 5.311 3.372-3.189-4.575-1.827-2.621c-.828-1.189.618-2.635 1.807-1.807l3.513 2.45 1.236.86-.136-.22a1.84 1.84 0 0 1 .267-2.272"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneCorkscrew);
