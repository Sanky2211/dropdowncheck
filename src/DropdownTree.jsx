import React, { useState } from "react";
import TreeNode from "./TreeNode";

const DropdownTree = ({ data }) => {
  const [selectedNodes, setSelectedNodes] = useState([]);

  const handleToggle = (node) => {
    // Implement node toggle logic here if needed
  };

  const handleCheck = (node) => {
    const nodeExists = selectedNodes.some(
      (selectedNode) => selectedNode.id === node.id
    );

    if (nodeExists) {
      setSelectedNodes(
        selectedNodes.filter((selectedNode) => selectedNode.id !== node.id)
      );
    } else {
      setSelectedNodes([...selectedNodes, node]);
    }
  };

  return (
    <div>
      {data.map((node) => (
        <TreeNode
          key={node.id}
          node={node}
          onToggle={handleToggle}
          onCheck={handleCheck}
        />
      ))}
      <h4>Selected Nodes:</h4>
      <ul>
        {selectedNodes.map((node) => (
          <li key={node.id}>{node.label}</li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownTree;
