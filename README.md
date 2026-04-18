# BHILANI Interoperability by kantini, chanchali

Run SDK

    npm run dev

Usage

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
             {response}
      );
    }

Screenshot
<img width="1920" height="1080" alt="Screenshot (192)" src="https://github.com/user-attachments/assets/dabb2eca-f135-466a-bbd3-a06a09ef07ef" />

**@AIAmitSuri, Co-creator/Co-founder (🙏 Mata Shabri 🙏)**
