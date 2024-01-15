import { createContext, useState, Dispatch, SetStateAction } from 'react';
import { message } from 'antd';
import { Guest } from '../../types/GuestType';

type TypeForm = {
  name: string;
  email: string;
  creditCard: boolean;
  pix: boolean;
  cardName: string;
  cardValidity: string;
  cardCVC: string;
};

type PaymentsContextValue = {
  formInfo: TypeForm;
  setFormInfo: Dispatch<SetStateAction<TypeForm>>;
  storageStayHotel: Guest | null;
  setStorageStayHotel: Dispatch<SetStateAction<Guest | null>>;
  validateForm: () => void;
  clearGlobalState: () => void;
};

const initialFormInfo = {
  name: '',
  email: '',
  creditCard: false,
  pix: false,
  cardName: '',
  cardValidity: '',
  cardCVC: '',
};

export const PaymentsContext = createContext({} as PaymentsContextValue);

export function PaymentsProvider({ children }: { children: React.ReactNode }) {
  const [formInfo, setFormInfo] = useState<TypeForm>(initialFormInfo);
  const [storageStayHotel, setStorageStayHotel] = useState<Guest | null>(null);

  function validateForm() {
    const errors = [];

    if (formInfo?.name === '') errors.push('O campo nome é Obrigatório');
    if (formInfo?.email === '') errors.push('O campo E-mail é Obrigatório');
    if (formInfo?.cardName === '') errors.push('O campo Nome do Cartão é Obrigatório');
    if (formInfo?.cardValidity === '') errors.push('O campo Validade é Obrigatório');
    if (formInfo?.cardCVC === '') errors.push('O campo CVC é Obrigatório');
    errors.map((error) => message.warning(error, 2));
    return errors.length === 0;
  }

  function clearGlobalState() {
    if (validateForm()) {
      setFormInfo({
        name: '',
        email: '',
        creditCard: false,
        pix: false,
        cardName: '',
        cardValidity: '',
        cardCVC: '',
      });
      message.success('Reserva efetuada com Sucesso');
      localStorage.clear();
    }
  }

  return (
    <PaymentsContext.Provider
      value={ {
        formInfo,
        setFormInfo,
        storageStayHotel,
        setStorageStayHotel,
        validateForm,
        clearGlobalState,
      } }
    >
      { children }
    </PaymentsContext.Provider>
  );
}
