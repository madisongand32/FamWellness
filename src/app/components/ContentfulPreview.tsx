'use client'; // This makes the component client-side
// import "@contentful/live-preview/style.css";
import { ContentfulLivePreviewProvider } from '@contentful/live-preview/react';
import React, { createContext } from 'react';
import { ReactNode } from 'react';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface ContentfulProviderProps {
    children: ReactNode; // Specify the type for children
    isEnabled: boolean;
}

const ContentfulPreview = ({ children, isEnabled }: ContentfulProviderProps) => {
  return (
    <ContentfulLivePreviewProvider
    locale="en-US"
    enableInspectorMode={isEnabled}
    enableLiveUpdates={isEnabled}
    // debug={isEnabled} 
    >
    {children}
    </ContentfulLivePreviewProvider>
  );
};

export default ContentfulPreview;
