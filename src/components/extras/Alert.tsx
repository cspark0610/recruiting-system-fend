import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import './../../assets/scss/alert.scss';

const Alert = () => {
  /*  */
  const { t } = useTranslation();
  const [isDisplay, setIsDisplay] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsDisplay(true);
      setTimeout(() => {
        setIsDisplay(false);
      }, 4000);
    }, 10);
  }, []);

  return (
    <div className="container-tooltip">
      {isDisplay && (
        <>
          <div className="tooltip" data-tooltip="tooltip-test">
            <p>{t('alert_message')}</p>
          </div>
          <div className="vector"></div>
        </>
      )}
    </div>
  );
};

export default Alert;
