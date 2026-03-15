# UseRef - Detailed Hinglish Notes

## Is Folder me Kya Hua Hai?
- Is folder me `UseRef` topic ko step-by-step practical code ke through implement kiya gaya hai.
- Main goal: concept samajhna + uska practical implementation dekhna.

## Important Files (Yahi Dekho Pehle)
- `src/App.jsx`
- `src/main.jsx`

## Concept Kya Hai? (Simple Hinglish Explanation)
- **useRef:** `useRef` mutable value hold karta hai bina re-render trigger kiye.
- **DOM Access:** Ref se input focus, scroll ya imperative DOM actions kar sakte ho.
- **State vs Ref:** UI update chahiye to state, sirf reference chahiye to ref use karo.

## Diagram (useRef Flow)
```mermaid
flowchart LR
    R[useRef object] --> D[DOM Element ref]
    R --> M[Mutable Value]
    D --> F[focus/scroll/action]
    M --> N[No re-render]
```

## Code Flow Samjho (Step-by-Step)
- Component render hota hai aur initial state/props set hoti hain.
- User interaction ya lifecycle/event trigger se logic run hota hai.
- State/data update hota hai, phir React updated UI render karta hai.
- Isi flow ko samajh ke tum same concept kisi naye project me laga sakte ho.

## Real-World Use
- Ye concept production apps me readability, maintainability, aur performance improve karne ke liye use hota hai.
- Interview me mostly ye puchte hain: "kab use karoge, kyu use karoge, aur alternative kya hai?"
