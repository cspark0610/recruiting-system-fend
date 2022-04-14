interface ItemProps {
  name: string;
  job: string;
  secondary_status: string;
}

let color = '';

export default function Item({ name, job, secondary_status }: ItemProps) {
  if (secondary_status === 'new entry') {
    color = 'card card-new';
  } else if (secondary_status === 'doubting') {
    color = 'card card-doubting';
  } else if (secondary_status === 'dismissed') {
    color = 'card card-dismissed';
  } else {
    color = 'card card-aproved';
  }

  return (
    <article className={color}>
      <div className="ml-4">
        <p className="font-medium text-lg">{name}</p>
        <p className="font-light">{job}</p>
        <section className="flex flex-row gap-28 pt-4 pb-4">
          <p className="font-light pt-4">1 week</p>
          <button className="border border-black rounded-md w-20 transition ease duration-200 hover:bg-slate-500 hover:text-white">
            Open
          </button>
        </section>
      </div>
    </article>
  );
}
