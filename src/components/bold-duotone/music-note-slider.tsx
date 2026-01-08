import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneMusicNoteSlider: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M6.724 3.762H5.268a8 8 0 0 0-.434.025c-.43.038-.82.119-1.183.318a3.15 3.15 0 0 0-1.321 1.42c-.186.39-.26.809-.296 1.272C2 7.245 2 7.796 2 8.47v7.063c0 .673 0 1.224.034 1.671.035.464.11.882.296 1.273.29.611.752 1.108 1.32 1.42.364.2.753.28 1.184.318q.202.018.434.025h1.456c-.304-.899-.304-2.203-.304-4.24V8c0-2.037 0-3.34.305-4.238m10.551 16.477c.306-.898.306-2.202.306-4.239V8c0-2.037 0-3.34-.305-4.238h1.455q.233.007.434.025c.43.038.82.119 1.183.318a3.15 3.15 0 0 1 1.322 1.42c.185.39.26.809.295 1.272.034.448.034.999.034 1.672v7.063c0 .673 0 1.224-.034 1.671-.035.464-.11.882-.296 1.273a3.15 3.15 0 0 1-1.32 1.42c-.364.2-.753.28-1.184.318a8 8 0 0 1-.434.025z" opacity=".5"/><path fill="${color}" d="M11 12.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5"/><path fill="${color}" fill-rule="evenodd" d="M6.419 8c0-2.828 0-4.243.817-5.121S9.37 2 12 2s3.947 0 4.764.879c.817.878.817 2.293.817 5.121v8c0 2.828 0 4.243-.817 5.121S14.631 22 12 22s-3.947 0-4.764-.879C6.42 20.243 6.42 18.828 6.42 16zm7.331 0a.75.75 0 0 0-1.5 0v3.55a2.75 2.75 0 1 0 1.5 2.45v-3.55c.375.192.8.3 1.25.3a.75.75 0 0 0 0-1.5c-.69 0-1.25-.56-1.25-1.25" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneMusicNoteSlider };
export default React.memo(BoldDuotoneMusicNoteSlider);
