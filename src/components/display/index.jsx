import { useSelector, useDispatch } from "react-redux";
import { addNumber, subNumber } from "../../store/modules/counter/action";
import { Button, ButtonGroup } from "@chakra-ui/react";
const Display = () => {
  const dispatch = useDispatch();
  const number = useSelector((state) => state.counter);
  const handleClickAdd = () => {
    dispatch(addNumber(1));
  };
  const handleClickSub = () => {
    dispatch(subNumber(1));
  };
  return (
    <div style={{margin: "300px 0"}}>
      <h1>{number}</h1>
      <ButtonGroup isAttached>
        <Button colorScheme="blue" onClick={handleClickAdd}>
          Somar 1
        </Button>
        <Button colorScheme="blue" onClick={handleClickSub}>
          Subtrair 1
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Display;
