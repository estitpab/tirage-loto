import * as React from 'react';
import styles from './LotoBall.module.scss';
import { BallNumber } from '../../types/loto.types';

interface Props {
  ballNumber: BallNumber;
  luck: boolean;
}

const LotoBall: React.FC<Props> = ({ ballNumber, luck }: Props) => {
  function getRandomNumber(): number {
    return Math.floor(Math.random() * 500);
  }

  return (
    <div
      style={{ animationDelay: `${getRandomNumber()}ms` }}
      className={`${styles.lotoBall} ${luck ? styles.luck : ''}`}
    >
      <div className={styles.number}>{ballNumber}</div>
    </div>
  );
};

export default LotoBall;
