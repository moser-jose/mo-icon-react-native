import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneAdhesivePlaster2: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="m20.416 12.765-9.181-9.18a5.41 5.41 0 0 0-7.65 7.65l9.18 9.18a5.41 5.41 0 1 0 7.65-7.65" opacity=".5"/><path fill="${color}" d="m19.885 12.235.53.53q.27.27.494.567l-7.577 7.578a5.5 5.5 0 0 1-.567-.494l-.53-.53zM10.668 3.09q.296.225.567.495l.53.53-7.65 7.65-.53-.53q-.27-.27-.495-.567z"/><circle cx="9.172" cy="12" r="1" fill="${color}" transform="rotate(-45 9.172 12)"/><circle cx="12" cy="14.828" r="1" fill="${color}" transform="rotate(-45 12 14.828)"/><circle cx="12" cy="9.172" r="1" fill="${color}" transform="rotate(-45 12 9.172)"/><circle cx="14.829" cy="12" r="1" fill="${color}" transform="rotate(-45 14.829 12)"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneAdhesivePlaster2 };
export default React.memo(BoldDuotoneAdhesivePlaster2);
