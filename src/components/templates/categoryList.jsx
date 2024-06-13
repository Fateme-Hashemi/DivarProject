import {  useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getCategory, deleteCategory } from "services/category";
import Loader from "../modules/Loader";
import styles from './category.module.css';


function CategoryList () {
    const queryClient = useQueryClient()
const {data, isLoading} = useQuery(["get-category"], getCategory );
const {mutate } = useMutation(deleteCategory, {
    onSuccess: queryClient.invalidateQueries("get-category"),
    
});
const deleteHandler = id => {
    mutate(id);
}

console.log(data, isLoading)
    return (
        <div className={styles.list}>{isLoading ? <Loader /> : data.data.map((item) => (
            <div key={item._id}>
                <h5>
{item.name}
                </h5>
                <img src={`${item.icon}.svg`} />
                <p>{item.slug}</p>
                <button onClick={() => deleteHandler(item._id)}>
                      حذف کتگوری
                    </button>
            </div>
        )) }</div>

    )
}

export default CategoryList