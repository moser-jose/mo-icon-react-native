import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineWineglass: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M4.25 4.895A2.645 2.645 0 0 1 6.895 2.25h10.21a2.645 2.645 0 0 1 2.645 2.645V8a7.75 7.75 0 0 1-7 7.714v4.536h3a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5h3v-4.536A7.75 7.75 0 0 1 4.25 8zM6.895 3.75c-.632 0-1.145.513-1.145 1.145v3.193c.203-.078.45-.17.725-.265.708-.243 1.663-.521 2.479-.572 1.469-.09 2.528.555 3.389 1.08l.047.028c.898.547 1.594.952 2.564.892.603-.037 1.398-.258 2.085-.493a18 18 0 0 0 1.14-.437l.016-.006.003-.002.045-.018A6 6 0 0 0 18.25 8V4.895c0-.632-.512-1.145-1.145-1.145zm11.014 6.29a6.253 6.253 0 0 1-11.947-.42l.164-.068c.208-.083.5-.195.835-.31.687-.235 1.482-.456 2.085-.493.97-.06 1.666.345 2.564.892l.047.028c.86.524 1.92 1.17 3.389 1.08.816-.05 1.77-.33 2.48-.572q.202-.07.383-.137" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineWineglass };
export default React.memo(OutlineWineglass);
