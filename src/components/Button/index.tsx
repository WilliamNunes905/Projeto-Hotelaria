import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartFlatbedSuitcase,
} from '@fortawesome/free-solid-svg-icons/faCartFlatbedSuitcase';
import './ReservationButton.scss';
import { Badge, Avatar } from 'antd';

function ReservationButton() {
  return (
    <>
      <button>
        <FontAwesomeIcon icon={ faCartFlatbedSuitcase } />
        Reservas
      </button>
      <div className="container-badge">
        <Badge
          size="default"
          count={ 5 }
          className="badge-reservation"
        />
      </div>
    </>
  );
}

export default ReservationButton;
