import { cn } from '@bem-react/classname';
import * as React from 'react';
import Card from '../Card/Card';
import { ICardProps } from '../Card/CardInterfaces';
import EventItems from './EventItems';
import './Events.scss'

import cameraImage from './bitmap.png'
import graphImage from './Richdata.svg'

const cnEvents = cn('Events');
const items: ICardProps[] = EventItems;
items.forEach((item) => {
    if (item.icon === "cam") {
        item.hasImage = true;
        item.data = {};
        item.data.image = cameraImage;
    }

    if (!!item.data && item.data.type === "graph") {
        item.hasImage = true;
        item.data.image = graphImage;
    }


    if (!!item.data) {
        if (!!item.data.temperature) {
            item.data.type = "measurements";
        } else if (!!item.data.albumcover) {
            item.data.type = "music";
        } else if (!!item.data.buttons) {
            item.data.type = "buttons";
        } else if (!!item.data.image) {
            item.data.type = "image";
        }
    }
})

const Events: React.SFC = () => (
    <div className={ cnEvents() }>
        <div className={ cnEvents("Title") }>Лента событий</div>
        <div className={ cnEvents("Ribbon") }>
            {
                items.map((item) => { return(
                    <Card 
                        key={ item.icon }
                        type={ item.type }
                        icon={ item.icon }
                        title={ item.title }
                        source={ item.source }
                        time={ item.time }
                        size={ item.size}
                        description={ item.description }
                        data={ item.data }
                        hasImage={ item.hasImage }
                    />
                    )
                })
            }
        </div>
    </div>
);

export default Events;
