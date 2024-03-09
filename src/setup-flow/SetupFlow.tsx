import React, { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons'
import { Input, Button, notification } from 'antd'
import { ToolOption } from './setup-flow.types';
import {
    SetupFlowWrapper,
    Container,
    Title,
    Description,
    ButtonContainer,
    Steps,
    Section
} from './setuo-flow.styles';
import Header from './Header';
import SelectedToolList from './SelectedToolList';
import ToolList from './ToolList';
import { toolOptions } from './toolOptions';
import { saveToolsToBackend } from './mockApi';

const SetupFlow = (): JSX.Element => {
    const [selectedTools, setSelectedTools] = useState<number[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchToolOptions, setSearchToolOptions] = useState<ToolOption[]>(toolOptions);
    const [showToolList, setShowToolList] = useState(false);
    const [savingToBackend, setSavingToBackend] = useState(false);

    const [api, contextHolder] = notification.useNotification();

    const handleToolSelection = (toolId: number) => {
        if(!selectedTools.includes(toolId)) {
            setSelectedTools([...selectedTools, toolId]);
        }
        setShowToolList(false);
        setSearchTerm('')
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.toLowerCase();
        setSearchTerm(value);
        setShowToolList(value.length > 0);
        setSearchToolOptions(toolOptions.filter((tool) => tool.name.toLowerCase().startsWith(value)));
    };

    const handleNextClick = async () => {
        try {
            setSavingToBackend(true)
            await saveToolsToBackend();
            api.success({
                key: 'key',
                message: 'Selected tools saved successfully!',
            });
        } catch (error) {
            console.error('Error saving selected tools:', { error });
            api.error({
                key: 'key',
                message: 'Error saving selected tools',
            });
        } finally {
            setSavingToBackend(false);
        }
    };


    return (
        <SetupFlowWrapper>
            <Header />
            <Container>
                <Section>
                    <SelectedToolList selectedTools={selectedTools}
                        setSelectedTools={setSelectedTools} />
                </Section>
                <Section>
                    <Steps>1 of 3</Steps>
                    <Title>Let's add your internal tools</Title>
                    <Description>
                        Search to quickly add products your team uses today.
                        You'll be able to add as many as you need later but for now let's add four.
                    </Description>
                    <div style={{ position: 'relative' }}>
                        <Input placeholder="Search for any software..." variant="filled" prefix={<SearchOutlined style={{ color: '#C1C2C8' }} />} value={searchTerm}
                            onChange={handleSearchChange} disabled={selectedTools.length === 4} />
                        {showToolList ? (
                            <ToolList
                                toolOptions={searchToolOptions}
                                onToolSelect={handleToolSelection}
                                selectedTools={selectedTools}
                            />
                        ) : null}
                    </div>
                    <ButtonContainer>
                        <Button onClick={handleNextClick} type="primary" loading={savingToBackend} disabled={selectedTools.length < 4}>
                            {savingToBackend ? 'Saving To Backend' : 'Next'}
                        </Button>
                    </ButtonContainer>
                </Section>
            </Container>
            {contextHolder}
        </SetupFlowWrapper>

    );
};

export default SetupFlow;