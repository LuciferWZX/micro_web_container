import React from "react";
export default function HomePage() {
    const maxWin=()=>{
        const app = window.mwcAPP
        if(app?.win.max){
            app.win.max()
        }
    }
  return (
    <div>
      <button onClick={maxWin}>最大化</button>
    </div>
  );
}
