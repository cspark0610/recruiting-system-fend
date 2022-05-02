import { useEffect } from 'react';

export default function useOutsideAlerter(
  ref: React.RefObject<HTMLDivElement>,
  callbacks: ((newState: boolean) => void)[],
) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        callbacks.forEach((callback) => callback(false));
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callbacks]);
}
