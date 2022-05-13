type ErrorMessagesProps = {
  errorTerms: string[];
  errorState: any;
  className?: string;
};

export default function ErrorMessages({
  errorTerms,
  errorState,
  className,
}: ErrorMessagesProps) {
  let errorMessages;

  if (typeof errorState.message !== 'object') {
    errorMessages = errorState.message.split('\n');
  } else {
    errorMessages = Object.entries(errorState.message).map(
      ([_key, value]) => value,
    );
  }

  return (
    <>
      {errorMessages.length === 1 &&
      errorTerms.includes(errorMessages[0] as string) ? (
        <span className="text-red-500 ml-4">{errorState.message}</span>
      ) : (
        <div className={`${className}`}>
          {errorMessages.map((msg: any) =>
            errorTerms.map((err) =>
              msg.includes(err) ? (
                <span key={msg} className="text-red-500">
                  {msg}
                </span>
              ) : null,
            ),
          )}
        </div>
      )}
    </>
  );
}
