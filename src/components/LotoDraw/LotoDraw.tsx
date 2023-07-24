import * as React from 'react';
import { useEffect, useState } from 'react';
import LotoBall from '../LotoBall/LotoBall';
import styles from './LotoDraw.module.scss';
import { LotoDatas, CurrentDraw, LotoDraw } from '../../types/loto.types';

interface Props {
  lotoDatas: LotoDatas;
  currentDraw: CurrentDraw;
}

const LotoDraw: React.FC<Props> = ({ lotoDatas, currentDraw }) => {
  const [currentLotoDatas, setCurrentLotoDatas] = useState<LotoDraw | null>(
    null
  );
  const [key, setKey] = useState(0);

  useEffect(() => {
    setCurrentLotoDatas(
      lotoDatas?.find((e) => e.recordid === currentDraw)?.fields
    );
    setKey(key + 1);
  }, [currentDraw, lotoDatas]);

  const balls = [
    'boule_1',
    'boule_2',
    'boule_3',
    'boule_4',
    'boule_5',
    'numero_chance',
  ];

  const sortedBalls = balls.sort((a, b) => {
    if (a === 'numero_chance') return 1;
    if (b === 'numero_chance') return -1;
    return currentLotoDatas?.[a] - currentLotoDatas?.[b];
  });

  return (
    <div className={styles.LotoDraw}>
      {currentLotoDatas &&
        sortedBalls?.map((ball) => (
          <LotoBall
            key={`${currentLotoDatas?.[ball]}_${key}`}
            ballNumber={currentLotoDatas?.[ball]}
            luck={ball === 'numero_chance'}
          />
        ))}
    </div>
  );
};

export default LotoDraw;
