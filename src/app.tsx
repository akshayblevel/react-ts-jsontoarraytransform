import React from 'react';

function App() {
  const res = {
    result: {
      totalCount: 4,
      items: [
        {
          employees: {
            name: 'Akshay Patel',
            id: 133
          },
          manager: 'Rajesh Patel'
        },
        {
          employees: {
            name: 'Panth Patel',
            id: 140
          },
          manager: 'Rajesh Patel'
        },
        {
          employees: {
            name: 'Jemin Patel',
            id: 141
          },
          manager: 'Rajesh Patel'
        },
        {
          employees: {
            name: 'Chirantan Patel',
            id: 145
          },
          manager: 'Rajesh Patel'
        }
      ]
    }
  };

  interface client {
    id: number;
    name: string;
    age: number;
    avatar: string;
  }

  const clientList: client[] = [];
  res.result.items.map((res1: any) => {
    clientList.push({
      id: res1.employees.id,
      name: res1.employees.name,
      age: Math.random(),
      avatar:
        'https://www.levelaccess.com/wp-content/uploads/2017/10/Financial-Websites-icons-14-150x150.png'
    });
  });
  return (
    <div>
      <div className="p-3 borderBottom">Clients</div>
      <div className="">
        <div className="list-group">
          {clientList.map((item: client, index: number) => (
            <div className="list-group-item" key={item.id}>
              <img src={item.avatar} height="30" className="pr-2" />
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
