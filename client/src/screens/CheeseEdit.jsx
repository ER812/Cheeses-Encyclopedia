import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function CheeseEdit(props) {
  const [formData, setFormData] = useState({
    name: ''
  });
  const { name } = formData;
  const { foods, handleUpdate } = props;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const cheeseItem = cheeses.find((cheese) => cheese.id === Number(id));
      setFormData({
        name: cheeseItem.name
      });
    }
    if (cheeses.length) {
      prefillFormData();
    }
  }, [cheeses, id])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleUpdate(id, formData);
    }}>
      <h3>Edit Cheese</h3>
      <label>Name:
        <input
          type='text'
          name='name'
          value={name}
          onChange={handleChange}
        />
      </label>
      <br />
      <button>Submit</button>
    </form>
  )
}