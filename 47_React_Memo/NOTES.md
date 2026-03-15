# React Memo - Detailed Hinglish Notes

## Is Folder me Kya Hua Hai?
- Is folder me `React Memo` topic ko step-by-step practical code ke through implement kiya gaya hai.
- Main goal: concept samajhna + uska practical implementation dekhna.

## Important Files (Yahi Dekho Pehle)
- `src/App.jsx`
- `src/components/Alpha.jsx`
- `src/main.jsx`

## Concept Kya Hai? (Simple Hinglish Explanation)
- **React.memo:** `React.memo` same props hone par component re-render skip karta hai.
- **Render Optimization:** Unnecessary re-render kam karke performance improve hoti hai.

## Diagram (React.memo)
```mermaid
flowchart LR
    P[Parent Re-render] --> C{Props changed?}
    C -->|No| S[Skip Child Re-render]
    C -->|Yes| R[Re-render Child]
```

## Code Flow Samjho (Step-by-Step)
- Component render hota hai aur initial state/props set hoti hain.
- User interaction ya lifecycle/event trigger se logic run hota hai.
- State/data update hota hai, phir React updated UI render karta hai.
- Isi flow ko samajh ke tum same concept kisi naye project me laga sakte ho.

## Real-World Use
- Ye concept production apps me readability, maintainability, aur performance improve karne ke liye use hota hai.
- Interview me mostly ye puchte hain: "kab use karoge, kyu use karoge, aur alternative kya hai?"
