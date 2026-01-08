import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const BrokenStarShine: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path stroke="${color}" stroke-linecap="round" stroke-width="1.5" d="M12 2v2m0 16v2M2 12h2m16 0h2M6 18l.343-.343M17.657 6.343 18 6m0 12-.343-.343M6.343 6.343 6 6m9.265 8.627c.127 1.308.19 1.962-.193 2.253-.383.29-.958.026-2.11-.504l-.298-.138c-.327-.15-.49-.226-.664-.226-.173 0-.337.076-.664.226l-.298.138c-1.152.53-1.727.795-2.11.504-.383-.29-.32-.945-.193-2.253l.032-.338c.037-.372.055-.558 0-.73-.053-.172-.172-.312-.41-.59l-.217-.254c-.838-.98-1.258-1.47-1.111-1.941.106-.34.458-.508 1.111-.68m2.437-1.39C11.21 7.568 11.527 7 12 7s.79.568 1.423 1.704l.164.294c.18.323.27.484.41.59.14.107.316.147.665.226l.318.072c1.23.278 1.845.417 1.991.888.106.34-.083.69-.512 1.226"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { BrokenStarShine };
export default React.memo(BrokenStarShine);
