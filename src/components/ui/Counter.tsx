import styles from '../shared/Rebate/Rebate.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, equally, increase } from '../../redux/slices/CounterSlice';

interface CounterProps {
  id: string;
}

export const Counter: React.FC<CounterProps> = ({ id }) => {
  const count = useSelector((state: any) => state.count[id] || 0);

  const dispatch = useDispatch();

  const onClickMinus = () => {
    if (count == 0) {
      dispatch(equally(id));
    } else {
      dispatch(decrease(id));
    }
  };
  return (
    <div>
      <div className={styles.rebate__add}>
        <button className={styles.rebate__invoice} onClick={() => dispatch(increase(id))}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-plus">
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
        </button>
        <div className={styles.rebate__counter}>{count}</div>
        <button onClick={onClickMinus} className={styles.rebate__invoice}>
          {' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-minus">
            <path d="M5 12h14" />
          </svg>
        </button>
      </div>
    </div>
  );
};
