import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldNotebookSquare: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M3.172 2.172C2 3.343 2 5.229 2 9v4c0 3.771 0 5.657 1.172 6.828S6.229 21 10 21h4c3.771 0 5.657 0 6.828-1.172S22 16.771 22 13V9c0-3.771 0-5.657-1.172-6.828S17.771 1 14 1h-4C6.229 1 4.343 1 3.172 2.172m9.335 13.55-.007.004V7.283l.022-.013c.553-.32 1.447-.796 2.178-1 .54-.149 1.24-.218 1.857-.248.805-.04 1.443.623 1.443 1.43v5.459c0 .833-.68 1.504-1.51 1.566-.506.038-1.052.101-1.49.208-.837.205-1.883.716-2.493 1.037M6 7.496v5.415c0 .833.68 1.504 1.51 1.566.506.038 1.052.101 1.49.208.837.205 1.883.716 2.493 1.037l.007.004V7.311l-.035-.018C10.85 6.971 9.824 6.473 9 6.271c-.444-.109-1-.173-1.513-.21C6.665 6 6 6.673 6 7.496" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldNotebookSquare);
