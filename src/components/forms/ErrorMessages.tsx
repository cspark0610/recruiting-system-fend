import { useSelector } from 'react-redux';
import { State } from '../../redux/store/store';

type ErrorMessagesProps = {
  errorTerms: string[];
  className?: string;
};

export default function ErrorMessages({
  errorTerms,
  className,
}: ErrorMessagesProps) {
  const error = useSelector((state: State) => state.positions.error);
  const errorMessages = Object.entries(error.message).map(
    ([_key, value]) => value,
  );

  return (
    <>
      {errorMessages.length === 1 &&
      errorTerms.includes(errorMessages[0] as string) ? (
        <span className="text-red-500 ml-4">{error.message}</span>
      ) : (
        <div className={`${className}`}>
          {errorMessages.map((msg: any) =>
            errorTerms.map((err) =>
              msg.includes(err) ? (
                <span className="text-red-500">{msg}</span>
              ) : null,
            ),
          )}
        </div>
      )}
    </>
  );
}
