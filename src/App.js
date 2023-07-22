import React from "react";
import DropdownTree from "./DropdownTree";

const App = () => {
  const treeData = [
    {
      id: "1",
      label: "Parent 1",
      children: [
        {
          id: "1-1",
          label: "Child 1"
        },
        {
          id: "1-2",
          label: "Child 2"
        }
      ]
    },
    {
      id: "2",
      label: "Parent 2",
      children: [
        {
          id: "2-1",
          label: "Child 3",
          children: [
            {
              id: "2-1-1",
              label: "Child 3.1"
            },
            {
              id: "2-1-2",
              label: "Child 3.2"
            }
          ]
        },
        {
          id: "2-2",
          label: "Child 4"
        }
      ]
    }
  ];

  return (
    <div>
      <h1>Dropdown Tree with Checkboxes</h1>
      <DropdownTree data={treeData} />
    </div>
  );
};

export default App;
