import styled from 'styled-components/native';

export const MainContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  align-items: center;
  z-index: -1;
  position: relative;
`;

export const CardContainer = styled.TouchableOpacity`
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
  bottom: 30px;
  right: 10px;
  width: 48px;
  height: 48px;
  position: absolute;
  background-color: #888;
  border-radius: 30px;
  box-shadow: 5px 5px 8px rgb(0, 0, 0);
  elevation: 8;
  justify-content: center;
  align-items: center;
`;
export const LabelReport = styled.View`
  position: absolute;
  min-width: 150px;
  height: 48px;
  top: -50px;
`;
export const ReportView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  align-items: center;
  max-width: 700px;
  max-height: 700px;
  padding: 30px;
`;
