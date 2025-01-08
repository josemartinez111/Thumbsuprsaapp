//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//    COMPONENTS > PAGES > HOME-SECTIONS >
//    HERO-FORM-SECTION >> CONTACT-FORM.TSX
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//                       IMPORTS
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import { FunctionComponent, Fragment, FormEvent, ChangeEvent } from 'react';
import { FaRegPaperPlane } from 'react-icons/fa';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import { atom, useAtom } from 'jotai';
import { handleSubmitAction } from '../../../../apis';
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

export type FormFieldOptions = {
  name: string;
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

// Define a unified service configuration type
type ServiceConfig = {
  displayName: string; // Name displayed to users
  backendKey: string; // Backend-compatible enum value
  price: number; // Price for the service
};

// Define the services as a Record
const servicesConfig: Record<string, ServiceConfig> = {
  'Tire change': {
    displayName: 'Tire change',
    backendKey: 'TireChange',
    price: 85,
  },
  'Gas fuel delivery': {
    displayName: 'Gas fuel delivery',
    backendKey: 'FuelDelivery',
    price: 45,
  },
  'Jump start': {
    displayName: 'Jump start',
    backendKey: 'JumpStart',
    price: 65,
  },
  Lockout: {
    displayName: 'Lockout',
    backendKey: 'Lockout',
    price: 65,
  },
  'Diesel Fuel Delivery': {
    displayName: 'Diesel Fuel Delivery',
    backendKey: 'DieselFuelDelivery',
    price: 70,
  },
};

// Dynamically infer service options from the keys of the servicesConfig
type ServicesOptions = keyof typeof servicesConfig;
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

const totalPriceAtom = atom<string>((get) => {
  const selectedServices = get(selectedServicesAtom) as ServicesOptions[];

  const total = selectedServices.reduce((total, service) => {
    return total + (servicesConfig[service]?.price || 0);
  }, 0);

  // Format the total as currency
  const formattedPriceTotal = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(total);

  return formattedPriceTotal;
});

// Atoms for state management
const selectedServicesAtom = atom<string[]>([]);
const formStatusAtom = atom<string | null>(null);
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

export const ContactForm: FunctionComponent<ContactFormProps> = ({ formFieldOpts }) => {
  // ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
  const [selectedServices, setSelectedServices] = useAtom(selectedServicesAtom);
  const [totalPrice] = useAtom(totalPriceAtom);
  const [formStatus, setFormStatus] = useAtom(formStatusAtom);

  // Export services as an array for easy iteration in the UI
  const services = Object.keys(servicesConfig) as Array<ServicesOptions>;
  // ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

  const handleServiceToggle = (service: string) => {
    setSelectedServices(
      (prevServices) =>
        prevServices.includes(service)
          ? prevServices.filter((s) => s !== service) // Deselect service
          : [...prevServices, service], // Select service
    );
  };

  const sendForm = (formEl: FormEvent<HTMLFormElement>) => {
    // Map selected services to backend-compatible enum values
    const mappedServices = selectedServices.map((service: string) => {
      return servicesConfig[service].backendKey;
    });

    // Call the action handler with mapped services
    return handleSubmitAction(formEl, mappedServices, totalPrice, setFormStatus);
  };
  // ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
  return (
    <Fragment>
      {/*  ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞  */}
      <form
        onSubmit={sendForm}
        className='mt-8 cursor-pointer space-y-6 rounded-lg bg-white p-6 shadow-md'
      >
        {/* Input Fields */}
        {formFieldOpts.map((field: FormFieldOptions, index) => {
          if (field.name === 'phoneNumber') {
            return (
              <input
                key={index}
                {...field} // Spread all properties
                className='w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-black shadow-inner'
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  let value = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters
                  if (value.length > 3 && value.length <= 6) {
                    value = `${value.slice(0, 3)}-${value.slice(3)}`; // Format as "000-000"
                  } else if (value.length > 6) {
                    value = `${value.slice(0, 3)}-${value.slice(3, 6)}-${value.slice(6, 10)}`; // Format as "000-000-0000"
                  }
                  event.target.value = value; // Update the input value
                }}
              />
            );
          }

          // Default case for other fields
          return (
            <input
              key={index}
              {...field} // Spread all properties
              className='w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-black shadow-inner'
            />
          );
        })}

        {/* Textarea */}
        <textarea
          name='message'
          placeholder='Input your message here...'
          required
          minLength={10}
          rows={6}
          className='w-full rounded-lg border border-gray-300 px-4 pt-3 text-sm text-black shadow-inner'
        />

        {/* Service Options & Price at the Top */}
        <div className='space-y-4'>
          <p className='text-sm font-semibold text-black'>I'm interested in...</p>

          {/* Service Buttons */}
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

        {/* Submission Status */}
        {formStatus === 'success' && (
          <p className='text-center text-green-500'>
            Your request has been sent successfully!
          </p>
        )}
        {formStatus === 'error' && (
          <p className='text-center text-red-500'>Something went wrong. Please try again.</p>
        )}
      </form>
      {/*  ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞  */}
    </Fragment>
  );
};
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
