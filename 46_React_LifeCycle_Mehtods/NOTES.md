# React LifeCycle Mehtods - Detailed Hinglish Notes

## Is Folder me Kya Hua Hai?
- Is folder me `React LifeCycle Mehtods` topic ko step-by-step practical code ke through implement kiya gaya hai.
- Main goal: concept samajhna + uska practical implementation dekhna.

## Important Files (Yahi Dekho Pehle)
- `src/App.jsx`
- `src/components/Alpha.jsx`
- `src/components/Form.jsx`
- `src/components/Users.jsx`
- `src/main.jsx`
- `src/notes/mounting_updating.jsx`

## Concept Kya Hai? (Simple Hinglish Explanation)
- **Lifecycle Methods:** Class components me mount/update/unmount phases ko methods se handle karte hain.
- **componentDidMount:** Component first render ke baad run hota hai; API call jaisi cheeze yaha hoti hain.
- **componentWillUnmount:** Cleanup ke liye use hota hai (timer remove, listener cleanup, etc).

## Code Flow Samjho (Step-by-Step)
- Component render hota hai aur initial state/props set hoti hain.
- User interaction ya lifecycle/event trigger se logic run hota hai.
- State/data update hota hai, phir React updated UI render karta hai.
- Isi flow ko samajh ke tum same concept kisi naye project me laga sakte ho.

## Real-World Use
- Ye concept production apps me readability, maintainability, aur performance improve karne ke liye use hota hai.
- Interview me mostly ye puchte hain: "kab use karoge, kyu use karoge, aur alternative kya hai?"
