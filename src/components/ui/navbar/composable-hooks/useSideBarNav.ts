// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//  COMPONENTS > UI > NAVBAR > COMPOSABLES >>
//  USE_SIDEBAR_NAV.TS
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import { PrimitiveAtom, useAtom } from 'jotai/index';
import { useRef } from 'react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

type UseHookProps = {
  state: PrimitiveAtom<boolean>;
  onClose: () => void;
};
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

export const useSideBarNav = ({ state, onClose }: UseHookProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isVisible, updateIsVisible] = useAtom(state);

  const handleClose = () => {
    updateIsVisible(false);
    onClose();
  };

  const sidebarNavContainerClasses = twMerge(
    clsx(
      `
    fixed inset-0 z-40 bg-black transition-opacity duration-300
    ${isVisible ? 'bg-opacity-50' : 'pointer-events-none bg-opacity-0'}
  `,
    ),
  );

  const sidebarClasses = `
    fixed bottom-0 left-0 top-0 z-50 transform bg-white
    transition-transform duration-300 mobile:w-[85%] tablet:w-[400px]
    dark:bg-black ${isVisible ? 'translate-x-0' : '-translate-x-full'}
  `;

  return {
    dropdownRef,
    handleClose,
    sidebarNavContainerClasses,
    sidebarClasses,
    setIsVisible: updateIsVisible,
  };
};
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
