import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldHandShake: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M4.414 17.859a.75.75 0 0 1 1.026.27c.826 1.418 2.09 2.49 3.65 3.186a.75.75 0 0 1-.612 1.37c-1.811-.809-3.331-2.08-4.334-3.8a.75.75 0 0 1 .27-1.026M18.906 3.922c-1.014-1.036-2.46-1.417-3.875-1.015a.75.75 0 0 1-.411-1.442c1.938-.552 3.955-.025 5.358 1.408a.75.75 0 0 1-1.072 1.049m-7.716-.614c-.214-.367-.838-.59-1.471-.227-.632.36-.743.997-.532 1.357l2.525 4.332a.75.75 0 1 1-1.296.755L7.05 3.75c-.214-.367-.838-.59-1.472-.227-.63.36-.742.997-.532 1.357l3.789 6.497a.75.75 0 1 1-1.296.756L5.854 9.245c-.214-.367-.838-.59-1.471-.227-.632.36-.743.996-.532 1.357l3.788 6.497c1.61 2.759 5.58 3.654 8.947 1.73 3.364-1.923 4.56-5.764 2.955-8.517l-2.526-4.331c-.214-.367-.838-.59-1.471-.228-.632.361-.743.997-.532 1.358l1.683 2.887a.75.75 0 0 1-.275 1.03c-1.543.88-2.016 2.585-1.34 3.743a.75.75 0 1 1-1.296.756c-.913-1.565-.544-3.45.635-4.782.33-.372.442-.914.192-1.344z" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldHandShake };
export default React.memo(BoldHandShake);
