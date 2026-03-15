# React Router DOM - Detailed Hinglish Notes

## Is Folder me Kya Hua Hai?
- Is folder me `React Router DOM` topic ko step-by-step practical code ke through implement kiya gaya hai.
- Main goal: concept samajhna + uska practical implementation dekhna.

## Important Files (Yahi Dekho Pehle)
- `src/App.jsx`
- `src/components/A1.jsx`
- `src/components/About.jsx`
- `src/components/B1.jsx`
- `src/components/Contact.jsx`
- `src/components/Help.jsx`

## Concept Kya Hai? (Simple Hinglish Explanation)
- **React Router DOM:** `react-router-dom` SPA me client-side routing provide karta hai.
- **Route:** `Route` URL path ko specific component se map karta hai.
- **Navigation:** `Link`/`NavLink` se page reload bina route change hota hai.

## Diagram (Routing Flow)
```mermaid
flowchart LR
    U[User Click Link/NavLink] --> R[Route Change]
    R --> M[Route Match]
    M --> C[Render Matched Component]
    C --> UI[Updated Page View]
```

## Code Flow Samjho (Step-by-Step)
- Component render hota hai aur initial state/props set hoti hain.
- User interaction ya lifecycle/event trigger se logic run hota hai.
- State/data update hota hai, phir React updated UI render karta hai.
- Isi flow ko samajh ke tum same concept kisi naye project me laga sakte ho.

## Real-World Use
- Ye concept production apps me readability, maintainability, aur performance improve karne ke liye use hota hai.
- Interview me mostly ye puchte hain: "kab use karoge, kyu use karoge, aur alternative kya hai?"
