import styled from 'styled-components/native';

export const MainContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  align-items: center;
  padding: 30px;
  z-index: -1;
  position: relative;
`;

export const CardContainer = styled.View`
  justify-content: center;
  width: 300px;
  min-height: 150px;
  gap: 20px;
  background-color: #0f172a;
  border-radius: 28px;
  padding: 22px;
  box-shadow: 5px 5px 8px rgba(0, 0, 50, 1);
  elevation: 5;
  position: relative;
  z-index: 0;
`;

export const ReportButton = styled.TouchableOpacity`
  z-index: 1;
  bottom: 40px;
  right: 10px;
  width: 50px;
  height: 50px;
  position: absolute;
  background-color: transparent;
  border-radius: 30px;
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 1);
  elevation: 8;
  justify-content: center;
  align-items: center;
`;
