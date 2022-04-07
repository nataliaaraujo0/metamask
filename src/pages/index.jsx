import { useState } from "react";
import { CardAvatar } from "../components/CardAvatar";
import { CardMetamask } from "../components/CardMetamask";
import { Container } from "./styled";

export function Home() {
  const [avatar, setRenderAvatar] = useState(false);

  const checkAvatar = () => {
    setRenderAvatar(!avatar);
  };
  console.log(avatar);

  return (
    <Container>
      {!avatar && <CardMetamask onClick={checkAvatar} />}
      {avatar && <CardAvatar />}
    </Container>
  );
}
