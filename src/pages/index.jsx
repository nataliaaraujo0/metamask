import { useState } from "react";
import { CardAvatar } from "../components/CardAvatar";
import { CardMetamask } from "../components/CardMetamask";
import { Container } from "./styled";

export function Home() {
  const [avatar, setRenderAvatar] = useState(false);
  const checkAvatar = () => {
    setRenderAvatar(!avatar);
  };
  //guardar informacoes
  const [isConnected, setIsConnected] = useState(false); //começa desconectado
  //endereço da carteira do user
  const [walletAdress, setWallet] = useState("");

  const handleConnectWallet = async () => {
    //verificar se ja ta conectado
    if (isConnected) return alert("Conta já conectada :" + walletAdress);

    const walletResponse = await connectWallet();
    setIsConnected(walletResponse.connectedStatus);
    setWallet(walletResponse.address);
  };

  // se o use tem a metamask no navegador
  const connectWallet = async () => {
    //se tem extensao
    if (window.ethereum) {
      try {
        const address = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        //user conseguiu se conectar, status true
        const object = {
          connectedStatus: true,
          status: "Conectado com sucesso",
          address,
        };

        return object;
      } catch (err) {
        //se tudo der errado, erro ao conectar com a carteira
        return {
          connectedStatus: false,
        };
      }
    } else {
      //caso nao tenha, return status error
      return {
        connectedStatus: false,
        status: "Metamask não instalada no navegador",
      };
    }
  };

  return (
    <Container>
      {!avatar && (
        <CardMetamask onClick={(checkAvatar, () => handleConnectWallet())} />
      )}
      {avatar && <CardAvatar />}
    </Container>
  );
}
