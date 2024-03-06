import { useEffect, useState } from "react";
import Pharmacies from "../../components/Pharmacies/Pharmacies";
import Drugs from "../../components/Drugs/Drugs";
import getDrugsByPharmacy from "../../api/getDrugsByPharmacy";
import getDrugs from "../../api/getDrugs";
import { StyledContaiter } from "./Shop.styled";

const Shop = () => {
  const [selectedPharmacy, setSelectedPharmacy] = useState(null);
  const [drugs, setDrugs] = useState([]);

  const handlePharmacySelect = (pharmacyId) => {
    setSelectedPharmacy(pharmacyId);
  };

  useEffect(() => {
    const getDrugsList = async () => {
      try {
        const drugsList = await getDrugs();

        setDrugs(drugsList);
      } catch (e) {
        console.log("Error while getting drugs list", e);
      }
    };
    getDrugsList();
  }, []);

  useEffect(() => {
    const getDrugs = async () => {
      try {
        const drugsList = await getDrugsByPharmacy(selectedPharmacy);

        setDrugs(drugsList);
      } catch (e) {
        console.log("Error while getting drugs list", e);
      }
    };
    if (!selectedPharmacy) return;
    getDrugs();
  }, [selectedPharmacy]);

  return (
    <StyledContaiter>
      <Pharmacies
        onSelect={handlePharmacySelect}
        selectedPahrmacy={selectedPharmacy}
      />
      <Drugs drugsList={drugs} />
    </StyledContaiter>
  );
};

export default Shop;
