import { useState } from "react";
import AddPostView from "./AddPostView";
import AddPostModel from "./AddPostModal";
import axiosInstance from "../../constants";
import {useNavigate} from 'react-router-dom'

const AddPostController = () => {
  const formModel = new AddPostModel();
  const [form, setForm] = useState(formModel.state);
  //console.log(form)

  const navigate =useNavigate()

  //const [input, setInput] = useState("");

  //const [title, setTitle] = useState("");

  //!hangi inputa yazildigi bilgisi
  //!e, input icerigini aldik
  //!bu sekilde durmadan state olusturmuyoruz
  const onInputChange = (key, e) => {
    setForm({ ...form, [key]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.user || !form.text || !form.title) {
      alert("Tum alanlari doldur loooo");
    }
     
    axiosInstance.post('posts',form).then((response)=> navigate('/'))


  };

  return (
    <AddPostView handleSubmit={handleSubmit} onInputChange={onInputChange} />
  );
};
export default AddPostController;
