import React from "react";
import TreeMenu, { TreeNode, TreeNodeInArray } from "react-simple-tree-menu";
import 'react-simple-tree-menu/dist/main.css';

type TTreeProps = {
  data:
    | {
        [name: string]: TreeNode;
      }
    | TreeNodeInArray[];
};

const Tree: React.FC<TTreeProps> = ({ data }) => {
  return <TreeMenu data={data} />;
};

export default Tree;
