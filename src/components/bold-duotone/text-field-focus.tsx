import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneTextFieldFocus: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M3.172 18.828C4.343 20 6.229 20 10 20l5.75-.006c2.636-.027 4.104-.191 5.078-1.166C22 17.658 22 15.771 22 12s0-5.657-1.172-6.828c-.974-.975-2.454-1.144-5.09-1.172H10C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12s0 5.657 1.172 6.828" opacity=".5"/><path fill="${color}" fill-rule="evenodd" d="M15 1.25a.75.75 0 0 1 .75.75v20a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75" clip-rule="evenodd"/><path fill="${color}" d="M6.818 7.787c.3-.037.666-.037 1.066-.037h2.232c.4 0 .766 0 1.066.037.329.041.68.137.98.405q.078.068.146.146c.268.3.364.651.405.98.037.3.037.666.037 1.066v.041a.75.75 0 0 1-1.5 0c0-.455-.001-.726-.026-.922-.024-.195-.228-.227-.228-.227-.195-.025-.466-.026-.921-.026H9.75v5.5H11a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1 0-1.5h1.25v-5.5h-.325c-.455 0-.726.001-.922.026 0 0-.203.032-.227.227-.025.196-.026.467-.026.922a.75.75 0 0 1-1.5 0v-.041c0-.4 0-.766.037-1.066.041-.329.137-.68.405-.98q.069-.078.146-.146c.3-.268.651-.364.98-.405"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneTextFieldFocus };
export default React.memo(BoldDuotoneTextFieldFocus);
