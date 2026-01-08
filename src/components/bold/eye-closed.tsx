import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldEyeClosed: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M1.606 6.081a1 1 0 0 1 1.313.525L2 7l.92-.394q0-.002 0 0l.003.008.021.046.094.194c.086.172.219.424.4.729.364.611.917 1.425 1.67 2.237a12 12 0 0 0 .59.591c1.484 1.39 3.555 2.59 6.303 2.59a8.7 8.7 0 0 0 3.22-.603c1.227-.482 2.254-1.209 3.096-1.998a13 13 0 0 0 2.733-3.724l.027-.058.005-.012a1 1 0 0 1 1.838.788L22 7l.92.394-.003.005-.004.008-.011.026-.04.088a14 14 0 0 1-.741 1.348 15.4 15.4 0 0 1-1.711 2.255l.797.798a1 1 0 0 1-1.414 1.414l-.84-.84a12 12 0 0 1-1.897 1.256l.782 1.203a1 1 0 1 1-1.676 1.09l-.986-1.514c-.679.208-1.404.356-2.176.425V16.5a1 1 0 0 1-2 0v-1.544c-.775-.07-1.5-.217-2.177-.425l-.985 1.515a1 1 0 1 1-1.676-1.091l.782-1.203c-.7-.37-1.332-.8-1.897-1.256l-.84.84a1 1 0 0 1-1.414-1.414l.797-.798a15.4 15.4 0 0 1-1.87-2.518 14 14 0 0 1-.591-1.107l-.033-.071-.01-.022-.002-.006-.001-.003v-.001L2 7l-.919.395a1 1 0 0 1 .525-1.314" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldEyeClosed };
export default React.memo(BoldEyeClosed);
