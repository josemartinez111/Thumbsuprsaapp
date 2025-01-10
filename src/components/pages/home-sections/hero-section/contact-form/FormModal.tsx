//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//    COMPONENTS:HERO-SECTION:CONTACT-FORM:FORM-MODAL.TSX
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//                       IMPORTS
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import { FunctionComponent, Fragment, useRef } from 'react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import { ComputerError, thumbsupTextLogoCombo } from '../../../../../assets';
import { useOnMounted, useOnUnmounted } from '../../../../../lib';
import { PhoneNumberBanner, FWTImage } from '../../../../../components';
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

type StatusState = 'success' | 'error';

type ModalProps = {
  status: StatusState;
  message: string;
  onClose: () => void;
};

type ModalContentOptions = {
  header: string;
  image: string;
  buttonText: string;
};

// Store shared modal data for each status
const modalContent: Record<StatusState, ModalContentOptions> = {
  success: {
    header: 'Success!',
    image: thumbsupTextLogoCombo,
    buttonText: 'Close',
  },
  error: {
    header: 'Error!',
    image: ComputerError,
    buttonText: 'Try Again',
  },
};
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

export const FormModal: FunctionComponent<ModalProps> = ({ status, message, onClose }) => {
  // ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
  const modalContentRef = useRef<HTMLDivElement>(null);
  const { header, image, buttonText } = modalContent[status];
  // ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

  const handleOutsideClick = (e: MouseEvent) => {
    if (modalContentRef.current && !modalContentRef.current.contains(e.target as Node)) {
      onClose(); // Trigger modal close handler
    }
  };

  // Correctly call `useOnMounted` to add the event listener
  useOnMounted(() => {
    document.addEventListener('mousedown', handleOutsideClick);
  });

  // Correctly call `useOnUnmounted` to remove the event listener
  useOnUnmounted(() => {
    document.removeEventListener('mousedown', handleOutsideClick);
  });
  // ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
  return (
    <Fragment>
      {/*  ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞  */}
      {/* Modal Overlay */}
      <div className='fixed inset-0 isolate flex items-center justify-center bg-black bg-opacity-50'>
        <div
          ref={modalContentRef} // Attach the ref to modal content
          className='relative w-11/12 max-w-lg rounded-lg bg-white p-6 shadow-lg'
        >
          <div className='mb-4 text-center'>
            <h2
              className={twMerge(
                clsx(
                  'text-2xl font-bold',
                  status === 'success' ? 'text-green-500' : 'text-red-500',
                ),
              )}
            >
              {header}
            </h2>
          </div>

          {/* IMAGE ∞∞∞ */}
          <div className='mb-4 flex justify-center'>
            <FWTImage src={image} alt={header} className='h-56 w-56 rounded object-contain' />
          </div>

          <p className='mb-6 text-center font-audiowide font-bold text-gray-700'>{message}</p>

          {/* PHONE NUMBER BANNER COMPONENT ∞∞∞ */}
          <PhoneNumberBanner
            href='9787733995'
            phoneNumber='978-773-3995'
            className='text-black'
          />

          <div className='text-center'>
            <button
              onClick={onClose} // Trigger the same close handler
              className={twMerge(
                clsx(
                  'rounded-lg px-6 py-3 text-white',
                  status === 'success'
                    ? 'bg-green-500 hover:bg-green-600'
                    : 'bg-red-500 hover:bg-red-600',
                ),
              )}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
      {/*  ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞  */}
    </Fragment>
  );
};
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
