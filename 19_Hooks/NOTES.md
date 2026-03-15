# Hooks - Detailed Hinglish Notes

## Is Folder me Kya Hua Hai?
- Is folder me `Hooks` topic ko step-by-step practical code ke through implement kiya gaya hai.
- Main goal: concept samajhna + uska practical implementation dekhna.

## Important Files (Yahi Dekho Pehle)
- `src/App.jsx`
- `src/main.jsx`

## Concept Kya Hai? (Simple Hinglish Explanation)
- **Hooks:** Hooks functions hain jo functional components me React features use karne dete hain.
- **useState:** Local state handle karne ke liye.
- **useEffect:** Side effects (API call, timer, event listener) handle karne ke liye.

## Diagram (Hooks Overview)
```mermaid
flowchart TD
    A[Functional Component] --> B[useState]
    A --> C[useEffect]
    B --> D[State Update]
    D --> E[Re-render]
    C --> F[Side Effect: API/Timer/Event]
```

## Code Flow Samjho (Step-by-Step)
- Component render hota hai aur initial state/props set hoti hain.
- User interaction ya lifecycle/event trigger se logic run hota hai.
- State/data update hota hai, phir React updated UI render karta hai.
- Isi flow ko samajh ke tum same concept kisi naye project me laga sakte ho.

## Real-World Use
- Ye concept production apps me readability, maintainability, aur performance improve karne ke liye use hota hai.
- Interview me mostly ye puchte hain: "kab use karoge, kyu use karoge, aur alternative kya hai?"
