import { useCallback, useEffect, useState } from "react";
import Pharmacies from "../../components/Pharmacies/Pharmacies";
import Drugs from "../../components/Drugs/Drugs";
import getDrugsByPharmacy from "../../api/getDrugsByPharmacy";
import getDrugs from "../../api/getDrugs";
import updateFavorite from "../../api/updateFavorite.js";
import { StyledContaiter } from "./Shop.styled";
import Filters from "../../components/Filters/Filters.jsx";

const Shop = () => {
  const [selectedPharmacy, setSelectedPharmacy] = useState(null);
  const [drugs, setDrugs] = useState([]);
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");

  const handlePharmacySelect = (pharmacyId) => {
    setSelectedPharmacy(pharmacyId);
  };

  const handleAllSelect = () => {
    setSelectedPharmacy(null);
  };

  const getDrugList = useCallback(async () => {
    try {
      const drugsList = await getDrugs(date, price);
      setDrugs(drugsList);
    } catch (e) {
      console.log("Error while getting drugs list", e);
    }
  }, [date, price]);

  useEffect(() => {
    const getDrugs = async () => {
      try {
        const drugsList = await getDrugsByPharmacy(
          selectedPharmacy,
          date,
          price
        );

        setDrugs(drugsList);
      } catch (e) {
        console.log("Error while getting drugs list", e);
      }
    };
    if (selectedPharmacy) {
      getDrugs();
    } else {
      getDrugList(date, price);
    }
  }, [getDrugList, selectedPharmacy, date, price]);

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

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleDropFilters = () => {
    setDate("");
    setPrice("");
  };

  return (
    <>
      <Filters
        price={price}
        date={date}
        onPriceChange={handlePriceChange}
        onDateChange={handleDateChange}
        onDropFilters={handleDropFilters}
      />
      <StyledContaiter>
        <Pharmacies
          onSelect={handlePharmacySelect}
          onSelectAll={handleAllSelect}
          selectedPahrmacy={selectedPharmacy}
        />
        <Drugs drugsList={drugs} changeFavorite={changeFavorite} />
      </StyledContaiter>
    </>
  );
};

export default Shop;
