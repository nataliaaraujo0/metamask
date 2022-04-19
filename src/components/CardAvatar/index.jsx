import { Container, ContainerAvatar } from "./styled";

export function CardAvatar(props) {
  return (
    <Container>
      <img src="/image/avatar.svg" alt="" />
      <strong>Conta conectada</strong>

      <ContainerAvatar>
        <span> {props.address} </span>
      </ContainerAvatar>
    </Container>
  );
}
