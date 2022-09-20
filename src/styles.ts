import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #1b1c22;
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
  margin-top: -20px;
`;

export const Logo = styled.div`
  width: 6rem;
  height: 6rem;
  background-image: url('/images/white_logo.svg');
  background-repeat: no-repeat;
  background-size: contain;
`;

export const TitleText = styled.div`
  font-size: 2.7rem;
  color: #eee;
  font-weight: 600;
  margin-top: 10px;
`;

export const SubText = styled.div`
  font-size: 1.7rem;
  color: #aaa;
  margin-top: 10px;
  margin-bottom: 20px;
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

export const StoreButtonWrapper = styled.div`
  display: flex;
  margin-top: 12px;
  gap: 18px;
  flex-direction: column;
`;

export const StoreButton = styled.div`
  width: 134px;
  color: white;
  display: flex;
  border-radius: 8px;
  padding: 9px 12px;
  gap: 10px;
  background-color: #2a2a2a;
  cursor: pointer;
`;
export const StoreImage = styled.img`
  width: 32px;
  height: 32px;
`;
export const StoreTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const StoreText1 = styled.div`
  font-size: 11px;
  text-align: left;
  margin-bottom: 4px;
  color: #ccc;
`;
export const StoreText2 = styled.div`
  font-size: 17px;
  text-align: left;
  font-weight: 500;
`;

export const StoreImageButton = styled.img`
  width: auto;
  height: 50px;
  margin-bottom: 10px;
`;

export const Description = styled.div`
  font-size: 1.6rem;
  color: #eee;
  margin-top: 10px;
  margin-bottom: 30px;
  line-height: 24px;
  padding: 0 30px;
`;
