import axios from 'axios';

axios.defaults.baseURL = process.env.API_ROOT;

//拦截器，拿到的东西处理进行输出
axios.interceptors.response.use(
  (res) => {
    return res.data;//输出res.data
  }
);


export  let getSlider = function (){
  return axios.get('/Slider');
};

export let BBT = function (){
  return axios.get('/pay/bbt');
};

export let NT = function (){
  return axios.get('/pay/nt');
};

export let getImg = function (type){
  return axios.get('/pay/getimg?type='+type);
};

export let getproInfo = function (proName) {
  return axios.get('/pay/payPro?proName=' + proName);
};

export let postProInfo = function (data) {
  return axios.post('/buy',data)
};
