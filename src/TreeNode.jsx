import React, { useState } from "react";
import { MdExpandMore, MdChevronRight, MdCheckCircle } from "react-icons/md";

const TreeNode = ({ node, onToggle, onCheck }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    onToggle(node);
  };

  const handleCheck = () => {
    onCheck(node);
  };

  const hasChildren = node.children && node.children.length > 0;

  return (
    <div>
      <span>
        <input
          type="checkbox"
          checked={node.checked || false}
          onChange={handleCheck}
        />
        {node.checked && <MdCheckCircle style={{ color: "blue" }} />}
        {hasChildren &&
          (isOpen ? (
            <MdExpandMore onClick={handleToggle} />
          ) : (
            <MdChevronRight onClick={handleToggle} />
          ))}
        {node.label}
      </span>
      {isOpen && hasChildren && (
        <div style={{ marginLeft: "20px" }}>
          {node.children.map((childNode) => (
            <TreeNode
              key={childNode.id}
              node={childNode}
              onToggle={onToggle}
              onCheck={onCheck}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TreeNode;
