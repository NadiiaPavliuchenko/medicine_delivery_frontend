import React, { useEffect, useState } from "react";
import getPharmacies from "../../api/getPharmacies";
import { StyledContainer, StyledH, StyledLi } from "./Pharmacies.styled";

const Pharmacies = ({ onSelect, selectedPahrmacy }) => {
  const [pharmacies, setPharmacies] = useState([]);
  useEffect(() => {
    const getPharmaciesList = async () => {
      try {
        const pharmaciesList = await getPharmacies();

        setPharmacies(pharmaciesList);
      } catch (e) {
        console.log("Error getting pharmacies list", e);
      }
    };
    getPharmaciesList();
  });

  return (
    <StyledContainer>
      <StyledH>Pharmacies:</StyledH>
      <ul>
        {pharmacies &&
          pharmacies.map((pharmacy) => (
            <StyledLi
              key={pharmacy._id}
              onClick={() => onSelect(pharmacy._id)}
              selected={selectedPahrmacy === pharmacy._id}
            >
              <p>{pharmacy.name}</p>
            </StyledLi>
          ))}
      </ul>
    </StyledContainer>
  );
};

export default Pharmacies;
