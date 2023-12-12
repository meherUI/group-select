import React, { useState, useEffect } from 'react';

const Dropdown = ({ itemsData }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [expandedGroups, setExpandedGroups] = useState([]);

  useEffect(() => {
    // When the component mounts, select default items
    const defaultSelectedItems = itemsData.filter((item) => item.defaultSelected);
    setSelectedItems([...selectedItems, ...defaultSelectedItems]);
  }, [itemsData]);

  const toggleItem = (item) => {
    const isSelected = selectedItems.some((selectedItem) => selectedItem.id === item.id);

    if (isSelected) {
      setSelectedItems(selectedItems.filter((selectedItem) => selectedItem.id !== item.id));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const toggleGroup = (group) => {
    const isGroupExpanded = expandedGroups.includes(group);

    if (isGroupExpanded) {
      setExpandedGroups(expandedGroups.filter((expandedGroup) => expandedGroup !== group));
      // When collapsing a group, deselect all its items
      const groupItems = itemsData.filter((item) => item.group === group);
      setSelectedItems(selectedItems.filter((selectedItem) => !groupItems.some((groupItem) => groupItem.id === selectedItem.id)));
    } else {
      setExpandedGroups([...expandedGroups, group]);
    }
  };

  const isGroupExpanded = (group) => expandedGroups.includes(group);

  const isGroupSelected = (group) => {
    const groupItems = itemsData.filter((item) => item.group === group);

    return groupItems.every((groupItem) => {
      if (groupItem.type === 'group') {
        return isGroupSelected(groupItem.label);
      }
      return selectedItems.some((selectedItem) => selectedItem.id === groupItem.id);
    });
  };

  const renderItems = (items) => {
    return (
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.type === 'group' && (
              <label>
                <input
                  type="checkbox"
                  checked={isGroupSelected(item.label)}
                  onChange={() => toggleGroup(item.label)}
                />
                {item.label}
              </label>
            )}
            {item.type === 'item' && (
              <label>
                <input
                  type="checkbox"
                  checked={selectedItems.some((selectedItem) => selectedItem.id === item.id)}
                  onChange={() => toggleItem(item)}
                />
                {item.label}
              </label>
            )}
            {item.type === 'group' && isGroupExpanded(item.label) && renderItems(item.items)}
          </li>
        ))}
      </ul>
    );
  };

  return <div>{renderItems(itemsData)}</div>;
};

export default Dropdown;
