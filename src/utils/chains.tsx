import { Chain } from 'wagmi';

export const PolygonTestnet = {
  id: 80001,
  name: 'Polygon Testnet',
  network: 'Polygon Testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'MATIC',
    symbol: 'MATIC',
  },
  rpcUrls: {
    public: { http: ['https://rpc-mumbai.maticvigil.com'] },
    default: { http: ['https://rpc-mumbai.maticvigil.com'] },
  },
  blockExplorers: {
    etherscan: { name: 'Polygon Scan', url: 'https://mumbai.polygonscan.com' },
    default: { name: 'Polygon Scan', url: 'https://mumbai.polygonscan.com' },
  },

} as const satisfies Chain