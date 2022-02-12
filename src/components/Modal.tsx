import IconButton from "./IconButton";
import IcRoundClose from "./Icons/IcRoundClose";

const Modal: React.FC<{
  title?: string;
  isOpen?: boolean;
  onClose: () => void;
}> = ({ title, isOpen = false, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute z-10 top-16 max-w-sm bg-white rounded-lg shadow-lg py-2 px-4 border-2">
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-bold">{title}</h2>

        <IconButton title="Close" onClick={onClose}>
          <IcRoundClose />
        </IconButton>
      </div>

      {children}
    </div>
  );
};

export default Modal;