import React from 'react';
import { render } from '@testing-library/react';
import Title from '../../src/components/Title';

describe('Title Component', () => {
    it('渲染文字大字', () => {
        const { getByText } = render(<Title type="large" title="大字" />);
        const content = getByText('大字');
        expect(content).toMatchSnapshot();
    });

    it('渲染文字小字', () => {
        const { getByText } = render(<Title type="small" title="小字" />);
        const content = getByText('小字');
        expect(content).toMatchSnapshot();
    });
});
