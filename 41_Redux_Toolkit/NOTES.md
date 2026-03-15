# Redux Toolkit - Detailed Hinglish Notes

## Is Folder me Kya Hua Hai?
- Is folder me `Redux Toolkit` topic ko step-by-step practical code ke through implement kiya gaya hai.
- Main goal: concept samajhna + uska practical implementation dekhna.

## Important Files (Yahi Dekho Pehle)
- `src/App.jsx`
- `src/main.jsx`
- `src/store/components/Counter.jsx`
- `src/store/components/Users.jsx`
- `src/store/features/counter/counterSlice.js`
- `src/store/features/user/userSlice.js`

## Concept Kya Hai? (Simple Hinglish Explanation)
- **Redux Toolkit:** Redux ka modern official way hai jo boilerplate kam karta hai.
- **createSlice:** `createSlice` action creators + reducer logic ek jagah define karta hai.
- **configureStore:** `configureStore` se store setup easy hota hai with better defaults.
- **useSelector/useDispatch:** `useSelector` state read karta hai, `useDispatch` actions bhejta hai.

## Diagram (Redux Toolkit Flow)
```mermaid
flowchart LR
    C[Component] -->|dispatch(action)| ST[Store<br/>configureStore]
    ST --> SL[Slice Reducer<br/>createSlice]
    SL --> NS[New State]
    NS --> ST
    ST -->|useSelector| C
```

## Code Flow Samjho (Step-by-Step)
- Component render hota hai aur initial state/props set hoti hain.
- User interaction ya lifecycle/event trigger se logic run hota hai.
- State/data update hota hai, phir React updated UI render karta hai.
- Isi flow ko samajh ke tum same concept kisi naye project me laga sakte ho.

## Real-World Use
- Ye concept production apps me readability, maintainability, aur performance improve karne ke liye use hota hai.
- Interview me mostly ye puchte hain: "kab use karoge, kyu use karoge, aur alternative kya hai?"
