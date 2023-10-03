import { useEffect, useState, useCallback } from "react";
import Card from "./Card";



const Main = () => {

    const [employees, setEmployees] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        const fetchData = async () => {
            setIsLoading(true);
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const responseData = await response.json();
    
            if (!response.ok) {
                throw new Error('Что-то пошло не так')
            }
    
            const employeesData = [];
    
            responseData.forEach(employee => {
                employeesData.push({
                    name: employee.name,
                    username: employee.username,
                    email: employee.email,
                    website: employee.website,
                    phone: employee.phone,
                })
            });
    
            setEmployees(employeesData);
            setIsLoading(false);
        }

        fetchData().catch((err) => {
            setIsLoading(false);

        })
    }, []);

    return (
        <main>
            <div class='container'>
                <ul class='grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 grid-flow-row content-evenly py-3'>
                    {employees.map((item, index) => 
                        <Card
                            key={index}
                            name={item.name}
                            username={item.username}
                            email={item.email}
                            website={item.website}
                            phone={item.phone} 
                        />
                    )}
                </ul>
                
            </div>
        </main>
    )
}

export default Main;