import { Component, createRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';
import { OrderFood } from '../../hooks/order';

interface FormElements extends HTMLFormControlsCollection {
  yourInputName: HTMLInputElement
}

interface YourFormElement extends HTMLFormElement {
  readonly elements: FormElements
}

interface IModalAddFoodProps {
  setIsOpen: () => void;
  isOpen: boolean;
}

const ModalAddFood = ({setIsOpen, isOpen}: IModalAddFoodProps) => {
  const { order, addFood } = OrderFood();

  const handleFormSubmit = (e: React.FormEvent<YourFormElement>) => {
    e.preventDefault();
    console.log(e.currentTarget.elements.yourInputName.value)
  }
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
