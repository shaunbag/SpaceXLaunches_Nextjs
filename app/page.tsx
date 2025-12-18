import SideBar from "./components/SideBar";
import Main from "./main";

export default function Home() {

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 style={{textAlign: 'center'}}>Space X Missions </h1>
      <SideBar />
      <Main />
    </div>
  );
}
