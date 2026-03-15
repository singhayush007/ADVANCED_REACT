# UseCallback - Detailed Hinglish Notes

## Is Folder me Kya Hua Hai?
- Is folder me `UseCallback` topic ko step-by-step practical code ke through implement kiya gaya hai.
- Main goal: concept samajhna + uska practical implementation dekhna.

## Important Files (Yahi Dekho Pehle)
- `src/App.jsx`
- `src/components/Child.jsx`
- `src/main.jsx`

## Concept Kya Hai? (Simple Hinglish Explanation)
- **useCallback:** `useCallback` function reference memoize karta hai.
- **Stable Function Props:** Child components ko stable callbacks dene se extra re-renders kam hote hain.

## Diagram (useCallback Flow)
```mermaid
flowchart TD
    D[Dependencies] --> Q{Deps changed?}
    Q -->|No| F1[Reuse old function ref]
    Q -->|Yes| F2[Create new function ref]
    F1 --> C[Child Component]
    F2 --> C
```

## Code Flow Samjho (Step-by-Step)
- Component render hota hai aur initial state/props set hoti hain.
- User interaction ya lifecycle/event trigger se logic run hota hai.
- State/data update hota hai, phir React updated UI render karta hai.
- Isi flow ko samajh ke tum same concept kisi naye project me laga sakte ho.

## Real-World Use
- Ye concept production apps me readability, maintainability, aur performance improve karne ke liye use hota hai.
- Interview me mostly ye puchte hain: "kab use karoge, kyu use karoge, aur alternative kya hai?"
