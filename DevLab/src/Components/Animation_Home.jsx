import Animation from "../../public/Animation.json"
import Lottie from "lottie-react"

function Svg() {
  return (
    <Lottie animationData={Animation}  style={{width: "560px"}}/>
  )
}
export default Svg;
