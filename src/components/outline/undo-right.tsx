import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineUndoRight: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M16.47 3.47a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H9c-.948 0-1.61 0-2.122.047-.503.046-.788.13-1.003.254a2.25 2.25 0 0 0-.824.824c-.124.215-.208.5-.254 1.003-.046.512-.047 1.174-.047 2.122s0 1.61.047 2.122c.046.502.13.788.254 1.003.198.342.482.626.824.824.215.124.5.208 1.003.254.512.046 1.174.047 2.122.047h7a.75.75 0 0 1 0 1.5H8.964c-.904 0-1.633 0-2.222-.053-.606-.055-1.136-.172-1.617-.45a3.75 3.75 0 0 1-1.373-1.372c-.277-.481-.394-1.011-.449-1.617-.053-.589-.053-1.318-.053-2.222v-.072c0-.904 0-1.633.053-2.222.055-.606.172-1.136.45-1.617a3.75 3.75 0 0 1 1.372-1.373c.481-.277 1.011-.394 1.617-.449.589-.053 1.318-.053 2.222-.053h9.225l-1.72-1.72a.75.75 0 0 1 0-1.06" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export default React.memo(OutlineUndoRight);
