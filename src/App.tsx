import { useEffect } from 'react';
import axios from 'axios';
import './default.css';

import { MainContainer, ContentsContainer, Logo, TitleText, SubText, StoreImageButton, Description } from './styles';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      exeDeepLink();
    }, 1000);
  }, []);

  const redirectStore = () => {
    const ua = navigator.userAgent.toLowerCase();

    window.location.href =
      ua.indexOf('android') > -1
        ? 'https://play.google.com/store/apps/details?id=com.firma_station_mobile'
        : 'https://apps.apple.com/kr/app/id1611660902';
  };

  function exeDeepLink() {
    axios
      .get(`${process.env.REACT_APP_API_HOST}/airdrop`)
      .then((response) => {
        const url = response.data.result.qrcode;
        window.location.href = url;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <MainContainer>
      <ContentsContainer>
        <Logo />
        <TitleText>FIRMACHAIN</TitleText>
        <SubText>UDC 2022 AIRDROP EVENT</SubText>
        <Description>Please install from the link provided below.</Description>
        <StoreImageButton
          src='/images/iOS_store.png'
          onClick={() => (window.location.href = 'https://apps.apple.com/kr/app/id1611660902')}
        />
        <StoreImageButton
          src='/images/google_play.png'
          onClick={() =>
            (window.location.href = 'https://play.google.com/store/apps/details?id=com.firma_station_mobile')
          }
        />
      </ContentsContainer>
    </MainContainer>
  );
};

export default App;
