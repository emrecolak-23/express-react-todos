import { useState } from 'react';
import { FC, ReactNode } from 'react';
import { ExpandablePanelContainer, ExpandablePanelTitleContainer, ExpandablePanelTitle, ExpandablePanelImage } from './expandable-panel.styles';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';
import { FiPaperclip } from 'react-icons/fi';

type ExpandablePanel = {
    title: string,
    image: string,
    children: ReactNode
}

const ExpandablePanel:FC<ExpandablePanel> = ({ title, children, image })  => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <ExpandablePanelContainer>
      <ExpandablePanelTitleContainer>
        <ExpandablePanelImage src={image ? `http://localhost:3000/thumbnail/${image}` : 'https://random.imagecdn.app/500/150'} />
        <ExpandablePanelTitle>
          {title}
        </ExpandablePanelTitle>
        <div onClick={handleClick}>
            {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
        </div>
      </ExpandablePanelTitleContainer>
      {isExpanded && <div >{children}</div>}
    </ExpandablePanelContainer>
  );
}

export default ExpandablePanel;
