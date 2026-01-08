import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlinePhoneRounded: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M6.007 3.407c1.68-1.68 4.516-1.552 5.686.544l.649 1.163c.763 1.369.438 3.096-.68 4.228a.63.63 0 0 0-.104.336c-.013.256.078.85.997 1.768.918.918 1.51 1.009 1.767.997a.63.63 0 0 0 .337-.104c1.131-1.119 2.859-1.444 4.227-.68l1.163.649c2.096 1.17 2.224 4.005.544 5.685-.899.899-2.093 1.697-3.498 1.75-2.08.08-5.536-.458-8.958-3.88-3.421-3.422-3.959-6.877-3.88-8.958.053-1.404.852-2.599 1.75-3.498m4.376 1.275c-.6-1.073-2.209-1.32-3.315-.214-.775.775-1.28 1.631-1.312 2.494-.066 1.735.363 4.761 3.442 7.84 3.08 3.08 6.105 3.508 7.84 3.442.863-.032 1.72-.536 2.494-1.312 1.106-1.105.86-2.715-.214-3.314l-1.163-.65c-.723-.403-1.74-.265-2.452.448-.07.07-.516.486-1.308.525-.81.04-1.791-.325-2.9-1.435-1.111-1.11-1.475-2.091-1.435-2.901.038-.792.455-1.237.524-1.307.714-.713.851-1.73.448-2.453z" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlinePhoneRounded };
export default React.memo(OutlinePhoneRounded);
