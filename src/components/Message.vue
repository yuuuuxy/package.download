<script>
import { ElMessage } from "element-plus"
const Message = {
  successArray: ['here u go!!!', 'gogogo f the world', 'go bro, save the world',
    'it\'s all u got'],
  success: (msg) => {
    ElMessage({
      message: msg ? msg : Message.successArray[Math.trunc(Math.random() * 10) % Message.successArray.length],
      type: 'success',
    })
  },
  faildArray: ['不对劲', '快去看看后端'],
  error: (msg) => {
    ElMessage({
      message: msg ? msg : Message.faildArray[Math.trunc(Math.random() * 10) % Message.faildArray.length],
      type: 'error',
    })
  }
}
export default Message;

</script>