import { Container } from "./styled";

export function CardMetamask(props) {
  return (
    <Container onClick={props.onClick}>
      <h2>Conectar com a Metamask</h2>
      <img src="/image/logo.svg" alt="" />
    </Container>
  );
}
