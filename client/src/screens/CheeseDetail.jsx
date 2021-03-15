import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOneCheese } from '../services/cheeses';
import Comments from '../screens/Comments';
// import { addCheeseToFlavor } from '../services/cheeseFlavors';

export default function CheeseDetail(props) {
  const [cheeseItem, setCheeseItem] = useState([]);
  // const [selectedFlavor, setSelectedFlavor] = useState('')
  // const [selectedCheese, setSelectedCheese] = useState('')
  const { id } = useParams();
  const { comments, cheeses } = props;

  useEffect(() => {
    const fetchCheeseItem = async () => {
      const cheeseData = await getOneCheese(id);
      setCheeseItem(cheeseData);
    }
    console.log(cheeseItem)
    fetchCheeseItem();
  }, [id])

  // const handleChange = (e) => {
  //   const { value } = e.target;
  //   setSelectedFlavor(value);
  // }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const cheeseData = await addCheeseToFlavor(selectedCheese, id);
  //   setCheeseItem(cheeseData);
  // }

  return (
    <div className="paragraph">
      <h3>{cheeseItem?.name}</h3>
      {/* {cheeseItem?.comments((cheese) => ( */}
        <div>
        <p key={cheeseItem.id}>Region: {cheeseItem?.region}</p>
        <p key={cheeseItem.id}>Origin: {cheeseItem?.origin}</p>
        <p key={cheeseItem.id}>Source: {cheeseItem?.source}</p>
        <p key={cheeseItem.id}>Description: {cheeseItem?.description}</p>
        <p key={cheeseItem.id}>Culinary Uses: {cheeseItem?.culinary_uses}</p>
        </div>
      <Comments comments={comments}/>
    </div>
  )
}