<script>
import axios from 'axios';
import Message from './Message.vue';


const api = axios.create({
  baseURL: `http://${document.domain}:8081`,
  timeout: 50000,
});
const Service = {
  get: (url, cb, cbError = null) => {
    api.get(url).then(res => {
      if (res.status === 200) {
        Message.success();
        cb(res);
      } else {
        cbError();
        Message.error();
      }
    });
  },
};

export default Service;
</script>