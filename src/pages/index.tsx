import yayJpg from '../assets/yay.jpg';

export default function HomePage() {
    const maxWin=()=>{
        const app = window.app
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
