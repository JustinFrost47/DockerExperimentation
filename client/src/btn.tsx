import { toast } from 'react-toastify'

export default function btns() {
  return (
    <div onClick={() => toast("hi there")}>btn</div>
  )
}
