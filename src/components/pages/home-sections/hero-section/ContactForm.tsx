//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//    COMPONENTS > PAGES > HOME-SECTIONS >
//    HERO-FORM-SECTION >> CONTACT-FORM.TSX
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//                       IMPORTS
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import { FunctionComponent, Fragment } from 'react';
import { FaRegPaperPlane } from 'react-icons/fa';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import { atom, useAtom } from 'jotai';
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

export type FormFieldOptions = {
  type: string;
  placeholder: string;
  required: boolean;
  minLength?: number;
  pattern?: string;
  title?: string;
  autoComplete?: string;
};

type ContactFormProps = {
  formFieldOpts: Array<FormFieldOptions>;
};

type ServicesOptions =
  | 'Tire change'
  | 'Gas fuel delivery'
  | 'Jump start'
  | 'Lockout'
  | 'Diesel Fuel Delivery';
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

// Atoms for state management
const selectedServicesAtom = atom<string[]>([]);

const totalPriceAtom = atom<string>((get) => {
  const selectedServices = get(selectedServicesAtom) as ServicesOptions[]; // Ensure selectedServices is typed as ServicesOptions[]
  const priceMap: Record<ServicesOptions, number> = {
    'Tire change': 85,
    'Gas fuel delivery': 45,
    'Jump start': 65,
    Lockout: 65,
    'Diesel Fuel Delivery': 70,
  };

  const total = selectedServices.reduce((total, service) => {
    // Ensure the service is a valid key of ServicesOptions
    return total + (priceMap[service] || 0);
  }, 0);

  // Format the total as currency
  const formattedPriceTotal = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(total);

  return formattedPriceTotal;
});
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

export const ContactForm: FunctionComponent<ContactFormProps> = ({ formFieldOpts }) => {
  // ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
  const [selectedServices, setSelectedServices] = useAtom(selectedServicesAtom);
  const [totalPrice] = useAtom(totalPriceAtom);

  const services: Array<ServicesOptions> = [
    'Tire change',
    'Gas fuel delivery',
    'Jump start',
    'Lockout',
    'Diesel Fuel Delivery',
  ];
  // ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

  const handleServiceToggle = (service: string) => {
    setSelectedServices(
      (prevServices) =>
        prevServices.includes(service)
          ? prevServices.filter((s: string) => s !== service) // Deselect service
          : [...prevServices, service], // Select service
    );
  };
  // ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
  return (
    <Fragment>
      {/*  ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞  */}
      <form className='mt-8 cursor-pointer space-y-6 rounded-lg bg-white p-6 shadow-md'>
        {/* Service Options & Price at the Top */}
        <div className='space-y-4'>
          <p className='text-sm font-semibold text-black'>I'm interested in...</p>
          <div className='space-y-2'>
            {services.map((service: ServicesOptions) => (
              <button
                key={service}
                type='button'
                onClick={() => handleServiceToggle(service)}
                className={twMerge(
                  clsx(
                    'w-full rounded-lg border px-4 py-2 text-sm font-semibold transition-all duration-200',
                    selectedServices.includes(service)
                      ? 'border-reggie-orange bg-reggie-orange text-white' // Selected State
                      : 'border-gray-300 bg-gray-200 text-black hover:bg-gray-300 hover:text-black', // Unselected State
                  ),
                )}
              >
                {service}
              </button>
            ))}
          </div>

          {/* Dynamic Price */}
          <div className='mt-2 text-center text-lg font-bold'>
            {totalPrice !== '$0.00' ? (
              <p>
                <span className='text-black'>Total Estimated Price: </span>
                <span className='text-reggie-orange'>{totalPrice}</span>
              </p>
            ) : (
              <p className='text-gray-600'>Select one or more services to see the price.</p>
            )}
          </div>
          <p className='text-center font-bold text-reggie-orange'>
            All services do not include taxes plus mileage.
          </p>
        </div>

        {/* Input Fields */}
        <div className='space-y-4'>
          {formFieldOpts.map((field, index) => (
            <input
              key={index}
              {...field}
              className='w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-black shadow-inner'
            />
          ))}
        </div>

        {/* Textarea */}
        <textarea
          placeholder='Input your message here...'
          required
          minLength={10}
          rows={6}
          className='w-full rounded-lg border border-gray-300 px-4 pt-3 text-sm text-black shadow-inner'
        />

        {/* Submit Button */}
        <button
          type='submit'
          className={twMerge(
            clsx(
              '!mt-6 flex w-full items-center justify-center rounded-lg',
              'bg-thumbsup-dark px-4 py-3 text-sm tracking-wide',
              'text-white hover:bg-reggie-orange',
            ),
          )}
        >
          <FaRegPaperPlane className='mr-2 w-6 font-semibold' />
          Send Message
        </button>
      </form>
      {/*  ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞  */}
    </Fragment>
  );
};
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
