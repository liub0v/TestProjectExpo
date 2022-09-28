import { NewRewardModal } from "./NewRewardModal";
import {
  createContext,
  FC,
  ReactElement,
  useCallback,
  useMemo,
  useState,
} from "react";

export interface IBaseModalDialogContext {
  show: () => void;
  dismiss: () => void;
}
interface IModalProvider {
  children: ReactElement;
}

export const ModalContext = createContext<IBaseModalDialogContext>({
  show: () => 0,
  dismiss: () => 0,
});

export const ModalProvider: FC<IModalProvider> = ({ children }) => {
  const [visible, setVisible] = useState(false);

  const dismiss = useCallback(() => {
    setVisible(false);
  }, []);

  const value = useMemo<IBaseModalDialogContext>(
    () => ({
      show: () => {
        setVisible(true);
      },
      dismiss: () => {
        if (visible) {
          setVisible(false);
        }
      },
    }),
    [visible]
  );
  return (
    <ModalContext.Provider value={value}>
      {children}
      <NewRewardModal visible={visible} onDismiss={dismiss} />
    </ModalContext.Provider>
  );
};
