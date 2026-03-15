# ForwardRef - Detailed Hinglish Notes

## Is Folder me Kya Hua Hai?
- Is folder me `ForwardRef` topic ko step-by-step practical code ke through implement kiya gaya hai.
- Main goal: concept samajhna + uska practical implementation dekhna.

## Important Files (Yahi Dekho Pehle)
- `src/App.jsx`
- `src/component/AfterReact19UserInput.jsx`
- `src/component/BeforeReact19UserInput.jsx`
- `src/main.jsx`

## Concept Kya Hai? (Simple Hinglish Explanation)
- **forwardRef:** `forwardRef` parent ko child ke internal DOM/ref object tak access deta hai.
- **Imperative Access:** Focus/input methods jaisi imperative actions expose kar sakte hain.

## Diagram (forwardRef)
```mermaid
flowchart LR
    P[Parent] -->|ref| F[forwardRef Wrapper]
    F --> CH[Child Internal DOM]
    P -->|focus/click| CH
```

## Code Flow Samjho (Step-by-Step)
- Component render hota hai aur initial state/props set hoti hain.
- User interaction ya lifecycle/event trigger se logic run hota hai.
- State/data update hota hai, phir React updated UI render karta hai.
- Isi flow ko samajh ke tum same concept kisi naye project me laga sakte ho.

## Real-World Use
- Ye concept production apps me readability, maintainability, aur performance improve karne ke liye use hota hai.
- Interview me mostly ye puchte hain: "kab use karoge, kyu use karoge, aur alternative kya hai?"
