import { createContext, ReactNode, useContext, useState } from 'react';
import api from '../services/api';
import { IFood } from '../types';

interface IOrderProviderProps {
    children: ReactNode;
}
interface OrderContextData {
    order: IFood[];
    addFood: (food: IFood) => Promise<void>;
    deleteFood: (productId: number) => void;
    updateFood: (productId: number, food: IFood) => void;
}
const OrderContext = createContext<OrderContextData>({} as OrderContextData);

export function OrderProvider({ children }: IOrderProviderProps) {
    const [order, setOrder] = useState<IFood[]>([]);

    const addFood = async (food: IFood) => {
        try {
           console.log(food);
            // const response = await api.post('/foods', {
            //     ...food,
            //     available: true,
            // });

            // this.setState({ foods: [...foods, response.data] });

        } catch (err) {
            console.log(err);
        }
    }
    const updateFood = async (foodId: number, food: IFood) => {
        try {
            //todo
        } catch (error) {
            //todo
        }
    }
    const deleteFood = async (foodId: number) => {
        try {
            //todo
        } catch (error) {
            //todo
        }
    }
    return (
        <OrderContext.Provider
            value={{ order, addFood, updateFood, deleteFood }}
        >
            {children}
        </OrderContext.Provider>
    )
}
export function OrderFood(): OrderContextData {
    const context = useContext(OrderContext);

    return context;
}
