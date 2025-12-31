import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineBill: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M1.25 2A.75.75 0 0 1 2 1.25h20a.75.75 0 0 1 0 1.5h-1.25v9.676c0 1.187.001 2.013-.335 2.753-.337.74-.958 1.284-1.852 2.065l-.118.103-2.038 1.782c-.91.795-1.645 1.438-2.296 1.876-.678.456-1.341.745-2.111.745s-1.433-.289-2.111-.745c-.651-.438-1.387-1.081-2.296-1.876l-2.038-1.782-.118-.103c-.894-.781-1.516-1.324-1.852-2.065s-.336-1.566-.335-2.753V2.75H2A.75.75 0 0 1 1.25 2m3.5.75v9.52c0 1.407.016 1.88.201 2.289.185.408.532.732 1.592 1.659l2 1.748c.956.836 1.62 1.416 2.184 1.794.545.367.915.49 1.273.49s.728-.122 1.274-.49c.563-.378 1.227-.958 2.183-1.794l2-1.748c1.06-.927 1.407-1.25 1.592-1.659.185-.408.201-.882.201-2.289V2.75zm3 5.25a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7A.75.75 0 0 1 7.75 8m0 5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineBill);
