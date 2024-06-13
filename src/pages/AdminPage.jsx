import CategoryForm from "components/templates/CategoryForm"
import CategoryList from "src/components/templates/categoryList"

function AdminPage () {
    return(
        <div>
            <CategoryList />
          <CategoryForm />
        </div>
    )
}

export default AdminPage