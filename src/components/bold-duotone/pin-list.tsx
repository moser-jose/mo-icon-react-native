import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotonePinList: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="m12.95 8.595-.363-.357C11.07 6.746 10.31 5.999 9.487 6c-.27 0-.535.054-.782.158-.757.32-1.154 1.3-1.948 3.261l-.057.142c-.225.556-.338.834-.519 1.058a2 2 0 0 1-.488.433c-.245.154-.538.236-1.124.4-.908.252-1.362.38-1.564.65a.96.96 0 0 0-.184.696c.042.333.376.66 1.043 1.317l1.017 1 1.045 1.026.018.018 1.027 1.009c.667.656 1.001.984 1.34 1.025.25.031.505-.034.709-.18.275-.199.403-.645.661-1.538.166-.575.25-.863.406-1.104q.18-.276.44-.48c.23-.178.512-.289 1.078-.51l.144-.056c1.995-.78 2.993-1.17 3.318-1.914a1.9 1.9 0 0 0 .16-.768c.002-.81-.758-1.556-2.276-3.048" clip-rule="evenodd"/><path fill="${color}" d="m3.27 18.786 2.674-2.627-.018-.018-1.045-1.027-2.663 2.637a.723.723 0 0 0 0 1.035.753.753 0 0 0 1.053 0" opacity=".5"/><path fill="${color}" fill-rule="evenodd" d="M22 8.377a.74.74 0 0 1-.744.731h-4.962a.74.74 0 0 1-.744-.731c0-.404.333-.731.744-.731h4.962c.411 0 .744.327.744.731m0 4.389a.74.74 0 0 1-.744.731h-3.97a.74.74 0 0 1-.744-.731c0-.404.333-.732.744-.732h3.97c.411 0 .744.328.744.732m0 4.389a.74.74 0 0 1-.744.731h-8.932a.74.74 0 0 1-.744-.731c0-.404.333-.732.744-.732h8.932c.411 0 .744.328.744.732" clip-rule="evenodd" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotonePinList };
export default React.memo(BoldDuotonePinList);
