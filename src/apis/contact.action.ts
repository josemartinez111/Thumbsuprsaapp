// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//                       FILE_PATH
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import axios from 'axios';
import { FormEvent } from 'react';
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

export type ContactFormPayload = {
  fullName: string;
  phoneNumber: string;
  currentLocation: string;
  vehicleYear: string;
  vehicleMake: string;
  vehicleModel: string;
  vehicleColor: string;
  licensePlateNumber: string;
  message: string;
  services?: Array<string>;
  total: number;
};

// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

/**
 * Handles the form submission event and calls the API.
 * @param {FormEvent<HTMLFormElement>} e - The form submission event.
 * @param {string[]} selectedServices - The services selected by the user.
 * @param {string} totalPrice - The total price for the selected services.
 * @param {(status: string) => void} setFormStatus - Function to set the form submission status.
 * @returns {Promise<void>} - Resolves when the form submission is complete.
 */
export async function handleSubmitAction(
  e: FormEvent<HTMLFormElement>,
  selectedServices: string[],
  totalPrice: string,
  setFormStatus: (status: string) => void,
): Promise<void> {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const payload: ContactFormPayload = {
    fullName: formData.get('fullName') as string,
    phoneNumber: formData.get('phoneNumber') as string,
    currentLocation: formData.get('currentLocation') as string,
    vehicleYear: formData.get('vehicleYear') as string,
    vehicleMake: formData.get('vehicleMake') as string,
    vehicleModel: formData.get('vehicleModel') as string,
    vehicleColor: formData.get('vehicleColor') as string,
    licensePlateNumber: formData.get('licensePlateNumber') as string,
    message: formData.get('message') as string,
    services: selectedServices,
    total: parseFloat(totalPrice.replace(/[^0-9.-]+/g, '')),
  };

  try {
    let success = await submitContactForm(payload);
    setFormStatus(success ? `${200}` : `${404}`);
  } catch (error) {
    if (error instanceof Error) console.error(error.message);
    setFormStatus(`${500}`);
  }
}

// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

/**
 * Submits the contact form data to the backend.
 * @param {ContactFormPayload} payload - The contact form data to send.
 * @returns {Promise<boolean>} - Returns true if the request succeeds.
 * @throws {Error} - Re-throws any error that occurs during the API call.
 */
const submitContactForm = async (payload: ContactFormPayload): Promise<boolean> => {
  try {
    const response = await axios.post(
      'http://localhost:3000/sms/roadside-assistance',
      payload,
    );

    if (response.status === 200) {
      console.log('Form submitted successfully:', JSON.stringify(response, null, 2));
      return true;
    }

    console.error(`Unexpected response status: ${response.status}`);
    return false;
  } catch (error: unknown) {
    if (error instanceof Error) console.error(error.message);
    throw error;
  }
};

// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
