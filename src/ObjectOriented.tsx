import React from 'react';
import TaskComponent from './TaskComponent';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface Props {
}


export default function ObjectOriented(props: Props) {
  const navigate = useNavigate();

  const handleTaskCompleted = (elapsedTime: number, errorCount: number) => {
    console.log(`オブジェクト指向プロトタイプ - 経過時間: ${elapsedTime}ms, エラー回数: ${errorCount}`);
  };


  return (
    <div>
      <h2>オブジェクト指向UI/UXデザインプロトタイプ</h2>
      {/* ここにオブジェクト指向UI/UXデザインの要素を実装 */}
      <Button variant='contained' onClick={() => navigate(`/result`)}>
        Button
      </Button>
      <TaskComponent onTaskCompleted={handleTaskCompleted} />
    </div>
  );
};

