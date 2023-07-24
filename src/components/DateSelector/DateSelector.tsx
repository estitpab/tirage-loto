import * as React from 'react';
import styles from './DateSelector.module.scss';
import { LotoData, LotoDatas } from '../../types/loto.types';

interface Props {
  setCurrentDraw: (selectedValue: string) => void;
  currentDraw: string;
  lotoDatas: LotoDatas;
}

const DateSelector: React.FC<Props> = ({
  setCurrentDraw,
  currentDraw,
  lotoDatas,
}) => {
  function changeDate(event: React.ChangeEvent<HTMLSelectElement>) {
    setCurrentDraw(event.target.value);
  }

  return (
    <div className={styles.date_selector}>
      <h1>
        <span>Tirage du</span>
        <select value={currentDraw} onChange={changeDate}>
          {lotoDatas?.map((lotoData: LotoData, i: number) => {
            const date = new Date(lotoData.fields.date_de_tirage);
            const options: Intl.DateTimeFormatOptions = {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            };
            const formatedDate = date.toLocaleDateString('fr-FR', options);
            return (
              <option key={lotoData.recordid} value={lotoData.recordid}>
                {formatedDate}
              </option>
            );
          })}
        </select>
      </h1>
    </div>
  );
};

export default DateSelector;
