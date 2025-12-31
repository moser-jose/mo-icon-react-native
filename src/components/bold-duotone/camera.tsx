import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneCamera: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M9.778 21h4.444c3.121 0 4.682 0 5.803-.735a4.4 4.4 0 0 0 1.226-1.204c.749-1.1.749-2.633.749-5.697s0-4.597-.749-5.697a4.4 4.4 0 0 0-1.226-1.204c-.72-.473-1.622-.642-3.003-.702-.659 0-1.226-.49-1.355-1.125A2.064 2.064 0 0 0 13.634 3h-3.268c-.988 0-1.839.685-2.033 1.636-.129.635-.696 1.125-1.355 1.125-1.38.06-2.282.23-3.003.702A4.4 4.4 0 0 0 2.75 7.667C2 8.767 2 10.299 2 13.364s0 4.596.749 5.697c.324.476.74.885 1.226 1.204C5.096 21 6.657 21 9.778 21" opacity=".5"/><path fill="${color}" d="M17.556 9.273a.826.826 0 0 0-.834.819c0 .451.373.818.834.818h1.11a.826.826 0 0 0 .834-.818.826.826 0 0 0-.833-.819z"/><path fill="${color}" fill-rule="evenodd" d="M12 9.273c-2.301 0-4.166 1.832-4.166 4.091S9.699 17.455 12 17.455s4.167-1.831 4.167-4.09S14.3 9.272 12 9.272m0 1.637c-1.38 0-2.5 1.099-2.5 2.454s1.12 2.455 2.5 2.455 2.5-1.099 2.5-2.455c0-1.355-1.12-2.454-2.5-2.454" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneCamera);
