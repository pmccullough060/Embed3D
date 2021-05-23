import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';

export function ContextAwareToggle({ children, eventKey, callback }) {

    const currentEventKey = useContext(AccordionContext);
    const decoratedOnClick = useAccordionToggle(
        eventKey,
        () => callback && callback(eventKey),
    );

    const isCurrentEventKey = currentEventKey === eventKey;

    return (

        //update this to take a closed and opened argument instead to make it more re-usable..

        <Button
            type="button"
            style={{ backgroundColor: isCurrentEventKey ? 'pink' : 'lavender' }}
            onClick={decoratedOnClick}
        >
            {
                children ? children : isCurrentEventKey ? 'Close Models' : 'Show Models'
            }
        </Button>
    );
}