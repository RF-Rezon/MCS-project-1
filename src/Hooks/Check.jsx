import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Check = ({ children }) => {
  const { id } = useParams();
  const [totalData, setTotalData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    let fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:4003/ca`);
        if (!response.ok) {
          toast.error("Network response was not ok");
        }
        const data = await response.json();
        setTotalData(data.length);
      } catch (error) {
        toast.error(`Error:, ${error}`);
      }
    };

    fetchData();
  }, []);

  if (totalData) {
    if (totalData < id) {
      toast.error("No user exists!");
      navigate("/");
      return null;
    }
    return children;
  }
};

export default Check;
