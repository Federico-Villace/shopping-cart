import { useNavigate } from "react-router";

export const ReturnButton = () => {
  const navigate = useNavigate();

  const handleReturn = () => {
    return navigate("/HomePage");
  };
  return (
    <button type="button" className="button" onClick={handleReturn}>
      Return
    </button>
  );
};
