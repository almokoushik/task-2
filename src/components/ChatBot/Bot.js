import React from 'react';
import ChatBot from 'react-simple-chatbot';

import { ThemeProvider } from 'styled-components';

// all available props
const theme = {
    background: '#E7F5FE',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#A1A1FD',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#49494B',
    botFontColor: '#fff',
    userBubbleColor: '#B0B1B3',
    userFontColor: '#4a4a4a',
};
const steps =
    [
    {
        id: 'intro',
        message: 'Do you agree to the Terms and Conditions?',
        trigger: 'intro-user',
    },
    {
        id: 'intro-user',
        options: [
            { value: 'y', label: 'Yes', trigger: 'yes-response' },
            { value: 'n', label: 'No', trigger: 'no-response' },
        ]
    },
    {
        id: 'yes-response',
        message: 'Great!',
        end: true,
    },
    {
        id: 'no-response',
        message: 'Sorry to hear that.',
        end: true,
    },
        ]

const Bot = () => {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <ChatBot steps={steps} />;
            </ThemeProvider>
        </div>
    );
};

export default Bot;