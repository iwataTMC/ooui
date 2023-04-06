import React from 'react';
import { useResult } from './ResultContext';

interface Props {
}


export default function Result(props: Props) {

  const { result } = useResult();

  if (!result) {
    return <p>結果がありません。</p>;
  }


  return (
    <div>
      <h2>Result</h2>
      {/* ここに結果を表示 */}
      <p>経過時間: {result.elapsedTime} ms</p>
      <p>経過時間: {result.elapsedTime / 1000} s</p>
      <p>エラー回数: {result.errorCount}</p>
    </div>
  );
};