import React from 'react';
import { SvgXml } from 'react-native-svg';

export type IconProps = Omit<React.ComponentProps<typeof SvgXml>, 'width' | 'height' | 'xml'> & {
  size?: number;
  color?: string;
};

const OutlineEndCallRounded: React.FC<IconProps> = ({ size = 24, color = '#1C274C', ...props }) => {
  const xml = `<svg fill="none" viewBox="0 0 24 24"><path fill="${color}" fill-rule="evenodd" d="M12 7.75c-4.565 0-7.127 1.926-8.367 3.263-.622.671-.883 1.687-.883 2.837 0 1.654 1.39 2.684 2.653 2.326l1.34-.38c.849-.241 1.507-1.11 1.507-2.177 0-.099.02-.726.57-1.332.56-.619 1.544-1.073 3.18-1.073s2.62.454 3.18 1.073c.55.606.57 1.233.57 1.331 0 1.069.658 1.937 1.508 2.178l1.34.38c1.262.358 2.652-.672 2.652-2.326 0-1.15-.26-2.166-.883-2.837C19.127 9.676 16.565 7.75 12 7.75M2.533 9.993C4.008 8.403 6.95 6.25 12 6.25s7.992 2.152 9.467 3.743c.99 1.069 1.283 2.532 1.283 3.857 0 2.466-2.173 4.446-4.562 3.769l-1.34-.38c-1.56-.443-2.589-1.947-2.598-3.599a.7.7 0 0 0-.18-.345c-.19-.208-.706-.581-2.07-.581s-1.88.373-2.07.58a.7.7 0 0 0-.18.346c-.01 1.652-1.037 3.156-2.598 3.599l-1.34.38c-2.39.677-4.562-1.303-4.562-3.769 0-1.325.292-2.788 1.283-3.857" clip-rule="evenodd"/></svg>`;
  return <SvgXml xml={xml} width={size} height={size} {...props} />;
};

export { OutlineEndCallRounded };
export default React.memo(OutlineEndCallRounded);
