import { BurgerButtonContainer, BurgerLine } from './BurgerButton.styles';

type Props = {
  onClick: () => void;
  isActive: boolean;
};

export const BurgerButton = ({ onClick, isActive }: Props) => (
  <BurgerButtonContainer onClick={() => onClick()}>
    <BurgerLine open={isActive} />
    <BurgerLine open={isActive} />
    <BurgerLine open={isActive} />
  </BurgerButtonContainer>
);

export default BurgerButton;
