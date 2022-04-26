import { FiClock } from 'react-icons/fi';
import getItemBorderColor from '../../utils/getItemBorderColor';
import '../../assets/scss/Card.scss';

type ItemProps = {
  name: string;
  position: string;
  secondary_status: string;
};

export default function Item({ name, position, secondary_status }: ItemProps) {
  const card = getItemBorderColor(secondary_status);
  return (
    <article className={card}>
      <div className="ml-4">
        <p className="font-medium text-lg">{name}</p>
        <p className="font-light">{position}</p>
        <section className="flex flex-row gap-24 pt-4 pb-4">
          <span className="flex font-light pt-4">
            <FiClock className="mt-[0.25rem] mr-[0.5rem] text-lg" /> 1 week
          </span>
          <button className="border border-black rounded-md w-20 transition ease duration-200 hover:bg-slate-500 hover:text-white">
            Open
          </button>
        </section>
      </div>
    </article>
  );
}
