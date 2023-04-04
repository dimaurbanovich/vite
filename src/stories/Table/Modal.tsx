import React, { useState } from 'react';
import { StyledModal } from './styled';

export const ModalWindow = () => {
  const [isOpened, setIsOpen] = useState(true);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>open</button>
      <StyledModal
        isOpen={isOpened}
        onBackgroundClick={() => setIsOpen(false)}
        onEscapeKeydown={() => setIsOpen(false)}
      >
        <span>I am a modal!</span>
        <button onClick={() => setIsOpen(false)}>Close me</button>
      </StyledModal>
    </div>
  );
};
