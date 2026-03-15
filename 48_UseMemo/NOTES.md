# UseMemo - Detailed Hinglish Notes

## Is Folder me Kya Hua Hai?
- Is folder me `UseMemo` topic ko step-by-step practical code ke through implement kiya gaya hai.
- Main goal: concept samajhna + uska practical implementation dekhna.

## Important Files (Yahi Dekho Pehle)
- `src/App.jsx`
- `src/components/Count.jsx`
- `src/main.jsx`

## Concept Kya Hai? (Simple Hinglish Explanation)
- **useMemo:** `useMemo` expensive computation ka result cache/memoize karta hai.
- **Dependency Array:** Dependencies change hone par hi recalculation hoti hai.

## Diagram (useMemo Flow)
```mermaid
flowchart TD
    I[Inputs/Dependencies] --> C{Deps changed?}
    C -->|No| V[Use Cached Value]
    C -->|Yes| X[Run Expensive Calc]
    X --> M[Memoized Result]
    M --> UI[Render with Result]
```

## Code Flow Samjho (Step-by-Step)
- Component render hota hai aur initial state/props set hoti hain.
- User interaction ya lifecycle/event trigger se logic run hota hai.
- State/data update hota hai, phir React updated UI render karta hai.
- Isi flow ko samajh ke tum same concept kisi naye project me laga sakte ho.

## Real-World Use
- Ye concept production apps me readability, maintainability, aur performance improve karne ke liye use hota hai.
- Interview me mostly ye puchte hain: "kab use karoge, kyu use karoge, aur alternative kya hai?"
