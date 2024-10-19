/**
 * @jest-environment jsdom
 */
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';

// createClient関数をモック
jest.mock('@supabase/supabase-js', () => ({
  createClient: jest.fn(() => ({
    from: jest.fn().mockReturnThis(),
    select: jest.fn().mockResolvedValue({ data: [], error: null }),
    insert: jest.fn().mockResolvedValue({ error: null }),
    delete: jest.fn().mockResolvedValue({ data: [], error: null }),
    eq: jest.fn().mockReturnThis(),
  })),
}));

describe('App', () => {
  test('タイトルがあること', async () => {
    render(<App />);
    const title = screen.getByTestId('title');

    await waitFor(() => {
      expect(title).toBeInTheDocument();
    });
  });
});
