import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import OffersTable, { satsToBtc } from './index'
import { GET_CHANNELS } from '@/apollo/query'

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
    return <img {...props} />
  },
}))

const mockOffers = [
  {
    id: '1',
    name: 'Test Node',
    seller_score: 95,
    base_fee: 1000,
    fee_rate_cap: 2000,
    var_ppm: '15,000',
    apr_min: '3.50%',
    apr_max: '5.50%',
    min_block_length: 50000000,
    max_size: 100000000,
    available_liquidity: 75000000,
    tags: [
      { name: 'Node Runner' },
      { name: 'Fast' }
    ],
    orders: {
      locked_size: 200000000
    }
  }
]

const mocks = [
  {
    request: {
      query: GET_CHANNELS,
    },
    result: {
      data: {
        getOffers: {
          list: mockOffers
        }
      }
    },
  },
]

describe('OffersTable', () => {
  it('renders loading state', () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <OffersTable />
      </MockedProvider>
    )
    
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  });

    describe('satsToBtc', () => {
        it('converts sats to BTC', () => {
            expect(satsToBtc(100000000)).toBe('1.00')
        });

        it('converts sats to BTC with 4 decimal places when optional parameter is 4', () => {
            expect(satsToBtc(100000000, 4)).toBe("1.0000")
        });

        it('converts NaN to 0', () => {
            expect(satsToBtc(NaN)).toBe("0")
        });
    });
})
