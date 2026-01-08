import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneSpedometerLow: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M13.81 14.38a3 3 0 0 0 0-4.248 3.01 3.01 0 0 0-4.254 0c-.447.446-.759 1.373-.974 2.35-.322 1.46-.483 2.19.1 2.772.582.581 1.314.42 2.776.1.978-.216 1.906-.527 2.353-.974"/><path fill="${color}" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10" opacity=".5"/><path fill="${color}" d="M4.42 5.476q.49-.566 1.057-1.055l.053.048 1.5 1.5A.75.75 0 0 1 5.97 7.03l-1.5-1.5zM2.028 12.75a10 10 0 0 1 0-1.5H4a.75.75 0 0 1 0 1.5zm3.448 6.83a10 10 0 0 1-1.055-1.056l.049-.055 1.5-1.5a.75.75 0 0 1 1.06 1.061l-1.5 1.5zm14.104-1.056q-.49.566-1.056 1.055l-.054-.049-1.5-1.5a.75.75 0 1 1 1.06-1.06l1.5 1.5zm2.392-7.274a10 10 0 0 1 0 1.5H20a.75.75 0 0 1 0-1.5zm-3.448-6.83q.566.49 1.055 1.056l-.049.054-1.5 1.5a.75.75 0 1 1-1.06-1.06l1.5-1.5zM12.75 2.028V4a.75.75 0 0 1-1.5 0V2.028a10 10 0 0 1 1.5 0"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneSpedometerLow };
export default React.memo(BoldDuotoneSpedometerLow);
