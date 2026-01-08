import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneColourTuneing: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M3.172 3.172C2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14v-4c0-3.771 0-5.657-1.172-6.828S17.771 2 14 2h-4C6.229 2 4.343 2 3.172 3.172" opacity=".5"/><path fill="${color}" d="M7.913 8.717a3.8 3.8 0 0 1 .834-1.483c.36-.383.65-.484.776-.484.305 0 .716.178 1.09 1.016.379.849.637 2.228.637 4.234 0 2.099.265 3.72.767 4.845.507 1.135 1.335 1.905 2.46 1.905.724 0 1.384-.441 1.868-.955a5.3 5.3 0 0 0 1.178-2.078.75.75 0 1 0-1.436-.434 3.8 3.8 0 0 1-.834 1.483c-.36.383-.65.484-.776.484-.305 0-.716-.178-1.09-1.016-.379-.849-.637-2.228-.637-4.234 0-2.099-.265-3.72-.767-4.845-.507-1.135-1.335-1.905-2.46-1.905-.724 0-1.384.441-1.868.955a5.3 5.3 0 0 0-1.178 2.078.75.75 0 0 0 1.436.434"/><path fill="${color}" d="M6 11.25a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zm8.5 0a.75.75 0 0 0 0 1.5H18a.75.75 0 0 0 0-1.5z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneColourTuneing };
export default React.memo(BoldDuotoneColourTuneing);
