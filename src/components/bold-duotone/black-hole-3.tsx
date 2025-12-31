import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneBlackHole3: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M9.104 12.784a5 5 0 0 1-.176-.331c-.627-1.288-.812-2.946-.584-4.558.455-3.21 2.652-6.645 6.968-6.645a.75.75 0 0 1 0 1.5c-3.285 0-5.087 2.564-5.483 5.355a7.7 7.7 0 0 0-.04 1.868A3 3 0 0 1 12 9c.966 0 1.826.457 2.374 1.166.417.38.754.855 1.01 1.381.626 1.288.812 2.946.584 4.558-.455 3.21-2.652 6.645-6.968 6.645a.75.75 0 0 1 0-1.5c3.284 0 5.087-2.564 5.482-5.355a7.6 7.6 0 0 0-.002-2.206 3.001 3.001 0 0 1-5.376-.905" clip-rule="evenodd"/><g fill="${color}" opacity=".5"><path d="M13.25 12c0 .887-.51 1.576-1.453 2.035-.962.467-2.304.644-3.692.447C5.315 14.087 2.75 12.284 2.75 9a.75.75 0 0 0-1.5 0c0 4.316 3.436 6.513 6.645 6.968 1.612.228 3.27.042 4.558-.584 1.307-.636 2.297-1.771 2.297-3.384a.75.75 0 0 0-1.5 0"/><path d="M10.75 12.312c0-.888.51-1.577 1.453-2.035.962-.468 2.304-.644 3.692-.448 2.79.396 5.355 2.198 5.355 5.483a.75.75 0 0 0 1.5 0c0-4.316-3.436-6.513-6.645-6.968-1.612-.228-3.27-.043-4.558.584-1.307.635-2.297 1.77-2.297 3.383a.75.75 0 0 0 1.5 0"/></g></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneBlackHole3);
