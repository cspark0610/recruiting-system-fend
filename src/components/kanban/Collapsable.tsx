type CollapsableProps = {
  info: {
    main_text: string;
    status_info: string[];
  };
};

export default function Collapsable({ info }: CollapsableProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-center text-sm">{info.main_text}</p>
      <div className="pt-2">
        {info.status_info.map((status, index) => (
          <div key={index} className="flex text-xs pb-2 pl-2">
            <div>
              <div className="list-bullet bullet-new"></div>
            </div>
            <div className="w-full">
              <p className="ml-2">{status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
