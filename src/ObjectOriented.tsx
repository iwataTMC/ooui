import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ObjectComponent from './ObjectComponent';

interface Props {
}


export default function ObjectOriented(props: Props) {
  const navigate = useNavigate();

  const handleTaskCompleted = (elapsedTime: number, errorCount: number) => {
    console.log(`オブジェクト指向プロトタイプ - 経過時間: ${elapsedTime}ms,${elapsedTime / 1000}s, エラー回数: ${errorCount}`);
  };


  return (
    <div>
      <h2>オブジェクト指向UI/UXデザインプロトタイプ</h2>
      {/* ここにオブジェクト指向UI/UXデザインの要素を実装 */}
      <Button variant='contained' onClick={() => navigate(`/ooui`)}>
        Main Page
      </Button>
      <ObjectComponent onTaskCompleted={handleTaskCompleted} />
      <br />
      <Button variant='contained' onClick={() => navigate(`/result`)}>
        Result Page
      </Button>
    </div>
  );
};

