import { PlusOutlined, CloseOutlined } from '@ant-design/icons';
import { StyledSelectedToolList, Card, Name, PlusIcon, RemoveTool, RemoveText, ProductCount, ToolInfo } from './setuo-flow.styles';
import { toolOptions } from './toolOptions';

interface SelectedToolListProps {
    selectedTools: number[];
    setSelectedTools: (tools: number[]) => void;
}

const SelectedToolList = ({
    selectedTools,
    setSelectedTools
}: SelectedToolListProps): JSX.Element => {
    const array = [1, 2, 3, 4];

    const selectedToolsOption = selectedTools.map((id: number) => {
        return toolOptions.find((toolOption) => toolOption.id === id);
    });

    const handleRemoveClick = (id: number) => {
        const newSelectedTools = selectedTools.filter((toolId) => toolId !== id);
        setSelectedTools(newSelectedTools);
    }

    return (
        <StyledSelectedToolList>
            {
                array.map((_, index) => {
                    const selectedToolOption = selectedToolsOption[index];
                    if (selectedToolOption) {
                        const Icon = selectedToolOption.icon;
                        return (
                            <Card key={index}>
                                <ToolInfo >
                                    <Icon width='60' height='60' />
                                    <Name>{selectedToolOption.name}</Name>
                                    <RemoveTool>
                                        <CloseOutlined style={{
                                            color: 'red',
                                            fontSize: '10px',
                                        }} />
                                        <RemoveText onClick={() => handleRemoveClick(selectedToolOption.id)}>Remove</RemoveText>
                                    </RemoveTool>
                                </ToolInfo>
                            </Card>
                        )
                    }
                    return (
                        <Card key={index}>
                            <PlusIcon>
                                <PlusOutlined style={{ color: '#ABBBD6' }} />
                            </PlusIcon>
                        </Card>
                    )
                })
            }
            <ProductCount>{selectedTools.length || 0} Products added</ProductCount>
        </StyledSelectedToolList>
    );
};

export default SelectedToolList;