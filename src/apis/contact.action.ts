// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//                       FILE_PATH
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import axios from 'axios';
import { FormEvent } from 'react';
import { EL, STLIB } from '../lib';
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

/**
 * The payload format for sending data to the backend.
 */
export type ContactFormPayload = {
  fullName: string; // User's full name
  phoneNumber: string; // User's phone number
  currentLocation: string; // Current location of the user
  vehicleYear: string; // Vehicle's year of manufacture
  vehicleMake: string; // Vehicle's make
  vehicleModel: string; // Vehicle's model
  vehicleColor: string; // Vehicle's color
  licensePlateNumber: string; // Vehicle's license plate
  message: string; // Additional message from the user
  services?: Array<string>; // Selected services (mapped to backend-compatible values)
  total: string; // Total cost as a string
};

// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

/**
 * Handles the form submission event and calls the API.
 * @param {FormEvent<HTMLFormElement>} formEl - The form submission event.
 * @param {string[]} selectedServices - The services selected by the user.
 * @param {string} totalPrice - The total price for the selected services.
 * @param {(status: string) => void} setFormStatus - Function to set the form submission status.
 * @returns {Promise<void>} - Resolves when the form submission is complete.
 */
export async function handleSubmitAction(
  formEl: FormEvent<HTMLFormElement>,
  selectedServices: string[],
  totalPrice: string,
  setFormStatus: (status: string) => void,
): Promise<void> {
  formEl.preventDefault();

  const formData = new FormData(formEl.currentTarget);
  const payload: ContactFormPayload = {
    fullName: formData.get('fullName')?.toString() ?? EL.STR_EMPTY,
    phoneNumber: formData.get('phoneNumber')?.toString() ?? EL.STR_EMPTY,
    currentLocation: formData.get('currentLocation')?.toString() ?? EL.STR_EMPTY,
    vehicleYear: formData.get('vehicleYear')?.toString() ?? EL.STR_EMPTY,
    vehicleMake: formData.get('vehicleMake')?.toString() ?? EL.STR_EMPTY,
    vehicleModel: formData.get('vehicleModel')?.toString() ?? EL.STR_EMPTY,
    vehicleColor: formData.get('vehicleColor')?.toString() ?? EL.STR_EMPTY,
    licensePlateNumber: formData.get('licensePlateNumber')?.toString() ?? EL.STR_EMPTY,
    services: selectedServices,
    total: parseFloat(totalPrice.replace(/[^0-9.-]+/g, '')).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    }),
    message: formData.get('message')?.toString() ?? '',
  };

  // Log for debugging purposes
  console.log('Payload being sent to the API:', JSON.stringify(payload, null, 2));
  try {
    let success = await submitContactForm(payload);
    setFormStatus(success ? `${STLIB.OK}` : `${STLIB.NOT_FOUND}`);
  } catch (error: unknown) {
    if (error instanceof Error) console.error(error.message);
    setFormStatus(`${STLIB.INTERNAL_SERVER_ERROR}`);
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
  // Environment variables
  const devKey = import.meta.env.VITE_API_URL_DEV;
  const prodKey = process.env.API_URL_PROD;

  /** TODO: DEVELOPMENT */
  const apiURL = import.meta.env.MODE === 'development' ? devKey : prodKey;

  /** TODO: PRODUCTION */
  // const apiURL = process.env.API_URL_PROD ?? EL.STR_EMPTY;

  console.log('Production API URL KEY:', prodKey);

  console.log('Environment mode:', import.meta.env.MODE);
  console.log('API URL:', apiURL);
  // Log the payload being sent to the API
  console.log('Payload being sent to the API:', JSON.stringify(payload, null, 2));
  try {
    const response = await axios.post(apiURL, payload);

    if (response.status === STLIB.OK) {
      console.log(
        '\nForm submitted successfully:',
        JSON.stringify(response.data, null, 2), // Format the `data` part of the response
      );

      console.log('Response status:', response.status);
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
