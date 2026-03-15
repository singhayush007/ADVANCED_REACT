# React Redux - Detailed Hinglish Notes

## Is Folder me Kya Hua Hai?
- Is folder me `React Redux` topic ko step-by-step practical code ke through implement kiya gaya hai.
- Main goal: concept samajhna + uska practical implementation dekhna.

## Important Files (Yahi Dekho Pehle)
- `src/App.jsx`
- `src/main.jsx`
- `src/redux/action/productAction.js`
- `src/redux/constants/productConstants.js`
- `src/redux/reducer/cartReducer.js`
- `src/redux/reducer/index.js`

## Concept Kya Hai? (Simple Hinglish Explanation)
- **Redux:** Redux predictable global state container hai jahan single source of truth hoti hai.
- **Reducer:** Reducer pure function hoti hai jo action ke base par new state return karti hai.
- **Action:** Action object batata hai state me kya change request hua hai.

## Diagram (Redux Core Flow)
```mermaid
flowchart LR
    UI[React Component] -->|dispatch(action)| S[Redux Store]
    S -->|run| R[Reducer]
    R -->|new state| S
    S -->|subscribe/select| UI
```

## Code Flow Samjho (Step-by-Step)
- Component render hota hai aur initial state/props set hoti hain.
- User interaction ya lifecycle/event trigger se logic run hota hai.
- State/data update hota hai, phir React updated UI render karta hai.
- Isi flow ko samajh ke tum same concept kisi naye project me laga sakte ho.

## Real-World Use
- Ye concept production apps me readability, maintainability, aur performance improve karne ke liye use hota hai.
- Interview me mostly ye puchte hain: "kab use karoge, kyu use karoge, aur alternative kya hai?"
