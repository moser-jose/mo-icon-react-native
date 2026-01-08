import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldCloudStorage: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M8.94 14.44c-.44.439-.44 1.146-.44 2.56v2c0 1.414 0 2.121.44 2.56.439.44 1.146.44 2.56.44h1c1.414 0 2.121 0 2.56-.44.44-.439.44-1.146.44-2.56v-2c0-1.414 0-2.121-.44-2.56-.439-.44-1.146-.44-2.56-.44h-1c-1.414 0-2.121 0-2.56.44M10.25 18a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75" clip-rule="evenodd"/><path fill="${color}" d="M7 18v-1.082c0-.636 0-1.254.068-1.764.078-.575.266-1.23.81-1.775.546-.545 1.201-.733 1.776-.81.51-.07 1.128-.07 1.764-.069h1.164c.636 0 1.254 0 1.764.068.575.078 1.23.266 1.775.81.545.546.733 1.201.81 1.776.07.51.07 1.128.069 1.764v1.038c2.819-.347 5-2.723 5-5.603 0-2.472-1.607-4.573-3.845-5.338C17.837 4.194 15.415 2 12.476 2 9.32 2 6.762 4.528 6.762 7.647c0 .69.125 1.35.354 1.962a4.4 4.4 0 0 0-.83-.08C3.919 9.53 2 11.426 2 13.765S3.919 18 6.286 18z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldCloudStorage };
export default React.memo(BoldCloudStorage);
