import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineTextCross: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M7.948 2.25h8.104c.899 0 1.648 0 2.242.08.628.084 1.195.27 1.65.725.456.456.642 1.023.726 1.65.08.595.08 1.345.08 2.243V7.95a.75.75 0 0 1-1.5 0V7c0-.964-.002-1.612-.067-2.095-.062-.461-.169-.659-.3-.789s-.327-.237-.788-.3c-.483-.064-1.131-.066-2.095-.066h-3.25V9a.75.75 0 0 1-1.5 0V3.75H8c-.964 0-1.612.002-2.095.067-.461.062-.659.169-.789.3s-.237.327-.3.788C4.753 5.388 4.75 6.036 4.75 7v.95a.75.75 0 1 1-1.5 0V6.948c0-.898 0-1.648.08-2.242.084-.628.27-1.195.725-1.65.456-.456 1.023-.642 1.65-.726.595-.08 1.345-.08 2.243-.08m4.052 12a.75.75 0 0 1 .75.75v5.25H17a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1 0-1.5h4.25V15a.75.75 0 0 1 .75-.75m-8-3a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineTextCross);
