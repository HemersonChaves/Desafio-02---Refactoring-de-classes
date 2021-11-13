import { FormEvent, SetStateAction, useState } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';
import { OrderFood } from '../../hooks/order';
import { IFood } from '../../types';

interface ITargetSetStateAction { 
  target: { 
    value: SetStateAction<string>; 
  }; 
}


interface IModalAddFoodProps {
  setIsOpen: () => void;
  isOpen: boolean;
  handleAddFood:  (food: IFood) => Promise<void> 
}

const ModalAddFood = ({ setIsOpen, isOpen, handleAddFood }: IModalAddFoodProps) => {
  //const { order, addFood } = OrderFood();
  const [imageUrl, setImageUrl] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  async function handleFormSubmit(event: FormEvent) {
    //event.preventDefault();
    const food: IFood = {
      name,
      image: imageUrl,
      price,
      description,
      available: true
    }
    await handleAddFood(food);
  }
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form onSubmit={handleFormSubmit}>
        <h1>Novo Prato</h1>
        <Input
          name="image"
          placeholder="Cole o link aqui"
          icon={undefined}
          onChange={(event: ITargetSetStateAction) => setImageUrl(event.target.value)} />

        <Input
          name="name"
          placeholder="Ex: Moda Italiana"
          icon={undefined}
          onChange={(event:ITargetSetStateAction) => setName(event.target.value)}
        />
        <Input 
        name="price" 
        placeholder="Ex: 19.90" 
        icon={undefined} 
        onChange={(event:ITargetSetStateAction) => setPrice(event.target.value)}
        />

        <Input 
        name="description" 
        placeholder="Descrição" 
        icon={undefined} 
        onChange={(event:ITargetSetStateAction) => setDescription(event.target.value)}
        />
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}

/*class ModalAddFood extends Component {
  constructor(props) {
    super(props);

    this.formRef = createRef();
  }

  handleSubmit = async data => {
    const { setIsOpen, handleAddFood } = this.props;

    handleAddFood(data);
    setIsOpen();
  };

  render() {
    // const { isOpen, setIsOpen } = this.props;

    return (
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Form onSubmit={handleFormSubmit}>
          <h1>Novo Prato</h1>
          <Input name="image" placeholder="Cole o link aqui" icon={undefined} />

          <Input name="name" placeholder="Ex: Moda Italiana" icon={undefined} />
          <Input name="price" placeholder="Ex: 19.90" icon={undefined} />

          <Input name="description" placeholder="Descrição" icon={undefined} />
          <button type="submit" data-testid="add-food-button">
            <p className="text">Adicionar Prato</p>
            <div className="icon">
              <FiCheckSquare size={24} />
            </div>
          </button>
        </Form>
      </Modal>
    );
  }
};*/

export default ModalAddFood;
