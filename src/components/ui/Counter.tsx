import styles from '../shared/Rebate/Rebate.module.scss';
import { useDispatch, useSelector } from 'react-redux';

import { addItem, minusItem, updateTotalPrice } from '../../redux/slices/CartSlice';
import { RootState } from '../../redux/store';

interface CounterProps {
  id: string;
}

export const Counter: React.FC<CounterProps> = ({ id }) => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);
  const item = items[id];

  const count = item ? item.count : 0;

  const onClickPlus = () => {
    dispatch(addItem({ id }));
    dispatch(updateTotalPrice());
  };

  const onClickMinus = () => {
    dispatch(minusItem(id));
    dispatch(updateTotalPrice());
  };
  return (
    <div>
      <div className={styles.rebate__add}>
        <button className={styles.rebate__invoice} onClick={onClickPlus}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-plus">
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
        </button>
        <div className={styles.rebate__counter}>{count}</div>
        <button className={styles.rebate__invoice} onClick={onClickMinus}>
          {' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-minus">
            <path d="M5 12h14" />
          </svg>
        </button>
      </div>
    </div>
  );
};
