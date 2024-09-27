'use client';

import { useWallet } from '@solana/wallet-adapter-react';
import { WalletButton } from '@/app/providers/SolanaProvider';

import { redirect } from 'next/navigation';

export default function AccountListFeature() {
  const { publicKey } = useWallet();

  if (publicKey) {
    return redirect(`/account/${publicKey.toString()}`);
  }

  return (
    <div className="hero py-[64px]">
      <div className="hero-content text-center">
        <WalletButton />
      </div>
    </div>
  );
}
