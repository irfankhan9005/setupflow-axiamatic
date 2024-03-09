import styled from 'styled-components';

export const SetupFlowWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`

export const StyledHeader = styled.div`
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const StyledButton = styled.div`
  text-decoration: underline;
  color: #C7D1E4;
  cursor: pointer;
`


export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  margin: 4rem auto;
  padding: 2rem;

  .ant-input-filled {
    height: 40px;

    .ant-input-prefix {
      margin-left: 4px;
      margin-right: 6px;
    }
  }

  .ant-btn-primary {
    width: 100%;
    height: 40px;

    &:disabled {
      background-color: #A5B7D4 !important;
      border-color: none !important;
      color: #fff !important;
    }import Header from './Header';

  }
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  margin-bottom: 2.5rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

export const StyledToolList = styled.ul`
  box-sizing: border-box;
  list-style-type: none;
  padding: 0;
  position: absolute;
  width: 400px;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-top: 12px;
  padding: 0.5rem;
  z-index: 10;
`;

export const ToolItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }

  &.selected {
    color: #FFFFFF;
    background-color: #4B6FFF;
  }
`;

export const ToolIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  margin-right: 0.5rem;
`;

export const ToolName = styled.span`
  flex: 1;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
    width: 100%;
    height: 40px;
`;

export const Steps = styled.div`
  width: 50px;
  height: 24px;
  text-align: center;
  display: flex;
  border-radius: 8px;
  background: linear-gradient(138deg, #5D6EFF 0%, #BA67FF 99%);
  justify-content: center;
  align-items: center;
  font-weight: 400;
  color: white;
  font-size: 16px;
  padding: 4px;
`;

export const Section = styled.div`
  width: 400px;
`;

export const NoToolsFound = styled.span`
  text-align: center;
  display: inline-block;
  width: 100%;
`;

export const StyledSelectedToolList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Card = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  border: 1px solid #F3F4F6;
`;

export const Name = styled.div`

`;

export const PlusIcon = styled.div`
  width: 45px;
  height: 50px;
  background: #EEF3F7;
  border: 1px solid #F3F4F6;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;

export const RemoveTool = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin-top: 1rem;
  cursor: pointer;
`;

export const RemoveText = styled.div`
  font-size: 12px;
  color: #9FAAB9;
`

export const ProductCount = styled.div`
  display: inline-block;
  text-align: center;
  width: 100%;
  color: #8E99AA;
`;

export const ToolInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-top: 12px;
`;
