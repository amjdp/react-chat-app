import { ChatEngine } from 'react-chat-engine';
import './App.css';

const App = () => {
    return(
        <ChatEngine
            height = "100vh"
            projectID = "5787a6dd-f769-4e83-90f6-a0157dd136a0"
            userName = "javascriptmastery"
            userSecret = "123123"
        />
    );
}

export default App;