import { useSelector } from 'react-redux';
import { Tab } from '@headlessui/react';
import DialogControl from '../../../buttons/DialogControl';
import { State } from '../../../../redux/store/store';

interface Props {
  isApproved: any;
  isDoubting: any;
  isDismiss: any;
  isReject: any;
  isConfirmed: boolean;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const ListDialog: React.FC<Props> = ({
  isApproved,
  isDoubting,
  isDismiss,
  isReject,
  isConfirmed,
}) => {
  /*  */
  const detail = useSelector((state: State) => state.info.detail);

  const listingPanels = [
    {
      id: 1,
      name: 'General details',
      styles: {
        top: 'top-[87px]',
      },
    },
    {
      id: 2,
      name: 'Videos',
      styles: {
        top: 'top-[130px]',
      },
    },
    {
      id: 3,
      name: 'Conclusions',
      styles: {
        top: 'top-[173px]',
      },
    },
  ];

  return (
    <Tab.List className="relative flex flex-col bg-light-gray-color w-[206px] h-screen">
      <div className="w-full my-5 text-center grid justify-center">
        <div className="w-[85px] h-[19px] py-[2px] font-raleway text-xs text-white bg-cyan-color rounded-[5px]">
          <span className="text-bold">Source: </span> FTF
        </div>
      </div>

      {listingPanels.map(
        (panel: { id: number; name: string; styles: { top: string } }) => (
          <Tab
            key={panel.id}
            className={({ selected }) =>
              classNames(
                `absolute ${panel.styles.top} left-[45px] w-[191px] h-[41px] py-2.5 text-sm font-raleway font-medium text-left pl-5 text-gray-color focus:outline-none`,
                selected ? 'bg-white rounded-l-[5px] text-cyan-color' : '',
              )
            }
          >
            {panel.name}
          </Tab>
        ),
      )}

      {/* Buttons to control the postulation'status of a user */}
      <div
        className={`${
          isConfirmed ? 'hidden' : 'block'
        } absolute top-[300px] left-[40px]`}
      >
        <div className="grid grid-cols-1">
          {detail.secondary_status === 'approved' ? null : (
            <>
              {detail.secondary_status !== 'approved' &&
                detail.secondary_status !== 'dismissed' && (
                  <DialogControl
                    classes="bg-green-color"
                    onClick={isApproved}
                    title="Approve"
                    needIcon={false}
                  />
                )}
              {detail.secondary_status !== 'doubting' &&
                detail.secondary_status !== 'dismissed' && (
                  <DialogControl
                    classes="bg-yellow-color"
                    onClick={isDoubting}
                    title="Doubting"
                    needIcon={false}
                  />
                )}
              {detail.secondary_status !== 'dismissed' && (
                <DialogControl
                  classes="bg-red-dark"
                  onClick={isDismiss}
                  title="Dismiss"
                  needIcon={false}
                />
              )}
            </>
          )}
          <DialogControl
            classes="bg-transparent !text-gray-color"
            onClick={isReject}
            title="Reject"
            needIcon={true}
          />
        </div>
      </div>
    </Tab.List>
  );
};

export default ListDialog;
