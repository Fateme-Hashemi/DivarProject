import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { getCategory } from "src/services/category";
import styles from './AddPost.module.css';
import { getCookie } from "src/utils/cookie";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function AddPost() {
    const [form, setForm] = useState({
        title: "",
        amount: null,
        city: "",
        content: "",
        category: "",
        image: null,
    })
    const {data} = useQuery(["get-category"], getCategory );
    const changeHandler = event => {
        const name = event.target.name;
        if ( name !== 'image') {
            setForm({...form, [name]: event.target.value})
        }else {
            setForm({...form, [name]: event.target.files[0]})
        }
        console.log(form)
    }
    const clickHandler = event => {
        event.preventDefault();
        const formData = new FormData();
        for (let i in form) {
            formData.append(i, form[i]);
        }
console.log(formData)
        const token = getCookie('accessToken');
        console.log(token)
        axios.post(`${import.meta.env.VITE_BASE_URL}post/create`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `bearer ${token}`,
            },
        })
        .then(res => toast.success(res.data.message),{  position: "top-left"})
        .catch((error) => toast.error(error.message),{  position: "top-left"});
    };

  return (
    <>
     <form onChange={changeHandler} className={styles.form}>
    <h3>افزودن آگهی</h3>

    <label htmlFor="title">عنوان</label>
    <input type="text" name="title" id="title" />
    <label htmlFor="amount">قیمت</label>
    <input type="number" name="amount" id="amount" />
    <label htmlFor="city">شهر</label>
    <input type="text" name="city" id="city" />
    <label htmlFor="content">توضیحات</label>
    <textarea name="content" id="content" />

    <label htmlFor="category">دسته بندی</label>
<select name="category" id="category">
{data?.data.map((i) => <option key={i._id} value={i._id}>
{i.name}
</option>)}
</select>
<label htmlFor="image">عکس</label>
<input type="file" name="image" id="image" />
<button onClick={clickHandler}>ایجاد</button>
 </form>
 <ToastContainer />
    </>

  )
}

export default AddPost
