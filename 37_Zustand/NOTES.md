# Zustand - Detailed Hinglish Notes

## Is Folder me Kya Hua Hai?
- Is folder me `Zustand` topic ko step-by-step practical code ke through implement kiya gaya hai.
- Main goal: concept samajhna + uska practical implementation dekhna.

## Important Files (Yahi Dekho Pehle)
- `src/App.jsx`
- `src/components/Navbar.jsx`
- `src/main.jsx`
- `src/store.js`

## Concept Kya Hai? (Simple Hinglish Explanation)
- **Zustand:** Zustand lightweight global state management library hai.
- **Store:** Store me state + actions define karke components me directly use karte hain.

## Diagram (Zustand Flow)
```mermaid
flowchart LR
    ST[Zustand Store<br/>state + actions] --> C1[Component A]
    ST --> C2[Component B]
    C1 -->|call action| ST
    C2 -->|read selected state| ST
    ST --> UI[Reactive UI Update]
```

## Code Flow Samjho (Step-by-Step)
- Component render hota hai aur initial state/props set hoti hain.
- User interaction ya lifecycle/event trigger se logic run hota hai.
- State/data update hota hai, phir React updated UI render karta hai.
- Isi flow ko samajh ke tum same concept kisi naye project me laga sakte ho.

## Real-World Use
- Ye concept production apps me readability, maintainability, aur performance improve karne ke liye use hota hai.
- Interview me mostly ye puchte hain: "kab use karoge, kyu use karoge, aur alternative kya hai?"
