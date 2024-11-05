import { render, fireEvent } from '@testing-library/svelte';
import App from './App.svelte';

test('render a preview of a playing card', () => {
  const { getByText } = render(Card, { props: { url: '/cards/1.png' } });
});
