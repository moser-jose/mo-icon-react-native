import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineDuotoneTransmission: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-width="1.5" d="M6 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm0 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm0-16a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/><path fill="${color}" d="M4.75 6a.75.75 0 0 0-1.5 0zm-1.5 12a.75.75 0 0 0 1.5 0zm9.5-12a.75.75 0 0 0-1.5 0zm-1.5 12a.75.75 0 0 0 1.5 0zm9.5-12a.75.75 0 0 0-1.5 0zM4 11.25a.75.75 0 0 0 0 1.5zm15.414.164-.53-.53zM3.25 6v12h1.5V6zm8 0v12h1.5V6zm8 0v2h1.5V6zM16 11.25H4v1.5h12zM19.25 8c0 .964-.002 1.612-.067 2.095-.062.461-.169.659-.3.789l1.062 1.06c.455-.455.64-1.022.725-1.65.082-.606.08-1.372.08-2.294zM16 12.75c.922 0 1.688.002 2.294-.08.628-.084 1.195-.27 1.65-.726l-1.06-1.06c-.13.13-.328.237-.79.3-.482.064-1.13.066-2.094.066z" opacity=".5"/><path fill="${color}" d="M18 15v-.75a.75.75 0 0 0-.75.75zm-.75 7a.75.75 0 0 0 1.5 0zm4.11.392a.75.75 0 1 0 1.28-.784zM18 15.75h2.286v-1.5H18zm.75 2.75V15h-1.5v3.5zm2.5-1.75c0 .567-.446 1-.964 1v1.5c1.375 0 2.464-1.134 2.464-2.5zm-.964-1c.518 0 .964.433.964 1h1.5c0-1.366-1.089-2.5-2.464-2.5zm0 2h-.429v1.5h.429zm-.429 0H18v1.5h1.857zm-.64 1.142 2.143 3.5 1.28-.784-2.143-3.5zM17.25 18.5V22h1.5v-3.5z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineDuotoneTransmission };
export default React.memo(OutlineDuotoneTransmission);
