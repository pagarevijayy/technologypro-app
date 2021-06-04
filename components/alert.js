const Alert = ({ alertMessage }) => {
  return (
    <div className="text-center py-2 bg-gray-800 text-gray-100 text-sm">
      <span>{alertMessage}</span>
    </div>
  );
};

export default Alert;
