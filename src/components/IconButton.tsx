const IconButton: React.FC<{
  title?: string;
  onClick?: () => void;
}> = ({ title, onClick, children }) => {
  return (
    <button
      className="text-2xl hover:opacity-70"
      title={title}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default IconButton;
