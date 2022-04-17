/* eslint-disable testing-library/no-node-access */
import { render } from '@testing-library/react';
import React from 'react';
import SEO from '../components/SEO/seo';

jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: Array<React.ReactElement> }) => {
      return <>{children}</>;
    },
  };
});

describe('<SEO />', () => {
  test('returns default data when no props passed', () => {
    render(<SEO />);
    expect(document.characterSet).toBe('UTF-8');
    expect(document.querySelector('meta[name=viewport]').content).toBe(
      'width=device-width, initial-scale=1.0'
    );
    expect(document.querySelector('meta[name=keywords]').content).toBe(
      'material take-off, pipe fabrication, MTO'
    );
    expect(document.querySelector('meta[name=author]').content).toBe(
      'Matt Laux'
    );
    expect(document.title).toBe('ezMTO | ezMTO');
    expect(document.querySelector('meta[name=description').content).toBe(
      'ezMTO saves time and money by automating and simplifying the material takeoff and bid process.'
    );
    expect(document.querySelector('meta[itemprop=name]').content).toBe('ezMTO');
    expect(document.querySelector('meta[itemprop=description').content).toBe(
      'ezMTO saves time and money by automating and simplifying the material takeoff and bid process.'
    );
    expect(document.querySelector('meta[itemprop=image').content).toBe(
      'https://ezmto.com/images/chemicalPlant.jpg'
    );
    expect(document.querySelector("meta[name='twitter:card']").content).toBe(
      'summary_large_image'
    );
    expect(document.querySelector("meta[name='twitter:site']").content).toBe(
      '@cheatcodetuts'
    );
    expect(document.querySelector("meta[name='twitter:title']").content).toBe(
      'ezMTO'
    );
    expect(
      document.querySelector("meta[name='twitter:description']").content
    ).toBe(
      'ezMTO saves time and money by automating and simplifying the material takeoff and bid process.'
    );
    expect(document.querySelector("meta[name='twitter:creator']").content).toBe(
      '@cheatcodetuts'
    );
    expect(
      document.querySelector("meta[name='twitter:image:src']").content
    ).toBe('https://ezmto.com/images/chemicalPlant.jpg');
    expect(document.querySelector("meta[name='og:title']").content).toBe(
      'ezMTO'
    );
    expect(document.querySelector("meta[name='og:type']").content).toBe(
      'website'
    );
    expect(document.querySelector("meta[name='og:url']").content).toBe(
      'https://ezmto.com'
    );
    expect(document.querySelector("meta[name='og:image']").content).toBe(
      'https://ezmto.com/images/chemicalPlant.jpg'
    );
    expect(document.querySelector("meta[name='og:description']").content).toBe(
      'ezMTO saves time and money by automating and simplifying the material takeoff and bid process.'
    );
    expect(document.querySelector("meta[name='og:site_name']").content).toBe(
      'ezMTO'
    );
    expect(
      document.querySelector("meta[name='og:published_time']").content
    ).toBeTruthy();
    expect(
      document.querySelector("meta[name='og:modified_time']").content
    ).toBeTruthy();
  });

  test('returns proper meta tags when props are passed', () => {
    render(
      <SEO
        url="https://testurl.com"
        title="Test Title"
        description="Test description"
        image="test image path"
        schemaType="website"
        createdAt="2022-01-01"
        updatedAt="2022-02-02"
      />,
      { container: document.head }
    );
    expect(document.characterSet).toBe('UTF-8');
    expect(document.querySelector('meta[name=viewport]').content).toBe(
      'width=device-width, initial-scale=1.0'
    );
    expect(document.querySelector('meta[name=keywords]').content).toBe(
      'material take-off, pipe fabrication, MTO'
    );
    expect(document.querySelector('meta[name=author]').content).toBe(
      'Matt Laux'
    );
    expect(document.title).toBe('Test Title | ezMTO');
    expect(document.querySelector('meta[name=description').content).toBe(
      'Test description'
    );
    expect(document.querySelector('meta[itemprop=name]').content).toBe(
      'Test Title'
    );
    expect(document.querySelector('meta[itemprop=description').content).toBe(
      'Test description'
    );
    expect(document.querySelector('meta[itemprop=image').content).toBe(
      'test image path'
    );
    expect(document.querySelector("meta[name='twitter:card']").content).toBe(
      'summary_large_image'
    );
    expect(document.querySelector("meta[name='twitter:site']").content).toBe(
      '@cheatcodetuts'
    );
    expect(document.querySelector("meta[name='twitter:title']").content).toBe(
      'Test Title'
    );
    expect(
      document.querySelector("meta[name='twitter:description']").content
    ).toBe('Test description');
    expect(document.querySelector("meta[name='twitter:creator']").content).toBe(
      '@cheatcodetuts'
    );
    expect(
      document.querySelector("meta[name='twitter:image:src']").content
    ).toBe('test image path');
    expect(document.querySelector("meta[name='og:title']").content).toBe(
      'Test Title'
    );
    expect(document.querySelector("meta[name='og:type']").content).toBe(
      'website'
    );
    expect(document.querySelector("meta[name='og:url']").content).toBe(
      'https://testurl.com'
    );
    expect(document.querySelector("meta[name='og:image']").content).toBe(
      'test image path'
    );
    expect(document.querySelector("meta[name='og:description']").content).toBe(
      'Test description'
    );
    expect(document.querySelector("meta[name='og:site_name']").content).toBe(
      'ezMTO'
    );
    expect(
      document.querySelector("meta[name='og:published_time']").content
    ).toBe('2022-01-01');
    expect(
      document.querySelector("meta[name='og:modified_time']").content
    ).toBe('2022-02-02');
  });
});
