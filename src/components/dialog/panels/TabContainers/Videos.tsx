import { useSelector } from 'react-redux';
import { BsPlay } from 'react-icons/bs';
import { State } from '../../../../redux/store/store';
import { IQuestion } from '../../../../redux/positions/types/data';
import QskInterview from '../../../extras/QskInterview';

const Videos = () => {
  const detail = useSelector((state: State) => state.info.detail);

  const hasUploaded = detail?.videos_question_list.filter(
    (video: IQuestion) => video.video_key,
  );

  let video = '';

  return (
    <div className="grid justify-items-center">
      <div className="mt-[48px] grid justify-items-start w-[85%]">
        <p className="font-raleway font-semibold text-gray-color text-[20px]">
          {detail.name}
        </p>
      </div>
      <section className="grid justify-items-center grid-cols-2 gap-[36px] w-[85%]">
        <div className="w-full">
          <div className="my-[32px]">
            <div className="relative bg-light-color border-light-color rounded-[10px] w-[414px] h-[322px]">
              <span className="absolute top-[35%] left-[165px]">
                <BsPlay className="text-cyan-color w-[81px] h-[85px]" />
              </span>
              {video && (
                <video id="video-interview" controls>
                  <source src={video} type="video/webm;codecs=vp9,opus" />
                </video>
              )}
            </div>
            {hasUploaded.length === 0 ? (
              <p className="relative font-raleway text-gray-color text-sm mt-[17px]">
                *This candidate has not uploaded any video yet.
              </p>
            ) : null}
          </div>
        </div>
        <div className="w-full">
          <div className="my-[32px]">
            <p className="font-raleway text-gray-color text-[14px] font-bold uppercase my-3">
              Questions
            </p>
            <div className="relative">
              <QskInterview classes="text-[12px]" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Videos;
