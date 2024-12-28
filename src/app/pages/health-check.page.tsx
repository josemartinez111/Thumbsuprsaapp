// ⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//                 APP > PAGES > HEALTH_CHECK.PAGE.TSX
// ⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//                       IMPORTS
//⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import { Fragment } from 'react';
import { ST, useOnMounted } from "../../lib";
import { atom, useAtom } from 'jotai';
// ⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

// Define the atom for the status
const statusAtom = atom('Checking...');
// ⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

// noinspection JSUnusedGlobalSymbols
export default function HealthCheckPage() {
	// Use Jotai's useAtom to get the status value and its setter function
	const [status, setStatus] = useAtom(statusAtom);
	
	// Health check function with your version of try-catch
	const checkHealth = async () => {
		try {
			console.log('Health check initiated...');
			// Simulate an API call with a delay
			await new Promise((resolve) => setTimeout(resolve, 1000));
			setStatus(`Response: OK<->${ ST.OK }`); // Update status directly
			console.log('Health check successful', status); // Debug log
		} catch (error: unknown) {
			if (error instanceof Error) {
				console.error(`Health check error: ${ error.message }`);
				setStatus(`Response: Error<->${ ST.INTERNAL_SERVER_ERROR }: ${ error.message }`);
			}
			
			const errorMsg = String(error);
			console.error(`Health check error: ${ errorMsg }`);
			setStatus(`Response: Error<->${ ST.INTERNAL_SERVER_ERROR }: ${ errorMsg }`);
		}
	};
	
	// Run health check onMount of component without promise warning
	useOnMounted(() => {
		const runCheck = () => {
			checkHealth().catch((err) => {
				console.error('Health check failed:', err.message);
			});
		};
		
		runCheck();
	});
	// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
	return (
		<Fragment>
      {/*  ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞  */ }
			<main className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-7xl">HealthCheck Component</h1>
          <p className="font-orbitron text-5xl font-bold">
            Status:{ ' ' }
	          <span
		          className={
			          status.includes('OK') ? 'font-semibold text-green-600' : 'text-red-600'
		          }
	          >
              { status }
            </span>
          </p>
        </div>
      </main>
			{/*  ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞  */ }
    </Fragment>
	);
}

// ⚫️ ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
