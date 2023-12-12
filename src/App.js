// import Dropdown from "./Dropdown";
// const itemsData = [
//   { id: 1, label: 'Group A', type: 'group', items: [{ id: 11, label: 'Item 1', type: 'item' }, /* ... */] },
//   { id: 2, label: 'Group B', type: 'group', items: [{ id: 21, label: 'Item 4', type: 'item' }, /* ... */] },
//   // ... other groups or items
// ];

import React from 'react'
import ReactDOM from 'react-dom'

import DropdownTreeSelect from 'react-dropdown-tree-select'
import 'react-dropdown-tree-select/dist/styles.css'

const data = [
  {
      "label": "Support",
      "value": "support",
      "children": [
          {
              "label": "System Admin",
              "value": "system-admin"
          },
          {
              "label": "Compliance",
              "value": "compliance"
          },
          {
              "label": "Lock Desk Rep",
              "value": "lock-desk-rep"
          },
          {
              "label": "Capital Markets Manager",
              "value": "capital-markets-manager"
          },
          {
              "label": "CounterParty Risk",
              "value": "counterparty-risk"
          },
          {
              "label": "Accounting Role",
              "value": "accounting-role"
          }
      ]
  },
  {
      "label": "Seller",
      "value": "seller",
      "children": [
          {
              "label": "Administrator",
              "value": "administrator"
          },
          {
              "label": "Capital Markets",
              "value": "capital-markets"
          },
          {
              "label": "Finance",
              "value": "finance"
          },
          {
              "label": "Operations",
              "value": "operations"
          }
      ]
  },
  {
      "label": "Operations",
      "value": "operations",
      "children": [
          {
              "label": "Indexer",
              "value": "indexer"
          },
          {
              "label": "Indexer NDI",
              "value": "indexer-ndi"
          },
          {
              "label": "Auditor",
              "value": "auditor"
          },
          {
              "label": "Auditor NDI",
              "value": "auditor-ndi"
          }
      ]
  },
  {
      "label": "Sales",
      "value": "sales",
      "children": [
          {
              "label": "Sales Coordinator",
              "value": "sales-coordinator"
          },
          {
              "label": "Sales Executive",
              "value": "sales-executive"
          },
          {
              "label": "Sales Executive Manager",
              "value": "sales-executive-manager"
          }
      ]
  }
]

const onChange = (currentNode, selectedNodes) => {
  console.log('onChange::', currentNode, selectedNodes)
}
const onAction = (node, action) => {
  console.log('onAction::', action, node)
}
const onNodeToggle = currentNode => {
  console.log('onNodeToggle::', currentNode)
}

function App() {
  return (
    <div>
      <DropdownTreeSelect data={data} onChange={onChange} onAction={onAction} onNodeToggle={onNodeToggle} />,
    </div>
  );
}

export default App;
