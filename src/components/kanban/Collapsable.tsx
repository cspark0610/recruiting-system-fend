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
      <ul className="pt-4 w-contain">
        {info.status_info.map((status, index) => (
          <li key={index} className="text-sm pb-2">
            {status}
          </li>
        ))}
      </ul>
    </div>
  );
}
