"use client";

import * as React from "react";
import NextUIProvider from "./NextUIProvider.tsx";
import { ClusterProvider } from "./ClusterProvider.tsx";
import { SolanaProvider } from "./SolanaProvider.tsx";
import ReactQueryProvider from "./ReactQueryProvider.tsx";

export interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {

  return (
    <>
			<NextUIProvider>
				<ReactQueryProvider>
					<ClusterProvider>
						<SolanaProvider>
							{children}
						</SolanaProvider>
					</ClusterProvider>
				</ReactQueryProvider>
			</NextUIProvider>
		</>
  );
}
