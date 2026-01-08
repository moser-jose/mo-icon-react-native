import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BoldDuotonePulse2: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" d="M3.464 3.464C2 4.93 2 7.286 2 12c0 .819 0 1.566.008 2.25h3.1c.526 0 .993-.002 1.421.182s.75.522 1.112.904l.075.078 1.141 1.199a.25.25 0 0 0 .384-.026l3.653-5.043c.15-.206.304-.42.458-.579.175-.18.447-.394.842-.412s.685.17.876.333c.167.144.341.343.508.534l1.804 2.062c.486.555.59.65.703.701s.253.067.99.067h2.917A199 199 0 0 0 22 12c0-4.714 0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464" opacity=".5"/><path fill="${color}" d="M2.008 14.25c.036 3.256.246 5.076 1.456 6.286C4.93 22 7.286 22 12 22s7.071 0 8.535-1.464c1.21-1.21 1.42-3.03 1.457-6.286h-2.916c-.738 0-.878-.015-.991-.067-.113-.051-.217-.146-.703-.701l-1.804-2.062c-.167-.19-.341-.39-.508-.533-.191-.165-.482-.352-.876-.334-.395.018-.667.232-.842.412a5.5 5.5 0 0 0-.458.579l-3.653 5.043a.25.25 0 0 1-.384.026l-1.142-1.199-.074-.078c-.362-.382-.684-.72-1.112-.904-.428-.183-.895-.183-1.421-.182z"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BoldDuotonePulse2 };
export default React.memo(BoldDuotonePulse2);
