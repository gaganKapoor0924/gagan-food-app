import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ScaleLoader } from "react-spinners";

const Success = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {loading ? (
        <ScaleLoader />
      ) : (
        <>
          <h2 className="text-3xl font-semibold mb-3">Order successful!</h2>
          <p>Your order has been successfully placed</p>
        </>
      )}
    </div>
  );
};
export default Success;
