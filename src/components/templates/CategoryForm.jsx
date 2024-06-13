import { useState } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCategory } from "services/category";
import styles from './category.module.css';


function CategoryForm() {
    const [form, setForm] = useState({name: '', icon: "", slug: ''});
    const queryClient = useQueryClient()
const changeHandler = (event) => {
setForm({...form, [event.target.name]: event.target.value})
}

const {mutate, isLoading, error, data} = useMutation(addCategory, {
    onSuccess: queryClient.invalidateQueries("get-category"),
})

const submitHandler = (event) => {
    event.preventDefault();
    if(!form.name || !form.slug || !form.icon) return;
    mutate(form)
}
    return (
       <form onChange={changeHandler} onSubmit={submitHandler} className={styles.form}>
        <h3>
            دسته بندی جدید
        </h3>
        {data?.status === 201 && <p>دسته بندی با موفقیت ایجاد شد.</p>}
        {!!error && <p>مشکلی پیش امده است.</p>}
        <label htmlFor="name">دسته بندی</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="slug">اسلاگ</label>
        <input type="text" name="slug" id="slug" />
        <label htmlFor="icon">ایکون</label>
        <input type="text" name="icon" id="icon" />
        <button type="submit" disabled={isLoading}>ایجاد</button>
       </form>
    )
}

export default CategoryForm