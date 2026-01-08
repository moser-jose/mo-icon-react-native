import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotoneFerrisWheel: React.FC<IconProps> = ({
  size = 24,
  color = '#1C274C',
  ...props
}) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M9.25 11a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0" clip-rule="evenodd" opacity=".5"/><path fill="${color}" d="m9.821 12.678-4.976 8.958a.75.75 0 0 0 1.31.728l4.883-8.787a2.76 2.76 0 0 1-1.217-.9m3.142.9 4.882 8.787a.75.75 0 0 0 1.31-.728l-4.976-8.958c-.31.403-.731.717-1.216.899M12 5.25a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5M2.75 7.5a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0M19.5 5.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m0 8.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m-15 0a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m5.75 5.25a1.75 1.75 0 1 0 3.5 0 1.75 1.75 0 0 0-3.5 0"/><path fill="${color}" fill-rule="evenodd" d="M10.637 4.598a1.74 1.74 0 0 1-.335-1.525l-.098.052L5.41 5.739a4 4 0 0 0-.241.144c.491.203.87.624 1.016 1.142zM4.955 9.19a1.75 1.75 0 0 1-1.498-.285l-.002.126v4.937q0 .301.047.594a1.74 1.74 0 0 1 1.48-.245 2 2 0 0 1-.027-.349zm1.295 6.82a1.75 1.75 0 0 1-.653 1.353l4.607 2.512.098.051a1.75 1.75 0 0 1 .335-1.524zm7.113 2.392a1.74 1.74 0 0 1 .335 1.524l.096-.051 4.608-2.513a1.75 1.75 0 0 1-.652-1.353zm5.653-4.085a1.75 1.75 0 0 1 1.48.244q.048-.291.048-.593V9.032q0-.063-.003-.125a1.74 1.74 0 0 1-1.497.283v4.78q0 .176-.028.348m-1.2-7.292a1.75 1.75 0 0 1 1.015-1.143 4 4 0 0 0-.242-.144l-4.794-2.614-.097-.05a1.75 1.75 0 0 1-.335 1.523z" clip-rule="evenodd" opacity=".5"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotoneFerrisWheel };
export default React.memo(BoldDuotoneFerrisWheel);
