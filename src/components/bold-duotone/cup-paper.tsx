import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneCupPaper: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M14.815 2h-5.63c-1.838 0-2.756 0-3.48.444a3 3 0 0 0-.355.257c-.65.545-.941 1.416-1.523 3.16l-.036.107c-.318.955-.478 1.433-.31 1.794a1 1 0 0 0 .22.303c.288.274.792.274 1.8.274h13c1.006 0 1.51 0 1.799-.274.091-.086.165-.19.218-.303.169-.361.01-.839-.31-1.794l-.035-.107C19.59 4.117 19.3 3.246 18.65 2.7a3 3 0 0 0-.356-.257C17.571 2 16.653 2 14.814 2"/><path fill="${color}" d="M10.958 22h2.086c1.649 0 2.473 0 3.036-.487s.683-1.302.922-2.934L18.5 8.34h-13L7 18.58c.238 1.632.357 2.447.92 2.934S9.31 22 10.959 22" opacity=".5"/><path fill="${color}" d="M6.769 17h10.464l.732-5H6.037z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneCupPaper);
