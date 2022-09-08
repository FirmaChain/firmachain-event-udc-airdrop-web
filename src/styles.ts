import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #111;
`;

export const ContentsContainer = styled.div`
  width: 100%;
  height: 100%;
  flex: 1 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Logo = styled.div`
  width: 30px;
  height: 30px;
  background-image: url('/images/white_logo.svg');
  background-repeat: no-repeat;
  background-size: contain;
`;

export const TitleText = styled.div`
  font-size: 2.4rem;
  color: #eee;
  margin-top: 10px;
`;

export const SubText = styled.div`
  font-size: 2rem;
  color: #aaa;
  margin-top: 6px;
  margin-bottom: 10px;
`;

export const Button = styled.div<{ isActive: boolean }>`
  width: auto;
  min-width: 100px;
  height: 30px;
  margin-top: 10px;
  padding: 0 10px;
  line-height: 30px;
  background-color: ${(props) => (props.isActive ? '#3550de' : '#888')};
  border-radius: 50px;
  text-align: center;
  color: white;
  cursor: pointer;
  font-size: 1.6rem;
`;
