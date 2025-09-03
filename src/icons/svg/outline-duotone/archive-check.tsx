import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneArchiveCheck: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M20.5 7v6c0 3.771 0 5.657-1.172 6.828S16.271 21 12.5 21h-1c-3.771 0-5.657 0-6.828-1.172S3.5 16.771 3.5 13V7" opacity=".5"/><path stroke="${color}" stroke-width="1.5" d="M2 5c0-.943 0-1.414.293-1.707S3.057 3 4 3h16c.943 0 1.414 0 1.707.293S22 4.057 22 5s0 1.414-.293 1.707S20.943 7 20 7H4c-.943 0-1.414 0-1.707-.293S2 5.943 2 5Z"/><path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9.5 13.4 1.429 1.6 3.571-4"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineDuotoneArchiveCheck);
