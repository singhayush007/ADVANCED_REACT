# ContextAPI - Detailed Hinglish Notes

## Is Folder me Kya Hua Hai?
- Is folder me `ContextAPI` topic ko step-by-step practical code ke through implement kiya gaya hai.
- Main goal: concept samajhna + uska practical implementation dekhna.

## Important Files (Yahi Dekho Pehle)
- `src/App.jsx`
- `src/MyContext.jsx`
- `src/components/A.jsx`
- `src/components/B.jsx`
- `src/components/C.jsx`
- `src/components/D.jsx`

## Concept Kya Hai? (Simple Hinglish Explanation)
- **Context API:** Context global data share karta hai bina har level par props pass kiye.
- **Provider:** Provider component se data tree me available hota hai.
- **Consumer/useContext:** `useContext` se component direct shared state read karta hai.

## Diagram (Context API Flow)
```mermaid
flowchart TD
    S[Shared State] --> P[Context Provider]
    P --> C1[Component A]
    P --> C2[Component B]
    P --> C3[Component C]
    C1 --> U[useContext]
    C2 --> U
    C3 --> U
```

## Code Flow Samjho (Step-by-Step)
- Component render hota hai aur initial state/props set hoti hain.
- User interaction ya lifecycle/event trigger se logic run hota hai.
- State/data update hota hai, phir React updated UI render karta hai.
- Isi flow ko samajh ke tum same concept kisi naye project me laga sakte ho.

## Real-World Use
- Ye concept production apps me readability, maintainability, aur performance improve karne ke liye use hota hai.
- Interview me mostly ye puchte hain: "kab use karoge, kyu use karoge, aur alternative kya hai?"
