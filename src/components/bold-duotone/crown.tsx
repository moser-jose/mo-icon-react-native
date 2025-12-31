import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneCrown: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="m19.687 14.093.184-1.705c.097-.91.162-1.51.111-1.889a1.5 1.5 0 0 1-1.117-.52c-.327.202-.753.627-1.394 1.266-.495.492-.742.738-1.018.776a.83.83 0 0 1-.45-.062c-.254-.112-.424-.417-.763-1.025l-1.79-3.209c-.209-.376-.384-.69-.542-.943a2 2 0 0 1-1.815 0c-.159.253-.334.567-.543.943l-1.79 3.209c-.34.608-.51.913-.764 1.025a.83.83 0 0 1-.45.062c-.275-.038-.522-.284-1.017-.776-.641-.64-1.067-1.064-1.393-1.265a1.5 1.5 0 0 1-1.118.52c-.051.378.014.979.111 1.888l.184 1.705.089.849c.252 2.436.46 4.45 1.31 5.21.946.848 2.364.848 5.2.848h2.176c2.836 0 4.254 0 5.2-.847.85-.76 1.058-2.775 1.31-5.21q.043-.418.09-.85" clip-rule="evenodd" opacity=".5"/><path fill="${color}" d="M20 10.5a1.5 1.5 0 1 0-.018 0zM12 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4M2.5 9A1.5 1.5 0 0 0 4 10.5h.018A1.497 1.497 0 0 0 5.5 9a1.5 1.5 0 1 0-3 0m2.349 9.25a18 18 0 0 1-.246-1.5h14.794c-.07.545-.148 1.05-.246 1.5z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(BoldDuotoneCrown);
