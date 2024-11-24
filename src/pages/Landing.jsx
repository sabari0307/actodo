import Header from "../components/header";
import Card from "../components/card";
import TodoContainer from "../components/TodoContainer";
import { useLocation } from "react-router"

function Landing()
{
    const data = useLocation()

    return(
        <div className="bg-black p-16">
      <div className="bg-slate-200 p-10  border rounded-md">
        <Header name={data.state.user}/>
        <div className="flex justify-between gap-7 my-5 flex-wrap">
          <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"} />
          <Card bgcolor={"#FD6663"} title={"Dec"} subtitle={"Time"} />
          <Card bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React"} />
        </div>
        <TodoContainer/>
      </div>
    </div>
    )
}
export default Landing