import React from 'react';
import { Button } from 'antd';
import Title from './components/Title';
import AuthButton from 'components/AuthButton';

const App = () => {
    return (
        <div>
            <h1>Hello</h1>
            <Title type="small" title="small" />
            <Title type="large" title="large" />
            <Button>点我</Button>
            <AuthButton>login</AuthButton>
        </div>
    );
};

export default App;
