import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineIncomingCallRounded: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M10.693 4.951c-1.17-2.096-4.005-2.224-5.686-.544-.898.899-1.697 2.094-1.75 3.498-.079 2.081.459 5.536 3.88 8.958 3.422 3.422 6.877 3.96 8.958 3.88 1.405-.053 2.6-.851 3.498-1.75 1.68-1.68 1.552-4.515-.544-5.685l-1.163-.65c-1.368-.763-3.095-.437-4.227.68a.63.63 0 0 1-.337.105c-.256.012-.849-.08-1.767-.997-.919-.919-1.01-1.512-.997-1.768.01-.2.089-.316.104-.336 1.118-1.132 1.443-2.86.68-4.228zm-4.625.517c1.106-1.106 2.716-.86 3.315.214l.649 1.163c.403.723.266 1.74-.448 2.453-.07.07-.486.515-.524 1.307-.04.81.324 1.791 1.434 2.901s2.09 1.474 2.901 1.435c.792-.039 1.237-.455 1.307-.525.714-.713 1.73-.851 2.453-.447l1.163.649c1.074.599 1.32 2.208.214 3.314-.775.776-1.63 1.28-2.494 1.312-1.735.066-4.76-.362-7.84-3.442S4.69 9.697 4.756 7.962c.033-.863.537-1.719 1.312-2.494" clip-rule="evenodd"/><path fill="${color}" d="M18 9.75a.75.75 0 0 0 0-1.5h-1.19l2.72-2.72a.75.75 0 0 0-1.06-1.06l-2.72 2.72V6a.75.75 0 0 0-1.5 0v3c0 .415.336.75.75.75z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineIncomingCallRounded };
export default React.memo(OutlineIncomingCallRounded);
