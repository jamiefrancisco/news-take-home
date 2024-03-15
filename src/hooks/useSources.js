import { useState, useEffect } from 'react';

const sourceList = [
 'CBS News',
 'Bleacher Report',
 'ESPN',
 'BBC News',
 'Fox Sports',
 'Time',
 'Forbes',
 'Los Angeles Times',
 'Yahoo Entertainment'
];

export function useSources() {
 const [sources, setSources] = useState(sourceList);
 const [selectedSources, setSelectedSources] = useState(sourceList);

 useEffect(() => {
    setSources(sourceList);
 }, []);

 const handleSourceSelection = (source, isSelected) => {
    setSelectedSources((prevSelectedSources) => {
      if (isSelected) {
        return [...prevSelectedSources, source];
      } else {
        return prevSelectedSources.filter((s) => s !== source);
      }
    });
 };

 return { sources, selectedSources, handleSourceSelection };
}
