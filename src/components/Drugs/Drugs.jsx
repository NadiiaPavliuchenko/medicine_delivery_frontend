import { useEffect, useState } from "react";
import {
  StyledButton,
  StyledLi,
  StyledList,
  StyledName,
  StyledThumb,
  StyledDiv,
} from "./Drugs.styled";

const Drugs = ({ drugsList }) => {
  const [drugs, setDrugs] = useState(() => {
    const storedDrugs = JSON.parse(localStorage.getItem("medicineCart")) || [];
    return storedDrugs;
  });

  useEffect(() => {
    localStorage.setItem("medicineCart", JSON.stringify(drugs));
  }, [drugs]);

  const handleButtonClick = (drug) => {
    const cartRecord = {
      ...drug,
      quantity: 1,
    };
    const isExist = drugs.find(
      (item) => item.name === drug.name && item.pharmacy === drug.pharmacy
    );
    if (typeof isExist !== "undefined") {
      isExist.quantity += 1;
      setDrugs([...drugs]);
    } else {
      setDrugs((prevState) => [...prevState, cartRecord]);
    }
  };

  return (
    <StyledList>
      {drugsList.length > 0 &&
        drugsList.map((drug) => (
          <StyledLi key={drug._id}>
            <StyledThumb>
              <img src={drug.photo} alt={drug.name} width="200" height="200" />
            </StyledThumb>
            <StyledName>{drug.name}</StyledName>
            <StyledDiv>
              <p>Price: {drug.price} &#8372;</p>
              <StyledButton
                type="button"
                onClick={() => handleButtonClick(drug)}
              >
                Add to cart
              </StyledButton>
            </StyledDiv>
          </StyledLi>
        ))}
    </StyledList>
  );
};

export default Drugs;
