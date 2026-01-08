import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenPinList: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M13.632 8.223c1.53 1.53 2.295 2.295 2.294 3.125a2 2 0 0 1-.162.788c-.328.762-1.333 1.162-3.344 1.962l-.145.058c-.57.227-.855.34-1.085.522a2 2 0 0 0-.444.492c-.158.248-.242.543-.41 1.133-.259.915-.389 1.373-.666 1.576a1 1 0 0 1-.714.185c-.341-.042-.678-.378-1.35-1.05l-3.13-3.131c-.673-.673-1.01-1.01-1.052-1.35a1 1 0 0 1 .186-.715c.203-.277.66-.407 1.576-.666.59-.168.885-.252 1.132-.41.188-.119.354-.27.492-.444.182-.23.296-.514.523-1.084l.057-.146c.8-2.01 1.2-3.016 1.963-3.343a2 2 0 0 1 .788-.162c.362 0 .712.145 1.118.437M3.347 18.142l2.694-2.694M22 8h-5m5 4.5h-4m4 4.5h-1m-8 0h4"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenPinList };
export default React.memo(BrokenPinList);
