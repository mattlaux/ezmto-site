import { screen, render } from '@testing-library/react';
import Home from '../pages/index';

describe('<Home />', () => {
  test('renders banner with text and two buttons and all images', () => {
    render(<Home />);

    const bannerText = screen.getByText(
      /ezMTO eliminates 95% of time and energy for a material takeoff/i
    );
    const bannerSubText = screen.getByText(
      /Discover how ezMTO can increase your efficiency/i
    );
    const trialButton = screen.getByRole('button', {
      name: /start a free trial/i,
    });
    const demoButton = screen.getByRole('button', { name: /watch a demo/i });
    const images = screen.getAllByRole('img');

    expect(bannerText).toBeInTheDocument();
    expect(bannerSubText).toBeInTheDocument();
    expect(trialButton).toBeInTheDocument();
    expect(demoButton).toBeInTheDocument();
    expect(images).toHaveLength(8);
  });

  test('renders 4 cards', () => {
    render(<Home />);

    const title = screen.getByText(
      /discover how ezmto can simplify your material takeoff and quote process/i
    );
    const card1 = screen.getByText(/automated mtos/i);
    const card2 = screen.getByText(/review previous versions of mtos/i);
    const card3 = screen.getByText(/efficient quotes/i);
    const card4 = screen.getByText(/automated bid tabs/i);
    const demoButtons = screen.getAllByRole('button', { name: /view demo/i });

    expect(title).toBeInTheDocument();
    expect(card1).toBeInTheDocument();
    expect(card2).toBeInTheDocument();
    expect(card3).toBeInTheDocument();
    expect(card4).toBeInTheDocument();
    expect(demoButtons).toHaveLength(4);
  });

  test('renders table', () => {
    render(<Home />);

    const tableTitle = screen.getByText(
      /simple, straight-forward cost savings/i
    );
    const tableSubTitle = screen.getByText(
      /costs of doing a 100 isometric takeoff in-house/i
    );
    const table = screen.getByRole('table');
    const tableNotes = screen.getByText(
      /avg determined from previous takeoffs/i
    );

    expect(tableTitle).toBeInTheDocument();
    expect(tableSubTitle).toBeInTheDocument();
    expect(table).toBeInTheDocument();
    expect(tableNotes).toBeInTheDocument();
  });

  test('renders side-by-side comparison', () => {
    render(<Home />);

    const comparisonTitle = screen.getByText(/save precious time and money/i);
    const ctaText = screen.getByText(
      /upload your isometrics to ezmto's software/i
    );
    const ctaButton = screen.getByRole('button', {
      name: /click here to get a free material takeoff on us/i,
    });
    const image = screen.getByRole('img', { name: '' });

    expect(comparisonTitle).toBeInTheDocument();
    expect(ctaText).toBeInTheDocument();
    expect(ctaButton).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });

  test('renders benefits section', () => {
    render(<Home />);

    const title1 = screen.getByText(/cost-effective/i);
    const title2 = screen.getByText(/rapid turnaround/i);
    const title3 = screen.getByText(/minimize mistakes and confusion/i);

    expect(title1).toBeInTheDocument();
    expect(title2).toBeInTheDocument();
    expect(title3).toBeInTheDocument();
  });
});
