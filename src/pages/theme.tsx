import { useDispatch } from "react-redux";
import { changeTheme } from "store/theme";

export default function Home() {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center">
      <button className="mx-2 bg-gray-300 px-3 py-2 rounded" onClick={() => {
        dispatch(changeTheme(''))
        }}
      >Base</button>
      <button className="dark mx-2 bg-gray-300 px-3 py-2 rounded" onClick={() => {
        dispatch(changeTheme('dark'))
        }}
      >Dark</button>
      <button className="pink mx-2 bg-gray-300 px-3 py-2 rounded" onClick={() => {
        dispatch(changeTheme('pink'))
        }}
      >Pink</button>
    </div>
  )
}
