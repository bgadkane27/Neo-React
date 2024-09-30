import { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getCountryInvData } from "../../api/postAPI";

export const CountryDetails = () => {
  const params = useParams();

  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState();

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryInvData(params.id);
      if (res.status === 200) {
        setCountry(res.data[0]);
      }
    });
  }, [params.id]);

  if (isPending) return <div className="loader"></div>;
  
};
