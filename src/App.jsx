import { useEffect, useRef } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';
import './App.css';

export const App = () => {
	useEffect(() => {
		createChat({
			webhookUrl: 'https://n8n.srv1025595.hstgr.cloud/webhook/0b3aba4b-eb27-41f2-88d8-8296ac90553c/chat',
            mode: 'fullscreen',
            showWelcomeScreen: true, 
            initialMessages: [
                'Olá! 👋',
                'Como posso ajudar você hoje?'
            ],
            i18n: {
                en: {
                    title: 'N8N Chat Test',
                    subtitle: 'Teste de integração com N8N',
                    footer: 'Powered by n8n',
                    getStarted: 'Nova Conversa',
                    inputPlaceholder: 'Digite sua mensagem...',
                },
            },
		});
	}, []);

	return (<div></div>);
};

export default App;
