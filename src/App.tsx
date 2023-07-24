import * as React from 'react';
import { useEffect, useState } from 'react';
import { getLotoDatas } from './api/getLotoDatas';
import DateSelector from './components/DateSelector/DateSelector';
import LotoDraw from './components/LotoDraw/LotoDraw';
import './sass/global.scss';
import { LotoDatas, CurrentDraw } from './types/loto.types';

export default function App() {
  const [lotoDatas, setLotoDatas] = useState<LotoDatas | null>(null);
  const [currentDraw, setCurrentDraw] = useState<CurrentDraw | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const datas = await getLotoDatas();
        setLotoDatas(datas.records);
        setCurrentDraw(datas.records?.[0]?.recordid);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <DateSelector
        setCurrentDraw={setCurrentDraw}
        currentDraw={currentDraw}
        lotoDatas={lotoDatas}
      />
      <LotoDraw lotoDatas={lotoDatas} currentDraw={currentDraw} />
    </div>
  );
}
