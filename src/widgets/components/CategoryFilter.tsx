import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared"

const categories = [
  {
    _id: 'gju',
    name: 'УСАДЬБА ГАЛЬСКИХ'
  }
]
const CategoryFilter = () => {
  return (
      <Select>
        <SelectTrigger className="select-field">
          <SelectValue placeholder="Музеи" />
        </SelectTrigger>
        <SelectContent>
          {/* <SelectItem value="All" className="select-item p-regular-14">All</SelectItem> */}
  
          {categories.map((category) => (
            <SelectItem value={category.name} key={category._id} className="select-item p-regular-14">
              {category.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
  )
}
export default CategoryFilter