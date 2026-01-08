import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldUserPlusRounded: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><circle cx="12" cy="6" r="4" fill="${color}"/><path fill="${color}" fill-rule="evenodd" d="M16.5 22c-1.65 0-2.475 0-2.987-.513C13 20.975 13 20.15 13 18.5s0-2.475.513-2.987C14.025 15 14.85 15 16.5 15s2.475 0 2.987.513C20 16.025 20 16.85 20 18.5s0 2.475-.513 2.987C18.975 22 18.15 22 16.5 22m.583-5.056a.583.583 0 1 0-1.166 0v.973h-.973a.583.583 0 1 0 0 1.166h.973v.973a.583.583 0 1 0 1.166 0v-.973h.973a.583.583 0 1 0 0-1.166h-.973z" clip-rule="evenodd"/><path fill="${color}" d="M15.415 13.507A11.3 11.3 0 0 0 12 13c-3.866 0-7 1.79-7 4 0 2.14 2.942 3.888 6.642 3.995a5 5 0 0 1-.064-.375c-.078-.578-.078-1.283-.078-2.034v-.172c0-.75 0-1.456.078-2.034.086-.643.293-1.347.874-1.928.581-.582 1.285-.788 1.928-.875a10 10 0 0 1 1.035-.07"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldUserPlusRounded };
export default React.memo(BoldUserPlusRounded);
