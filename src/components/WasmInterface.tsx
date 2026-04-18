'use client';
import { useState, useEffect, useRef } from 'react';
import wasmInit, { fetch_from_js } from "@aiamitsuri/interoperability-wrapper-wasm";

// Global variable to track if WASM is already loaded in the browser session
let isWasmLoaded = false;

export default function WasmInterface() {
  const [response, setResponse] = useState<string>("Initializing Wasm...");
  const initialized = useRef(false);

  useEffect(() => {
    // Prevent double-initialization in React Strict Mode
    if (initialized.current) return;
    initialized.current = true;

    const runWasm = async () => {
      try {
        // Only run wasmInit if it hasn't been loaded yet in this session
        if (!isWasmLoaded) {
          await wasmInit();
          isWasmLoaded = true;
        }

        const data = await fetch_from_js({ page: "1" });
        setResponse(JSON.stringify(data, null, 2));
      } catch (e) {
        console.error("WASM Error:", e);
        setResponse(`Error: ${e}`);
      }
    };

    runWasm();
  }, []);

  return (
     <main style={{ padding: '40px', fontFamily: 'monospace' }}>
       <h2>React SDK (Next.js)</h2>
       <hr />
       <pre style={{ 
         background: '#f4f4f4', 
         padding: '20px', 
         borderRadius: '8px', 
         border: '1px solid #ccc',
         overflowX: 'auto' 
       }}>
         {response}
       </pre>
     </main>
  );
}