import React from 'react';
import { Card } from '../cards/card.component';
import './card-list.styles.css';

export const CardList = props => (
        <div className='card-list'>
        {props.devils.map(devil => (
            <Card key={devil.id} devil={devil}/>
             
        ))} 
        </div>
        )