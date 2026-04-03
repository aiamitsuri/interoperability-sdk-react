'use client';

import { useState, useEffect } from 'react';
import wasmInit, { fetch_from_js } from "@aiamitsuri/interoperability-wrapper-wasm";

export default function Home() {
  
  const [response, setResponse] = useState<string>("Loading Wasm...");

  useEffect(() => {

    const initAndFetch = async () => {
      try {
        await wasmInit();
        const data = await fetch_from_js({ page: "1" });       
        setResponse(JSON.stringify(data, null, 2));
      } catch (err) {
        setResponse(`Error: ${String(err)}`);
      }
    };

    initAndFetch();
	
  }, []);

  return (
    <main style={{ padding: '40px', fontFamily: 'monospace' }}>
      <h1>React SDK (Next.js)</h1>
      <hr />
      <div style={{ marginTop: '20px' }}>
        <strong>Output</strong>
        <pre style={{ 
          background: '#f4f4f4', 
          padding: '20px', 
          borderRadius: '8px',
          overflowX: 'auto',
          border: '1px solid #ccc'
        }}>
          {response}
        </pre>
      </div>
    </main>
  );
}