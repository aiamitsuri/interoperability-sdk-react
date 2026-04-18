# BHILANI Interoperability by kantini, chanchali

Run SDK

    npm run dev

Usage

    // Define the interface
    interface FilterParams {
        language: string | null;
        integration: string | null;
        crates: string | null;
        developmentkit: string | null;
        page: string | null;
        ids: string | null;
    }
    
    // Data fetcher for Web (WASM)
    export async function fetchDataFromWasm(pageNumber: number): Promise<any> {
        
        // 1. Ensure WASM is loaded (singleton logic)
        await ensureWasmInitialized();
    
        // 2. Prepare the parameters
        const params: FilterParams = {
            language: null,
            integration: null,
            crates: null,
            developmentkit: null,
            page: pageNumber.toString(),
            ids: null,
        };
    
        // 3. Call the bridge function
        try {
            const response = await fetch_from_js(params);
            return response;
        } catch (error) {
            console.error("WASM Bridge Error:", error);
            throw error;
        }
    }

Screenshot (Page 1)
<img width="1920" height="1080" alt="react1" src="https://github.com/user-attachments/assets/f8235a4d-f2ff-4920-a2b2-38cf02408533" />
Screenshot (Page 4)
<img width="1920" height="1080" alt="react2" src="https://github.com/user-attachments/assets/0fba8caa-a2fc-4fcc-a7e6-0c0b3464a291" />

**@AIAmitSuri, Co-creator/Co-founder (🙏 Mata Shabri 🙏)**
