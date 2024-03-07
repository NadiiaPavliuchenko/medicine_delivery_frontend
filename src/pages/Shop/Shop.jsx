import { useEffect, useState } from "react";
import Pharmacies from "../../components/Pharmacies/Pharmacies";
import Drugs from "../../components/Drugs/Drugs";
import getDrugsByPharmacy from "../../api/getDrugsByPharmacy";
import getDrugs from "../../api/getDrugs";
import updateFavorite from "../../api/updateFavorite.js";
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

  const changeFavorite = async (drug) => {
    try {
      const updatedDrug = await updateFavorite(drug._id, !drug.favorite);
      setDrugs((prevDrugs) => {
        return prevDrugs.map((prevDrug) =>
          prevDrug._id === updatedDrug._id
            ? { ...prevDrug, favorite: updatedDrug.favorite }
            : prevDrug
        );
      });
    } catch (e) {
      console.log("Error while marking drug as favorite", e);
    }
  };

  return (
    <StyledContaiter>
      <Pharmacies
        onSelect={handlePharmacySelect}
        selectedPahrmacy={selectedPharmacy}
      />
      <Drugs drugsList={drugs} changeFavorite={changeFavorite} />
    </StyledContaiter>
  );
};

export default Shop;
