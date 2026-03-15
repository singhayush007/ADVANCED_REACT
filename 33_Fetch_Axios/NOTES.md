# Fetch Axios - Detailed Hinglish Notes

## Is Folder me Kya Hua Hai?
- Is folder me `Fetch Axios` topic ko step-by-step practical code ke through implement kiya gaya hai.
- Main goal: concept samajhna + uska practical implementation dekhna.

## Important Files (Yahi Dekho Pehle)
- `src/App.jsx`
- `src/main.jsx`

## Concept Kya Hai? (Simple Hinglish Explanation)
- **API Fetching:** Backend/API se data laane ka asynchronous process hota hai.
- **Promise/Async:** Response aane tak app ko loading/error handle karna padta hai.
- **Axios:** Axios HTTP client hai jo request/response handling easy bana deta hai.

## Diagram (API Fetch Flow)
```mermaid
flowchart TD
    A[Component Mount / User Action] --> B[API Request: fetch/axios]
    B --> C{Response}
    C -->|Success| D[Set Data in State]
    C -->|Error| E[Set Error State]
    D --> F[Render Data UI]
    E --> G[Render Error UI]
```

## Code Flow Samjho (Step-by-Step)
- Component render hota hai aur initial state/props set hoti hain.
- User interaction ya lifecycle/event trigger se logic run hota hai.
- State/data update hota hai, phir React updated UI render karta hai.
- Isi flow ko samajh ke tum same concept kisi naye project me laga sakte ho.

## Real-World Use
- Ye concept production apps me readability, maintainability, aur performance improve karne ke liye use hota hai.
- Interview me mostly ye puchte hain: "kab use karoge, kyu use karoge, aur alternative kya hai?"
