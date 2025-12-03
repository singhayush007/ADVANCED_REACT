import { MyContext } from '../MyContext';
import { useContext } from 'react';

const C = () => {
  const { count } = useContext(MyContext); // ← only count destructure

  return (
    <div className='bg-green-500 p-5'>
      C
      <p>Count from C: {count}</p>
    </div>
  );
};

export default C;

