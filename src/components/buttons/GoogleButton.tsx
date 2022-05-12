import { useEffect, useRef } from 'react';

type GoogleButtonProps = {
  CLIENT_ID: string;
  text: 'signin_with' | 'signup_with' | 'continue_with' | undefined;
  handleSuccess: (result: any) => void;
};

export default function GoogleButton({
  CLIENT_ID,
  text,
  handleSuccess,
}: GoogleButtonProps) {
  const divRef = useRef<HTMLDivElement>(null);
  let btnText = text;

  useEffect(() => {
    if (typeof window === 'undefined' || !window.google || !divRef.current) {
      return;
    }

    try {
      window.google.accounts.id.initialize({
        client_id: CLIENT_ID,
        callback: handleSuccess,
      });
      window.google.accounts.id.renderButton(divRef.current, {
        type: 'standard',
        theme: 'outline',
        text: btnText,
        size: 'large',
      });
    } catch (error) {
      console.error(error);
    }
  }, [CLIENT_ID, handleSuccess]);

  return <div ref={divRef} className="flex justify-center mt-4"></div>;
}
