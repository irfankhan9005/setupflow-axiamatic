import React from 'react';
import { CheckOutlined } from '@ant-design/icons'
import { ToolOption } from './setup-flow.types';
import { StyledToolList, ToolItem, ToolIcon, ToolName, NoToolsFound } from './setuo-flow.styles';


interface ToolListProps {
    toolOptions: ToolOption[];
    selectedTools?: number[];
    onToolSelect?: (toolId: number) => void;
}

const ToolList: React.FC<ToolListProps> = ({
    toolOptions,
    selectedTools = [],
    onToolSelect,
}) => {

    return (
        <StyledToolList>
            {toolOptions.length ? toolOptions.map(({ id, name, icon: Icon }) => (
                <ToolItem key={id} onClick={() => onToolSelect?.(id)} className={selectedTools.includes(id) ? 'selected' : ''}>
                    <ToolIcon>
                        <Icon />
                    </ToolIcon>
                    <ToolName>{name}</ToolName>
                    {selectedTools.includes(id) ? <CheckOutlined /> : null}
                </ToolItem>
            )) : <NoToolsFound>No tools found</NoToolsFound>}
        </StyledToolList>
    );
};

export default ToolList;