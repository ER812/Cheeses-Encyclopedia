import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOneCheese } from '../services/cheeses';
// import { addCheeseToFlavor } from '../services/cheeseFlavors';

export default function CheeseDetail(props) {
  const [cheeseItem, setCheeseItem] = useState(null);
  const [selectedFlavor, setSelectedFlavor] = useState('')
  const { id } = useParams();
  const { flavors } = props;

  useEffect(() => {
    const fetchCheeseItem = async () => {
      const cheeseData = await getOneCheese(id);
      setCheeseItem(cheeseData);
    }
    fetchCheeseItem();
  }, [id])

  const handleChange = (e) => {
    const { value } = e.target;
    setSelectedFlavor(value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cheeseData = await addCheeseToFlavor(selectedCheese, id);
    setCheeseItem(cheeseData);
  }

  return (
    <div>
      <h3>{cheeseItem?.name}</h3>
      {cheeseItem?.flavors.map((flavor) => (
        <p key={flavor.id}>{flavor.name}</p>
      ))}
      <form onSubmit={handleSubmit}>
        <select defaultValue="default" onChange={handleChange}>
          <option value="default" disabled>-- Select a flavor --</option>
          {flavors.map(flavor => (
            <option value={flavor.id} key={flavor.id}>{flavor.name}</option>
          ))}
        </select>
        <button>add</button>
      </form>

    </div>
  )
}