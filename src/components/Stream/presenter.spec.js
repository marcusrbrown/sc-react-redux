import { render } from '@testing-library/react';
import Stream from './presenter';

describe('Stream', () => {
  const props = {
    tracks: [{ origin: { title: 'x' } }, { origin: { title: 'y' } }],
    onAuth: () => {},
    onPlay: () => {}
  };

  it('shows two elements', () => {
    const { container } = render(<Stream {...props} />);

    expect(container.querySelectorAll('.track')).to.have.length(2);
  });
});
