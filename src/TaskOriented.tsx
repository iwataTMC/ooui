import React from 'react';
import TaskComponent from './TaskComponent';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface Props {
}


export default function TaskOriented(props: Props) {
  const navigate = useNavigate();

  const handleTaskCompleted = (elapsedTime: number, errorCount: number) => {
    console.log(`タスク指向プロトタイプ - 経過時間: ${elapsedTime}ms, ${elapsedTime / 1000}s, エラー回数: ${errorCount}`);
  };


  return (
    <div>
      <h2>タスク指向UI/UXデザインプロトタイプ</h2>
      {/* ここにタスク指向UI/UXデザインの要素を実装 */}
      <Button variant='contained' onClick={() => navigate(`/ooui`)}>
        Main Page
      </Button>
      <TaskComponent onTaskCompleted={handleTaskCompleted} />
      <Button variant='contained' onClick={() => navigate(`/result`)}>
        Result Page
      </Button>
    </div>
  );
};